import test from './fc8_main'
test.machinedinlet("Upstream", 
                   "userdefined",
                   {name: "PVC", coeffThermalExpansion: "0.0000000910"} , 
                   "userdefined",
                   {name: "Carbon Steel", coeffThermalExpansion: "0.0000000608"},
                   "McOn")