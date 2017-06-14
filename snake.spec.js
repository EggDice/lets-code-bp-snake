'use strict'

import test from 'ava'
import {moveSnake, turnSnake} from './snake.js'

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
    direction: 'left',
    body: [
      [1, 0], [2, 0], [3, 0], [4, 0]
    ]
  }
  const expected = {
    direction: 'left',
    body: [
      [0, 0], [1, 0], [2, 0], [3, 0]
    ]
  }
  t.deepEqual(moveSnake(snake), expected);
})

test(t => {
  const snake = {
    direction: 'top',
    body: [
      [0, 1], [0, 2], [0, 3], [0, 4]
    ]
  }
  const expected = {
    direction: 'top',
    body: [
      [0, 0], [0, 1], [0, 2], [0, 3]
    ]
  }
  t.deepEqual(moveSnake(snake), expected);
})

test(t => {
  const snake = {
    direction: 'top',
    body: [
      [0, 0], [0, 1], [0, 2], [0, 3]
    ]
  }
  const expected = {
    direction: 'top',
    body: [
      [0, 19], [0, 0], [0, 1], [0, 2]
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

test(t => {
  const snake = {
    direction: 'right',
    body: [
      [29, 0], [28, 0], [27, 0], [26, 0]
    ]
  }
  const expected = {
    direction: 'bottom',
    body: [
      [29, 0], [28, 0], [27, 0], [26, 0]
    ]
  }
  t.deepEqual(turnSnake(snake, 'bottom'), expected);
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
      [29, 0], [28, 0], [27, 0], [26, 0]
    ]
  }
  t.deepEqual(turnSnake(snake, 'left'), expected);
})
