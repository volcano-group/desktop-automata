import robot from 'robotjs'
import sleep from 'sleep'
import us from './fc8_liquid_map.json'

/*//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)*/

exports.main = function(object) {
    //select pressure unit
    let i = 0
    robot.keyTap('enter')
    for(i=0; i<13; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<us.Pressure.indexOf(object.pressureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('enter')
    
    
    //select differential unit
    for(i=0; i<4; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<12; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<us.Differential.indexOf(object.differentialUnit); i++){
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
    for(i=0; i<us.Temperature.indexOf(object.temperatureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('enter')
        
    //select Flow unit
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i <11; i++){
        robot.keyTap('tab')
    }
    let ind = us.Flow.Unit.indexOf(object.flowUnit)
    let indStd = us.Flow.Unit.indexOf('Base US Gallon')
    if(ind>indStd){
        for(i=0; i<ind-indStd; i++){
            robot.keyTap('down')
        }
    } else {
        for(i=0; i<indStd-ind; i++){
            robot.keyTap('up')
        }
    }
    robot.keyTap('tab')
    for(i=0; i<us.Flow.Time.indexOf(object.flowUnitTime); i++){
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
    for(i=0; i<us.Density.Mass.indexOf(object.densityMassUnit); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    for(i=0; i<us.Density.Volume.indexOf(object.densityVolumeUnit); i++){
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
    for(i=0; i<us.DensityMethod.indexOf(object.densityMethod); i++){
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
    for(i=0; i<us.Viscosity.indexOf(object.viscosityUnit); i++){
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
    for(i=0; i<us.Dimensional.indexOf(object.dimensionalUnit); i++){
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
    robot.keyTap('enter')
    robot.typeString(object.fluidProperties.name)
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
    robot.typeString(object.barPressure)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.temperature)
    if(object.densityMethod=="Density"){
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.flowingDensity)    
        if(object.flowMethod=="Base"){
           robot.keyTap('tab')
            for(i=0; i<10; i++){
                robot.keyTap('delete')
            }
            robot.typeString(object.baseDensity)
        }
    } else if (object.densityMethod=="Specific Gravity (Gb, Gf)"){
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.densitySpecial.flowingSpecificGravity)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.densitySpecial.liquidCompressibility)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.densitySpecial.baseSpecificGravity)
    }
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.viscosity)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.densitySpecial.vaporPressure)
    robot.keyTap('tab')
}