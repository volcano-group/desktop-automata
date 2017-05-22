import test from './fc8_main'
import venturi from './fc8_venturi'
import orifice from './fc8_orifice'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"

test.startFC8()
//venturi.machinedinlet("Upstream", 
//                   "Duplex",
//                   {id: "User Defined Pipe Material", name: "", coeffThermalExpansion: ""} , 
//                   "userdefined",
//                   {id:"User Defined Venturi Cylindrical Throat", name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
//                   "McOn")
//test.autoCompileGas()
//test.printPDF()
let request = {
    style: "Clamped",
    standard: "ASME3M (1983- 2003, ASME PTC 19.5 (2004-)",
    pressuretap: "Downstream",
    pipematerial: "Duplex",
    pmUserDefined:{name: "", coeffThermalExpansion: ""} , 
    primaryelement: "userdefined",
    peUserDefined:{name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
    special: {ManometerCorrectionFactor: "on", DrainHole: "off", WaterVaporCorrection: "on"}
}
orifice.flangetaps(request)