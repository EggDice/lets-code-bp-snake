'use strict'

import {moveSnake} from './snake.js'

export default function gameFactory(draw) {
  const WIDTH = 30
  const HEIGHT = 20

  let snake = {
    direction: 'right',
    body: [
      [3, 0], [2, 0], [1, 0], [0, 0]
    ]
  }

  function getSnake() {
    return snake
  }

  function tick() {
    snake = moveSnake(snake)
    draw(snake.body)
  }

  function getConfig() {
    return {
      WIDTH,
      HEIGHT
    }
  }

  return Object.freeze({
    getSnake,
    tick,
    getConfig
  })
}
