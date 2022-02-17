#!/usr/bin/env node

import * as lineReader from 'line-reader';

import { Board } from './model/Board';
import { Robot } from './model/Robot';
import { Position } from './model/Position';

try {
    const board = new Board();
    const robot = new Robot(board);

    lineReader.eachLine('src/resources/commands.txt', (line: String) => {
        if (line.length > 0)
            processCommandLine(line, robot);
    });
} catch (error) {
    console.log(JSON.stringify(error));
}

function processCommandLine(line: String, robot: Robot) {
    const command = line.trim().split(' ');
    const instruction = command[0].trim().toUpperCase();

    let parameters = undefined;
    let posX = undefined;
    let posY = undefined;
    let orientation = undefined;

    if (command.length === 2) {
        parameters = command[1].trim().split(',');
        posX = Number(parameters[0].trim());
        posY = Number(parameters[1].trim());
        orientation = parameters[2].trim();
    }

    switch (instruction) {
        case 'PLACE':
            robot.place(new Position(posX, posY, orientation));
            break;
        case 'MOVE':
            robot.move();
            break;
        case 'LEFT':
            robot.left();
            break;
        case 'RIGHT':
            robot.right();
            break;
        case 'REPORT':
            printReport(robot);
            break;
        default:
            throw Error(`Unsupported command: ${line}`);
    }
}

function printReport(robot: Robot) {
    if (robot.position != undefined)
        console.log(robot.report());
}