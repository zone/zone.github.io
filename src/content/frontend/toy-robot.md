---
subTitle: Frontend
title: Toy robot challenge
description: Don't let the robot fall off the table!
---

> This is not a test! Seriously, try and have fun with it, make it your own!

## Introduction

- 😍 Be sure to write comments, a README and any assumptions. Provide instructions on how to run the project and any notes about your solution.
- 🤩 Feel free to use a JavaScript framework, we use React, Vue and plain JavaScript here but use what you’re most comfortable with.
- 🤨 You can also use a starter kit like [Create React App][create-react-app] or [Vue CLI][vue-cli] to save time.
- 🤗 UI is great but a clean layout and typography will do.
- 🧐 We’re most interested to see problem solving and your approach… also ES6 please.
- 😇 Keep it simple, keep it DRY, but don’t over complicate or over engineer, comment and test as much as possible.
- 🤓 Commit your code to a public Git repository and provide us with the URL.

## Brief

You have a toy robot on a table top, a grid of 5 x 5 units, there are no obstructions. You can issue commands to your robot allowing it to roam around the table top. But be careful, don't let it fall off!

Create an app that allows [commands](#input-commands) to be issued to the robot. The robot should be prevented from failing off the table top to its destruction.

A failed command should not stop the app, valid commands should be allowed.

The application should discard all commands until a valid `place()` command has been executed.

0, 0 on the grid should be seen as bottom left.

## Input

> Every command should provide visual output that the command has either succeeded or failed.

### `place(x, y, facing)`

- `x` and `y` are integers that relate to a location on the grid. Values that are outside the boundary of the grid should not be allowed.
- `facing` is a string referencing the direction the robot is facing. Values `NORTH`, `SOUTH`, `EAST` or `WEST` are allowed.

### `move()`

Moves the robot 1 grid unit in the direction it is facing unless that movement will cause the robot to fall off the grid.

### `left()`

Rotate the robot 90° anticlockwise/counterclockwise.

### `right()`

Rotate the robot 90° clockwise.

### `report()`

Outputs the robot's current grid location and facing direction.

## Output

- `place(0, 0, 'NORTH')`
- `move()`
- `report()` _=> Output: 0, 1, NORTH_
- `place(0, 0, NORTH)`
- `left()`
- `report()` _=> Output: 0, 0, WEST_
- `place(1, 2, EAST)`
- `move()`
- `move()`
- `left()`
- `move()`
- `report()` _=> Output: 3, 3, NORTH_

[create-react-app]: https://github.com/facebook/create-react-app#readme
[vue-cli]: https://vuejs.org/v2/guide/installation.html#CLI
