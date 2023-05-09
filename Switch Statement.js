let athleteFinalPosition = 'first place'

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!')
    break
  case 'second place':
    console.log('You get the silver medal!')
    break
  case 'third place':
    console.log('You get the bronze medal!')
    break
  default:
    console.log('No medal awarded.')
    break
}

//before learn switch statement , did learn on shortcut if-else statement

let weather = 'summer'

if (weather === 'summer') {
  console.log('Yeah it is summer time')
} else if (weather !== 'summer') {
  console.log('Its not summer')
} else {
  console.log('Error')
}

//instead of using if-else method we also can use ternary method
weather === 'summer' ? console.log('Awesome, its summer') : console.log('Error')
