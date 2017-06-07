import robot from 'robotjs'
import sleep from 'sleep'

//set speed
robot.setKeyboardDelay(150)
robot.setMouseDelay(100)

import test from './fc8_main'
import venturi from './fc8_venturi'
import orifice from './fc8_orifice'
import gas from './fc8_gas'
import vapor from './fc8_vapor'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"

test.startFC8()

let request = {
    pipe: {
        type: "Orifice",
        type2: "Flange Taps",
        style: "Clamped",
        standard: "ISO-5167 (2003-), ASME 3M (2004-)",
        pressuretap: "Downstream",
        pipematerial: "Carbon Steel",
        VCT: "",
        vctUserDefined: {name: "", coeffThermalExpansion: ""},
        pmUserDefined:{name: "", coeffThermalExpansion: ""} , 
        primaryelement: "316",
        peUserDefined:{name: "", coeffThermalExpansion: ""},
        special: {
            ManometerCorrectionFactor: "off",
            DrainHole: "on",
            holes: "1",
            WaterVaporCorrection: "off"
        },
        gasUnits: "US gas"
    },
    gas: {
        pressureUnit: "Bar,abs",
        differentialUnit: "mm of Water @ 4 degC",
        temperatureUnit: "TdegC",
        flowMethod: "Mass",
        flowUnit: "Mass kg",
        flowUnitTime: "Hour",
        densityMassUnit: "Kilogram (ISO Standards)",
        densityVolumeUnit: "Cubic Metre",
        densityMethod: "Density",
        viscosityUnit: "Centipoise cP",
        dimensionalUnit: "Millimetre",
        basePressure: "14.696",
        basePressureUnit: "Bar,abs",
        baseTemperature: "60",
        baseTemperatureUnit: "TdegC",
        heatingTemperature: "15.56",
        energyCost: "1",
        gasType: "Enter Fluid Properties",
        fluidProperties: {
            name: "Natural Gas"
        },
        pressure: "25",
        bPressure: "",
        temperature: "25",
        flowingDensity: "20.71",
        baseDensity: "0.931",
        viscosity: "0.012",
        isentropicExponent: "1.364",
        //uguali a quelli di pipe
        special: {
            ManometerCorrectionFactor: "off",
            WaterVaporCorrection: "off"
        },
        humidity: "90",
        manometerData: {
            localGravity: "32.17405",
            meterTemperature: "80",
            seal: "2.00328"
        }
    },
    calculation: {
        method: "size",
        base: {
            pipeDiameter: "102.331",
            borePrimaryElement: "57.51",
            dp: {
                percMaxFlow: "100",
                maxFlow: "602653.92",
                normalFlow: "602653.92"
            },
            flow: {
                differentialPressure: "100"
            },
            size: {
                percMaxFlow: "70.75",
                maxFlow: "6000.0000",
                normalFlow: "4245.0000",
                differential: "2500"
            }
        },
        ventDrainHole: "0.1250"
    },
    fileName: "Prova automatica con gas"
    
}


test.selectType(request.pipe.type)

let reqPipe = request.pipe
switch(request.pipe.type2){
    case "Flange Taps": {
        orifice.flangetaps(reqPipe)
        break
    }
    case "Corner Taps":{
        orifice.cornertaps
        break
        
    }
    case "Thick Orifice":{
        orifice.thickorifice
        break
    }
    case "Restrictive Orifice":{
        orifice.restrictiveorifice
        break
    }
    case "Conic Orifice":{
        orifice.conicorifice
        break
    }
    case "Quadrant Orifice":{
        orifice.quadrantorifice
        break
    }
    case "Radius/Vena Contracta Taps":{
        orifice.radiusvena
        break
    }
    case "Honored Orifice Run, Flange Taps":{
        orifice.hoft
        break
    }
    case "Honored Orifice Run, Corner Taps":{
        orifice.hoct
        break
    }
}

let reqGas = request.gas
switch(reqPipe.gasUnits){
    case "US gas": {
        gas.gas(reqGas)
        break
    }
    case "US vapor":{
        console.log("vapore")
        break
    }
}


let reqCalculation = request.calculation
test.calculation(reqCalculation)

test.printPDF(request.fileName)