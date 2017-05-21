import robot from "robotjs"

import sleep from 'sleep'

import venturi from './fc8_main'

// Set speed

robot.setKeyboardDelay(200)
robot.setMouseDelay(100)

// Open FC8


robot.keyTap('command')

robot.typeString('FC8')

robot.keyTap('enter')

sleep.msleep(500)

// Insert Data


//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"
venturi.machinedinlet("Upstream", 
                      "Duplex",
                      {id: "User Defined Pipe Material", name: "", coeffThermalExpansion: ""} , 
                      "userdefined",
                      {id:"User Defined Venturi Cylindrical Throat", name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
                      "McOn")

/*robot.keyTap('enter')

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

robot.keyTap('enter')*/

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

robot.typeString('ProvaInputVenturi')

robot.keyTap('enter')
































