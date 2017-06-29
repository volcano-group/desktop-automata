import main from './fc8_main'
import helpers from './fc8_helpers'

let request =   {
  "state": "new",
  "createdAt": 1498729161519,
  "customer": "Volcano Group",
  "items": [
    {
      "tag": "120-FE-0051",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "304",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Liquid",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "193,67",
          "size": {
            "maxFlow": "363586,3",
            "normalFlow": "243044",
            "differential": "26"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "38,1",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "115",
        "temperatureUnit": "TdegC",
        "flowMethod": "Flowing",
        "flowUnit": "Flowing m^3",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "flowingDensity": "949",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "Density",
        "viscosity": "0.243",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Stripped Process Condensate"
        },
        "heatingTemperature": "15.56"
      }
    },
    {
      "tag": "120-FE-0904",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.1563",
        "base": {
          "pipeDiameter": "77,92",
          "size": {
            "maxFlow": "8140",
            "normalFlow": "50",
            "differential": "27"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "5,4",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28,01",
          "flowingCompressibilityFactor": "0,99",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Low pressure nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "120-FE-1904",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.2188",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "17000",
            "normalFlow": "15800",
            "differential": "28"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "36",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "40,2",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28,01",
          "flowingCompressibilityFactor": "0,99",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "High pressure nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,41"
      }
    },
    {
      "tag": "120-FE-1905",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0625",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "8140",
            "normalFlow": "240",
            "differential": "29"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "5,4",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28,01",
          "flowingCompressibilityFactor": "0,99",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Low pressure nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "120-FE-2904",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.1563",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "17000",
            "normalFlow": "15800",
            "differential": "30"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "36",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "40,2",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28,01",
          "flowingCompressibilityFactor": "0,99",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "High pressure nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,41"
      }
    },
    {
      "tag": "120-FE-2905",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "8140",
            "normalFlow": "240",
            "differential": "31"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "5,4",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28,01",
          "flowingCompressibilityFactor": "0,99",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Low pressure nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "120-FE-0903",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Liquid",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.1563",
        "base": {
          "pipeDiameter": "307,04",
          "size": {
            "maxFlow": "1150000",
            "normalFlow": "1046220",
            "differential": "32"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "28",
        "temperatureUnit": "TdegC",
        "flowMethod": "Flowing",
        "flowUnit": "Flowing m^3",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "flowingDensity": "996,4",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "Density",
        "viscosity": "0.832",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Cooling water supply"
        },
        "heatingTemperature": "15.56"
      }
    },
    {
      "tag": "120-FE-1031",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "363,52",
          "size": {
            "maxFlow": "230000",
            "normalFlow": "189768",
            "differential": "33"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "40,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "40",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "27,7",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "16,23",
          "flowingCompressibilityFactor": "0,94",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.012",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Methane rich gas"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,25"
      }
    },
    {
      "tag": "120-FE-1041",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "412,54",
          "size": {
            "maxFlow": "230000",
            "normalFlow": "193642",
            "differential": "34"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "38",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "365",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "11,6",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "15,95",
          "flowingCompressibilityFactor": "1,01",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Methane rich gas"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,18"
      }
    },
    {
      "tag": "120-FE-1043",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "Carbon Steel",
        "primaryelement": "316",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.2188",
        "base": {
          "pipeDiameter": "242,82",
          "size": {
            "maxFlow": "74800",
            "normalFlow": "50000",
            "differential": "35"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "38",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "365",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "10,133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "11,6",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "15,95",
          "flowingCompressibilityFactor": "1,01",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Methane rich gas"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,18"
      }
    }
  ]
}


let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)