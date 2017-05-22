import robot from 'robotjs'
import sleep from 'sleep'
import venturi from './fc8_venturi_map.json'
const mi = venturi.MachinedInled    

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

exports.machinedinlet = function(request){
    //select venturi
    robot.keyTap('tab')
    robot.keyTap('down')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select machinedinlet
    robot.keyTap('enter')
    //select pressuretap
    let i = 0;
    console.log(mi.PressureTap.indexOf(request.pressuretap));
    for(i=0; i<mi.PressureTap.indexOf(request.pressuretap); i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<mi.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select venturi cylindrical throat
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.VCT=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.vctUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.vctUserDefined .coeffThermalExpansion)
    } else {
        let ind = mi.VenturiCylindricalThroat.indexOf(request.VCT)
        let indStd = mi.VenturiCylindricalThroat.indexOf('316')
        if(ind<indStd){
            for (i=0; i<indStd-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-indStd; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    if(request.special=='none'){
        robot.keyTap('enter')
    } else if (request.special=='McOn&WvcOn'){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (request.special=="McOn"){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (request.special=="WvcOn"){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
}