import test from './fc8_main'
import venturi from './fc8_venturi'
import orifice from './fc8_orifice'
import gas from './fc8_gas'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"

//test.startFC8()

//let request = {
//    pressuretap: "Upstream", 
//    pipematerial: "Duplex",
//    pmUserDefined: {name: "", coeffThermalExpansion: ""} , 
//    VCT: "userdefined",
//    vctUserDefined: {name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
//    special: "McOn"
//}

//test.selectType("Orifice")

//venturi.machinedinlet(request)
//test.autoCompileGas()
//test.printPDF()

//let requestPipe = {
//    style: "Clamped",
//    standard: "ASME3M (1983- 2003, ASME PTC 19.5 (2004-)",
//    pressuretap: "Downstream",
//    pipematerial: "Duplex",
//    pmUserDefined:{name: "", coeffThermalExpansion: ""} , 
//    primaryelement: "userdefined",
//    peUserDefined:{name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
//    special: {ManometerCorrectionFactor: "on", DrainHole: "off", WaterVaporCorrection: "off"}
//}
//orifice.flangetaps(requestPipe)

let requestGas = {
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
    gasType: "Ammonia",
    pressure: "605",
    bPressure: "14.696",
    temperature: "83",
    choice: "dp",
    base: {
        pipeDiameter: "7.625",
        borePrimaryElement: "3.80577",
        dp: {
            percMaxFlow: "100",
            maxFlow: "603656.55",
            normalFlow: "603656.55"
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
    }
}
gas.gas(requestGas)
test.printPDF("Prova Automatica con Gas")