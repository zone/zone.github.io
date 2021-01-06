---
subTitle: Backend
title: Toy robot challenge
description: Don't let the robot fall off the table!
---

# Toy Robot Task 
You have a toy robot on a table top, a grid of 5 x 5 units, there are no obstructions. You can issue commands to your robot allowing it to roam around the table top. But be careful, don't let it fall off!

## Commands
The robot should be able to process the following commands.

### `PLACE X,Y,FACING`

- Puts the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command.
- The application should discard all commands in the sequence until a valid PLACE command has been executed.

### `MOVE`

Moves the toy robot one unit forward in the direction it is currently facing.

### `LEFT`

Will rotate the robot 90° anticlockwise without changing the position of the robot.

### `RIGHT`

Rotate the robot 90° clockwise without changing the position of the robot.

### `REPORT`

Outputs the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

## Constraints
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. 
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
- Input can be from a file, or from standard input, as the developer chooses.
- You need to provide test data/results for the app & its logic.


## Example Input & Output

- `place 0,0,NORTH`
- `move`
- `report` => _Output:0, 1, NORTH_
- `place 0, 0, NORTH`
- `left`
- `report` => _Output:0, 0, WEST_
- `place 1,2,EAST`
- `move`
- `move`
- `left`
- `move`
- `report` => _Output:3, 3, NORTH_



## Our Expectations

- Be sure to write comments and a README. Provide instructions on how to run the project and any notes  about your solution.
- We're most interested to see problem solving and your approach.
- Keep it simple, keep it DRY, but don't over complicate or over engineer, comment and test as appropriate.
- Commit your code to a public Git repository and provide us with the URL.
- Don't spend days on this, but do let us know what you think is missing and what you'd add given more time.
- Please do not copy solutions existing off the internet.
