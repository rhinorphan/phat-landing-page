import React from 'react'
import Game from 'Game.scss'

function Game() {
  return (
    <div class="presentation-content">
  <h1 class="presentation-title">
    Custom Property Retro Buttons
  </h1>
  <div class="top-button-group">
    <button class="retro-button">Start</button><button class="retro-button">Select</button>
  </div>
  <div class="bottom-button-group">
    <button class="retro-button red-button">A</button><button class="retro-button yellow-button">B</button><button class="retro-button blue-button">X</button><button class="retro-button green-button">Y</button>
  </div>
</div>
  )
}

export default Game
