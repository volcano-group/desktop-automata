import robot from 'robotjs'
import sleep from 'sleep'
import venturi from './fc8_venturi_map.json'
const mi = venturi.MachinedInled    

//set speed
robot.setKeyboardDelay(200)
robot.setMouseDelay(100)

//open FC8
//robot.keyTap('command')
//robot.typeString('C:\\FlowConsultant8\\FC8.exe')
//robot.keyTap('enter')
//sleep.msleep(500)

exports.machindeinlet = function(pressuretap, pipematerial) {
    //select venturi
    robot.keyTap('tab')
    robot.keyTap('down')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select machinedinlet
    robot.keyTap('enter')
    //select pressuretap
    let i = 0;
    console.log(mi.PressureTap.indexOf(pressuretap));
    for(i=0; i<mi.PressureTap.indexOf(pressuretap); i++){
        robot.keyTap('up')
    }
    sleep.msleep(1000)
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    for(i=0; i<mi.PipeMaterial.indexOf(pipematerial); i++){
        robot.keyTap('down')
    }
    sleep.msleep(1000)
    robot.keyTap('tab')
    robot.keyTap('enter')
}
