import { Board } from './Board';
import { Orientation, Position } from './Position';

export class Robot {
    _position: Position | undefined;
    _board: Board;

    constructor (board: Board) {
        this._board = board;
    }

    get position() {
        return this._position;
    }

    get board() {
        return this._board;
    }

    place(position: Position): void {
        if (this.board.isPositionInside(position))
            this._position = position;
    }

    move(): void {
        if (this.position == undefined)
            return;

        const newPosition = new Position(
            this._position.x,
            this._position.y,
            this._position.orientation,
        );
        
        switch (this._position._orientation) {
            case Orientation.NORTH:
                newPosition.y = newPosition.y + 1;
                break;
            case Orientation.SOUTH:
                newPosition.y = newPosition.y - 1;
                break;
            case Orientation.EAST:
                newPosition.x = newPosition.x + 1;
                break;
            case Orientation.WEST:
                newPosition.x = newPosition.x - 1;
                break;
            default:
                throw Error(`Unknown position orientation: ${this._position._orientation}`);
        }

        if (this.board.isPositionInside(newPosition))
            this._position = newPosition;
    }

    left(): void {
        if (this.position == undefined)
            return;

        switch (this._position._orientation) {
            case Orientation.NORTH:
                this._position._orientation = Orientation.WEST;
                break;
            case Orientation.SOUTH:
                this._position._orientation = Orientation.EAST;
                break;
            case Orientation.EAST:
                this._position._orientation = Orientation.NORTH;
                break;
            case Orientation.WEST:
                this._position._orientation = Orientation.SOUTH;
                break;
            default:
                throw Error(`Unknown position orientation: ${this._position._orientation}`);
        }
    }

    right(): void {
        if (this.position == undefined)
            return;

        switch (this._position._orientation) {
            case Orientation.NORTH:
                this._position._orientation = Orientation.EAST;
                break;
            case Orientation.SOUTH:
                this._position._orientation = Orientation.WEST;
                break;
            case Orientation.EAST:
                this._position._orientation = Orientation.SOUTH;
                break;
            case Orientation.WEST:
                this._position._orientation = Orientation.NORTH;
                break;
            default:
                throw Error(`Unknown position orientation: ${this._position._orientation}`);
        }
    }

    report(): String {
        return `${this._position._x}, ${this._position._y}, ${Orientation[this._position._orientation]}`;
    }
}
