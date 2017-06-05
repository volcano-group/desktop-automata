import robot from 'robotjs'
import sleep from 'sleep'

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

import test from './fc8_main'
import venturi from './fc8_venturi'
import orifice from './fc8_orifice'
import gas from './fc8_gas'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"

test.startFC8()

let request = {
    pipe: {
        type: "Orifice",
        type2: "Flange Taps",
        style: "Clamped",
        standard: "ASME3M (1983- 2003, ASME PTC 19.5 (2004-)",
        pressuretap: "Downstream",
        pipematerial: "Duplex",
        VCT: "",
        vctUserDefined: {name: "", coeffThermalExpansion: ""},
        pmUserDefined:{name: "", coeffThermalExpansion: ""} , 
        primaryelement: "userdefined",
        peUserDefined:{name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
        special: {
            ManometerCorrectionFactor: "off",
            DrainHole: "on",
            holes: "1",
            WaterVaporCorrection: "on"
        },
        gasUnits: "US gas"
    },
    gas: {
        pressureUnit: "psig,gage",
        differentialUnit: "hw68f",
        temperatureUnit: "TdegF",
        flowUnit: "Base Ft^3 Cubic Feet: SCF",
        flowUnitTime: "Hour",
        densityMassUnit: "Pound Mass lbm (US Flow Std)",
        densityVolumeUnit: "Cubic Feet",
        densityMethod: "Density",
        viscosityUnit: "Centipoise cP",
        dimensionalUnit: "Inches",
        basePressure: "14.696",
        basePressureUnit: "psia",
        baseTemperature: "60",
        baseTemperatureUnit: "TdegF",
        heatingTemperature: "60",
        energyCost: "1",
        gasType: "Enter Fluid Properties",
        fluidProperties: {
            name: "Propylene"
        },
        pressure: "614.6960",
        bPressure: "",
        temperature: "80",
        flowingDensity: "2.02402",
        baseDensity: "0.0464",
        viscosity: "0.01139667",
        isentropicExponent: "1.3066",
        //uguali a quelli di pipe
        special: {
            ManometerCorrectionFactor: "off",
            WaterVaporCorrection: "on"
        },
        humidity: "90",
        manometerData: {
            localGravity: "32.17405",
            meterTemperature: "80",
            seal: "2.00328"
        }
    },
    calculation: {
        method: "dp",
        base: {
            pipeDiameter: "7.625",
            borePrimaryElement: "3.80577",
            dp: {
                percMaxFlow: "100",
                maxFlow: "602653.92",
                normalFlow: "602653.92"
            },
            flow: {
                differentialPressure: "100"
            },
            size: {
                percMaxFlow: "100",
                maxFlow: "603656.55",
                normalFlow: "603656.55",
                differential: "100"
            }
        },
        ventDrainHole:  "0.2188"
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