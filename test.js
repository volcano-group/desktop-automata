import main from './fc8_main'

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

main.main(request)