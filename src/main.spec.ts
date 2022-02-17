import { Board } from './model/Board';
import { Orientation, Position } from './model/Position';
import { Robot } from './model/Robot';

test('should report correct position', () => {
    const board = new Board();
    const robot: Robot = new Robot(board);

    robot.place(new Position(0, 0, Orientation.NORTH));
    robot.move();

    expect(robot.report()).toEqual('0, 1, NORTH');

    robot.place(new Position(0, 0, Orientation.NORTH));
    robot.left();

    expect(robot.report()).toEqual('0, 0, WEST');

    robot.place(new Position(1, 2, Orientation.EAST));
    robot.move();
    robot.move();
    robot.left();
    robot.move();

    expect(robot.report()).toEqual('3, 3, NORTH');
});

test('should discard commands until robot is placed', () => {
    const board = new Board();
    const robot: Robot = new Robot(board);

    robot.move();
    robot.left();
    robot.place(new Position(0, 0, Orientation.NORTH));
    robot.move();
    robot.move();

    expect(robot.report()).toEqual('0, 2, NORTH');
});