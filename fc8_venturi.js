import robot from 'robotjs'
import sleep from 'sleep'
import venturi from './fc8_venturi_map.json'
const mi = venturi.MachinedInled    

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

exports.machinedinlet = function(pressuretap, pipematerial, pmUserDefined, VCT, vctUserDefined, special) {
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
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<mi.PipeMaterial.indexOf(pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select venturi cylindrical throat
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(VCT=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(vctUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(vctUserDefined .coeffThermalExpansion)
    } else {
        let ind = mi.VenturiCylindricalThroat.indexOf(VCT)
        if(ind<6){
            for (i=0; i<6-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-6; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    if(special=='none'){
        robot.keyTap('enter')
    } else if (special=='McOn&WvcOn'){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (special=="McOn"){
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('space')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('tab')
        robot.keyTap('enter')
    } else if (special=="WvcOn"){
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