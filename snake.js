'use strict'

import {config} from './config.js'

const VELOCITY_BY_DIRECTION = {
  top: [0, -1],
  right: [1, 0],
  bottom: [0, 1],
  left: [-1, 0]
}

export function moveSnake({direction, body}) {
  const head = movePoint(body[0], direction)
  return Object.freeze({
    direction,
    body: [head, ...body.slice(0, body.length - 1)]
  })
}

export function turnSnake({body, direction}, newDirection) {
  return {
    direction: isOpposite(direction, newDirection) ? direction : newDirection, 
    body
  }
}

function isOpposite(dir1, dir2) {
  const vel1 = VELOCITY_BY_DIRECTION[dir1]
  const vel2 = VELOCITY_BY_DIRECTION[dir2]
  return vel1
    .map((e, i) => e + vel2[i])
    .every(e => e === 0);
}

function movePoint([x, y], direction) {
  const [xv, yv] = VELOCITY_BY_DIRECTION[direction]
  return [x + xv, y + yv].map(overflowCoord)
}

function overflowCoord(coord, index) {
  return (config.SIZE[index] + coord) % config.SIZE[index]
}

