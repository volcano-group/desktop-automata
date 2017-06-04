import robot from 'robotjs'
import sleep from 'sleep'  

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

let type = [
    "Orifice",
    "Venturi",
    "Nozzle",
    "Fixed Geometry",
    "V-Cone",
    "Segmental Meters",
    "Linear Meters"
]

exports.startFC8 = function(){
    robot.keyTap('command')
    robot.typeString('FC8')
    robot.keyTap('enter')
    sleep.msleep(500)
}

exports.selectType = function(request){
    robot.keyTap('tab')
    let i = 0
    for(i=0; i<type.indexOf(request); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
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

exports.printPDF = function(fileName){
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('enter')
    sleep.msleep(2000)
    robot.typeString(fileName)
    robot.keyTap('enter')
}
