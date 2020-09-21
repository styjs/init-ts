enum Player {
  x = 'x',
  o = 'o'
}

let winArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

let steps: number = 0

let cells = document.querySelectorAll('.cell')
let currentPlayer: Player = Player.x
let gamebord = document.querySelector('#bord') as HTMLElement
let message = document.querySelector("#message") as HTMLDivElement
let winner = document.querySelector("#winner") as HTMLParagraphElement
let restart = document.querySelector('#restart') as HTMLButtonElement

restart.addEventListener('click', function () {
  message.style.display = 'none'
  steps = 0
  currentPlayer = Player.x
  gamebord.classList.remove(Player.x, Player.o)
  gamebord.classList.add(currentPlayer)
  cells.forEach(item => {
    item = item as HTMLElement
    item.classList.remove(Player.x, Player.o)
    item.removeEventListener('click', clickCell)
    item.addEventListener('click', clickCell, {once: true})
  })
})

cells.forEach(item => {
  let cell = item as HTMLElement
  cell.addEventListener('click', clickCell, {once: true})
})

function clickCell(event: MouseEvent): void {
  let target = event.target as HTMLElement
  target.classList.add(currentPlayer)

  steps++

  let isWin = checkWin(currentPlayer)
  if (isWin) {
    message.style.display = ' block'
    winner.innerText = currentPlayer + '赢了'
    console.log('当前玩家' + currentPlayer + '获胜了')
    return
  }

  if (steps === 9) {
    console.log('平局')
    message.style.display = ' block'
    winner.innerText = '平局'
    return
  }

  currentPlayer = currentPlayer === Player.x ? Player.o : Player.x

  // 下一步提示
  gamebord.classList.remove(Player.x, Player.o)
  gamebord.classList.add(currentPlayer)
}

function checkWin(player: Player): boolean {
  return winArr.some(item => {
    return cells[item[0]].classList.contains(player) &&
    cells[item[1]].classList.contains(player) &&
    cells[item[2]].classList.contains(player)
  })
}
