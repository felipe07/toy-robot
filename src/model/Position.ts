export enum Orientation {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST',
}

export class Position {
    _x: number;
    _y: number;
    _orientation: Orientation;

    constructor(x: number, y: number, orientation: Orientation) {
        this._x = x;
        this._y = y;
        this._orientation = orientation;
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    get orientation() {
        return this._orientation;
    }

    set x(newX: number) {
        this._x = newX;
    }

    set y(newY: number) {
        this._y = newY;
    }
}
