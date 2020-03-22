import UIfx from 'uifx'
import plop0file from './mp3s/plop0.mp3'
import plop1file from './mp3s/plop1.mp3'

addEventListener('message', event => {
  console.log(event)
  const audioElement = new Audio(plop0file)
  audioElement.play()
  // const plop0 = new UIfx(plop0file)
  // const plop1 = new UIfx(plop1file)

  // Math.round(Math.random()) === 1 ? plop0.play() : plop1.play()
});
