import robot from "robotjs"

import sleep from 'sleep'

// Set speed

robot.setKeyboardDelay(200)
robot.setMouseDelay(100)

// Open Calc


robot.moveMouse(50,50)
robot.mouseClick('left')

robot.keyTap('backspace')
robot.typeString('libreoffice calc')
robot.keyTap('enter')

// Wait for calc to open


sleep.msleep(5000)


// Write something



robot.moveMouse(500,1200)
robot.mouseClick('left')

sleep.msleep(500)



robot.typeStringDelayed('=round( 3.14' ,180)

robot.keyTap('8','shift')

robot.typeStringDelayed('1.4414 , 2)', 180)

robot.keyTap('enter')

// Export as pdf

sleep.msleep(1000)


robot.keyTap('f','alt')

robot.keyTap('e')

robot.keyTap('enter')

robot.keyTap('enter')

sleep.msleep(500)


robot.typeStringDelayed('Prova Automatica',180)

sleep.msleep(500)


robot.keyTap('enter')

console.log('Automation task completed')



// robot.keyTap('s','control')

//robot.keyTap('down')
// r




