import robot from 'robotjs'
import sleep from 'sleep'
import gas from './fc8_gas_map.json'   

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

exports.gas = function(object) {
    //select pressure unit
    let i = 0
    robot.keyTap('enter')
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.Pressure.indexOf(object.pressureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select differential unit
    for(i=0; i<4; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<17; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.Differential.indexOf(object.differentialUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select temperature
    for(i=0; i<5; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }  
    for(i=0; i<gas.Temperature.indexOf(object.temperatureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select Flow unit
    for(i=0; i<6; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i <16; i++){
        robot.keyTap('tab')
    }
    let ind = gas.Flow.Unit.indexOf(object.flowUnit)
    let indStd = gas.Flow.Unit.indexOf('Base Ft^3 Cubic Feet: SCF')
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
    for(i=0; i<gas.Flow.Time.indexOf(object.flowUnitTime); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select density unit
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<14; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.Density.Mass.indexOf(object.densityMassUnit); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    for(i=0; i<gas.Density.Volume.indexOf(object.densityVolumeUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select density method
    for(i=0; i<8; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<13; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.DensityMethod.indexOf(object.densityMethod); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16
        ; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select viscosity
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<12; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.Viscosity.indexOf(object.viscosityUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //select dimensional unit
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.Dimensional.indexOf(object.dimensionalUnit); i++){
        robot.keyTap('down')
    }
    for(i=0; i<16; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    
    //enter base pressure
    for(i=0; i<11; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<7; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.basePressure)
    robot.keyTap('tab')
    robot.keyTap('enter')
    robot.keyTap('enter')
    for(i=0; i<9; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.BasePressureUnit.indexOf(object.basePressureUnit); i++){
        robot.keyTap('up')
    }
    for(i=0; i<10; i++){
        robot.keyTap('tab')
    }
    robot.keyTap('enter')
    for(i=0; i<6; i++){
        robot.keyTap('tab')    
    }
    robot.keyTap('enter')
    
    
    //enter base temp
    for(i=0; i<13; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.baseTemperature)
    robot.keyTap('tab')
    robot.keyTap('enter')
    for(i=0; i<7; i++){
        robot.keyTap('tab')
    }
    for(i=0; i<gas.BaseTemperatureUnit.indexOf(object.baseTemperatureUnit); i++){
        robot.keyTap('up')
    }
    
    //enter heating temperature
    for(i=0; i<13; i++){
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
    robot.keyTap('tab')
    robot.keyTap('enter')
    robot.keyTap('tab')
    robot.keyTap('enter')
    
    //select gas
    robot.keyTap('tab')
    robot.keyTap('tab')
    /*ind = gas.GasType.indexOf(object.gasType)
    indStd = gas.GasType.indexOf('AGA-8 Detailed Methos, Input Mole Fractions')
    if(ind<indStd){
        robot.keyTap('tab')
        robot.keyTap('down')
        robot.keyTap('enter')
    } else {
        for (i=0; i<ind-indStd; i++){
            robot.keyTap('down')
        }
        robot.keyTap('tab')
        robot.keyTap('enter')
        robot.keyTap('enter') //da testare
    }*/
    for(i=0; i<22; i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
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
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.temperature)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.flowingDensity)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.baseDensity)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.viscosity)
    robot.keyTap('tab')
    for(i=0; i<10; i++){
        robot.keyTap('delete')
    }
    robot.typeString(object.isentropicExponent)
    robot.keyTap('tab')
    if(object.manometer=="on"){
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.manometerData.localGravity)
        robot.keyTap('tab')
        for(i=0; i<4; i++){
            robot.keyTap('enter')
        }
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.manometerData.meterTemperature)
        robot.keyTap('tab')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(object.manometerData.seal)
        robot.keyTap('tab')    
    }
    
}













