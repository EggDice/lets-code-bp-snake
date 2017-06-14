'use strict'

import gameFactory from './game.js'

const TILE_SIZE = 20
const TILE_PADDING = 2
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 400

const canvas = document.querySelector('.game-canvas')
const context = canvas.getContext('2d')

const game = gameFactory((snakePoints) => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  snakePoints.forEach(([x, y]) => {
    const drawnTileSize = TILE_SIZE - 2 * TILE_PADDING; 
    context.fillRect(
      x * TILE_SIZE + TILE_PADDING,
      y * TILE_SIZE + TILE_PADDING,
      drawnTileSize,
      drawnTileSize
    )
  })
})

setInterval(game.tick, 200)

