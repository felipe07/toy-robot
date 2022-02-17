import { Position } from './Position';

export class Board {
    readonly _dimension: number = 5;

    get dimension() {
        return this._dimension;
    }

    isPositionInside(position: Position): boolean {
        return  position.x >= 0
            && position.x < this.dimension
            && position.y >= 0 
            && position.y < this.dimension;
    }
}
