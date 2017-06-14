'use strict'

import test from 'ava'
import {moveSnake} from './snake.js'

test(t => {
  const snake = {
    direction: 'right',
    body: [
      [3, 0], [2, 0], [1, 0], [0, 0]
    ]
  }
  const expected = {
    direction: 'right',
    body: [
      [4, 0], [3, 0], [2, 0], [1, 0]
    ]
  }
  t.deepEqual(moveSnake(snake), expected);
})

test(t => {
  const snake = {
    direction: 'right',
    body: [
      [4, 0], [3, 0], [2, 0], [1, 0]
    ]
  }
  const expected = {
    direction: 'right',
    body: [
      [5, 0], [4, 0], [3, 0], [2, 0]
    ]
  }
  t.deepEqual(moveSnake(snake), expected);
})

test(t => {
  const snake = {
    direction: 'right',
    body: [
      [29, 0], [28, 0], [27, 0], [26, 0]
    ]
  }
  const expected = {
    direction: 'right',
    body: [
      [0, 0], [29, 0], [28, 0], [27, 0]
    ]
  }
  t.deepEqual(moveSnake(snake), expected);
})
