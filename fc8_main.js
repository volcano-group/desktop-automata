import robot from 'robotjs'
import sleep from 'sleep'  

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

exports.startFC8 = function(){
    robot.keyTap('command')
    robot.typeString('FC8')
    robot.keyTap('enter')
    sleep.msleep(500)
}

exports.autoCompileGas = function(){
    let i = 0
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('enter')
    robot.keyTap('enter')
}

exports.printPDF = function(){
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('enter')
    sleep.msleep(1000)
    robot.typeString('ProvaInputVenturi')
    robot.keyTap('enter')
}
