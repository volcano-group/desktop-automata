import robot from 'robotjs'
import sleep from 'sleep'
import liquid from './fc8_liquid_map.json'   

/*//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)*/

exports.liquid = function(object) {
    //select pressure unit
    let i = 0
    robot.keyTap('enter')
    for(i=0; i<13; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.Pressure.indexOf(object.pressureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select differential unit
    for(i=0; i<4; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<12; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.Differential.indexOf(object.differentialUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select temperature
    for(i=0; i<5; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }  
    for(i=0; i<liquid.Temperature.indexOf(object.temperatureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
        
    //select Flow unit
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i <11; i++){
        robot.keyTap('tab')
    }
    let ind = liquid.Flow.Unit.indexOf(object.flowUnit)
    if(ind >6 && ind == "Flowing millitres (cubis centimentres)"){
        for(i=0; i<6; i++){
            robot.keyTap('down')
        }
        robot.keyTap('enter')
        for(i=0; i<7; i++){
            robot.keyTap('down')
        }
        robot.keyTap('enter')
        
    } else if (ind >= 6 & ind != "Flowing millitres (cubis centimentres)"){
        for(i=0; i<6; i++){
            robot.keyTap('down')
        }
        robot.keyTap('enter')
        for(i=0; i<ind-6; i++){
            robot.keyTap('down')
        }
    }   
    robot.keyTap('tab')
    for(i=0; i<liquid.Flow.Time.indexOf(object.flowUnitTime); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select density unit
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.Density.Mass.indexOf(object.densityMassUnit); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    for(i=0; i<liquid.Density.Volume.indexOf(object.densityVolumeUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select density method
    for(i=0; i<8; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<8; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.DensityMethod.indexOf(object.densityMethod); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select viscosity
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.Viscosity.indexOf(object.viscosityUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select dimensional unit
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<liquid.Dimensional.indexOf(object.dimensionalUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //enter heating temperature
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<8; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.heatingTemperature)
    
    //enter cost
    robot.keyTap('tab')
    for(i=0; i<7; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.energyCost)
    robot.keyTap('tab')
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('enter')
    
    //select gas
    robot.keyTap('tab')
    robot.keyTap('tab')
    for(i=0; i<6; i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    
    
    //etner pressure bpressure e temperature
    for(i=0; i<4; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.pressure)   
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.temperature)
    robot.keyTap('tab')
}