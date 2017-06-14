import robot from 'robotjs'
import sleep from 'sleep'
import orifice from './fc8_orifice_map.json'
var fs = require('fs')

/*//set speed
robot.setKeyboardDelay(150)
robot.setMouseDelay(100)*/

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
    sleep.msleep(500)
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

exports.calculation = function(object) {
    //select dp flow size
    let i = 0
    if(object.method == "dp"){
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.dp.percMaxFlow)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.dp.maxFlow)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.dp.normalFlow)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.pipeDiameter)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.borePrimaryElement)
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (object.method == "flow"){
        robot.keyTap('tab')
        robot.keyTap('enter')
        robot.keyTap('tab')
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.flow.differentialPressure)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.pipeDiameter)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.borePrimaryElement)
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (object.method == "size"){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
        robot.keyTap('tab')
        robot.keyTap('tab')
        /*for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.size.percMaxFlow)*/
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.size.maxFlow)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.size.normalFlow)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.size.differential)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.base.pipeDiameter)
        robot.keyTap('tab')
        robot.keyTap('tab')
        
        robot.keyTap('enter')
    }
    if(object.ventDrainHole!="none"){
        robot.keyTap('tab')
        robot.keyTap('tab')
        let ind = orifice.FlangeTaps.VentDrainHole.indexOf(object.ventDrainHole)
        let indStd = orifice.FlangeTaps.VentDrainHole.indexOf('0.0938')
        if(ind<indStd){
            for (i=0; i<indStd-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<ind-indStd; i++){
                robot.keyTap('down')
            }
        }
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('enter')
    robot.keyTap('enter')
    
}

exports.printPDF = function(fileName, customer, tag){
    let i=0
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(customer)
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.typeString(tag)
    for(i=0; i<14; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    sleep.msleep(500)
    robot.typeString(fileName)
    robot.keyTap('enter')
}

exports.existFile = function (tag, errors) {
    console.log("controllo esistenza file ", tag)
    fs.existsSync("C:/Users/Administrator/Documents/"+tag, (exists)=>{
        console.log(exists)
        if(!exists){
            errors.push(tag)
            console.log(tag, "ha presentato un errore")
        } else {
            console.log("File creato")
        }
    })
}
