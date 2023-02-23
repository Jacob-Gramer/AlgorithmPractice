var findBall = function (grid) {

    let drops = [];

    for (let col = 0; col < grid[0].length; col++) {
        let y = 0,
            x = col,
            position = grid[y][x],
            pass = true;
        while (y <= grid.length) {
            if (y === grid.length) {
                break;
            }
            if (position === 1) {
                x += 1;
                position = grid[y][x];
                if (position === 1) {
                    y += 1;
                    position = grid[y][x];
                } else {
                    pass = false;
                    break;
                }
            } else {
                x -= 1;
                position = grid[y][x];
                if (position === -1) {
                    y += 1;
                    if (y === grid.length) break;
                    position = grid[y][x];
                } else {
                    pass = false;
                    break;
                }
            }
        }
        if (pass === true) {
            drops.push(x);
        } else {
            drops.push(-1);
        }
    }
    return drops;
};


console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.log(findBall([[-1]]));
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]));
