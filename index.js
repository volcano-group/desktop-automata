import robot from "robotjs"

import sleep from 'sleep'

// Set speed

robot.setKeyboardDelay(200)
robot.setMouseDelay(100)

// Open FC8


robot.keyTap('command')

robot.typeString('FlowConsultant8')

robot.keyTap('enter')

sleep.msleep(500)

/*// Insert Data

robot.keyTap('enter')

robot.keyTap('enter')

robot.keyTap('tab')

robot.keyTap('enter')

robot.keyTap('enter')

robot.keyTap('tab')

robot.keyTap('enter')

for(let i = 8; i; i--)
  robot.keyTap('down')

robot.keyTap('tab')

robot.keyTap('enter')

for(let i = 8; i; i--)
  robot.keyTap('down')

robot.keyTap('tab')

robot.keyTap('enter')

for(let i = 3; i; i--)
  robot.keyTap('down')

robot.keyTap('space')

for(let i = 2; i; i--)
  robot.keyTap('tab')

robot.keyTap('space')

for(let i = 2; i; i--)
  robot.keyTap('tab')

robot.keyTap('enter')

robot.keyTap('tab')

robot.keyTap('enter')

//

for(let i = 3; i; i--)
  robot.keyTap('left')

robot.keyTap('right')

robot.keyTap('enter')

robot.keyTap('enter')

robot.keyTap('tab')

robot.keyTap('enter')

for(let i = 6; i; i--)
  robot.keyTap('tab')

robot.keyTap('enter')

robot.keyTap('enter')

robot.keyTap('enter')

for(let i = 2; i; i--)
  robot.keyTap('tab')

robot.keyTap('enter')

robot.typeString('Prova Automatica')

robot.keyTap('enter')*/
































