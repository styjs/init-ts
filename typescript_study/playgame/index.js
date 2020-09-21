var Player;
(function (Player) {
    Player["x"] = "x";
    Player["o"] = "o";
})(Player || (Player = {}));
var winArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
var steps = 0;
var cells = document.querySelectorAll('.cell');
var currentPlayer = Player.x;
var gamebord = document.querySelector('#bord');
var message = document.querySelector("#message");
var winner = document.querySelector("#winner");
var restart = document.querySelector('#restart');
restart.addEventListener('click', function () {
    message.style.display = 'none';
    steps = 0;
    currentPlayer = Player.x;
    gamebord.classList.remove(Player.x, Player.o);
    gamebord.classList.add(currentPlayer);
    cells.forEach(function (item) {
        item = item;
        item.classList.remove(Player.x, Player.o);
        item.removeEventListener('click', clickCell);
        item.addEventListener('click', clickCell, { once: true });
    });
});
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    steps++;
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = ' block';
        winner.innerText = currentPlayer + '赢了';
        console.log('当前玩家' + currentPlayer + '获胜了');
        return;
    }
    if (steps === 9) {
        console.log('平局');
        message.style.display = ' block';
        winner.innerText = '平局';
        return;
    }
    currentPlayer = currentPlayer === Player.x ? Player.o : Player.x;
    // 下一步提示
    gamebord.classList.remove(Player.x, Player.o);
    gamebord.classList.add(currentPlayer);
}
function checkWin(player) {
    return winArr.some(function (item) {
        return cells[item[0]].classList.contains(player) &&
            cells[item[1]].classList.contains(player) &&
            cells[item[2]].classList.contains(player);
    });
}
