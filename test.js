import test from './fc8_main'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"
test.startFC8()
test.machinedinlet("Upstream", 
                   "Duplex",
                   {id: "User Defined Pipe Material", name: "", coeffThermalExpansion: ""} , 
                   "userdefined",
                   {id:"User Defined Venturi Cylindrical Throat", name: "Carbon Steel", coeffThermalExpansion: "0.00000608"},
                   "McOn")
test.printPDF()