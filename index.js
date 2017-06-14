'use strict'

const canvas = document.querySelector('.game-canvas')
const context = canvas.getContext('2d')

for (let i = 0; i < 4; i++) {
 context.fillRect(i * 20 + 2, 2, 16, 16)
}


