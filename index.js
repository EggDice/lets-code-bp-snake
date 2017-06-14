'use strict'

import {moveSnake} from './snake.js'

const canvas = document.querySelector('.game-canvas')
const context = canvas.getContext('2d')

let snake = {
  direction: 'right',
  body: [
    [3, 0], [2, 0], [1, 0], [0, 0]
  ]
}

setInterval(() => {
  context.clearRect(0, 0, 600, 400);
  snake.body.forEach(([x, y]) => {
    context.fillRect(x * 20 + 2, y * 20 + 2, 16, 16)
  })
  snake = moveSnake(snake)
}, 200)

