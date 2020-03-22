// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")

import React from 'react'
import {render} from 'react-dom'
import {Game, Home} from 'application'

import './application.css'


document.addEventListener("DOMContentLoaded", () => {
  const gameDom = document.getElementById('mount-game')

  if (gameDom) {
    const newElement = React.createElement(Game, gameDom.dataset)
    render(newElement, gameDom)
  }

  const homeDom = document.getElementById('mount-home')

  if (homeDom) {
    const newElement = React.createElement(Home, homeDom.dataset)
    render(newElement, homeDom)
  }
})
