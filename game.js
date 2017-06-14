'use strict'

import {moveSnake} from './snake.js'
import {config} from './config.js'

export default function gameFactory(draw) {
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
    return config
  }

  return Object.freeze({
    getSnake,
    tick,
    getConfig
  })
}
