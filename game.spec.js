'use strict'

import test from 'ava'
import gameFactory from './game.js'

test(t => {
  const game = gameFactory(() => {})
  const expected = {
    direction: 'right',
    body: [
      [3, 0], [2, 0], [1, 0], [0, 0]
    ]
  }
  t.deepEqual(game.getSnake(), expected)
})

test(t => {
  const game = gameFactory(() => {})
  game.tick()
  const expected = {
    direction: 'right',
    body: [
      [4, 0], [3, 0], [2, 0], [1, 0]
    ]
  }
  t.deepEqual(game.getSnake(), expected)
})

test(t => {
  const game = gameFactory((snakePoints) => {
    const expected = [
      [4, 0], [3, 0], [2, 0], [1, 0]
    ]
    t.deepEqual(snakePoints, expected)
  })
  game.tick()
})

test(t => {
  const game = gameFactory(() => {})
  const expected = {
    WIDTH: 30,
    HEIGHT: 20
  }
  t.deepEqual(game.getConfig(), expected)
})
