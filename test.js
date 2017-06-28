import main from './fc8_main'
import helpers from './fc8_helpers'

let request =  {
      "state": "new",
      "createdAt": 1498665082391,
      "customer": "Volcano Group",
      "items": [
        {
          "tag": "120-FE-0051",
          "pipe": {
            "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Liquid"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "38,1",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "115",
            "temperatureUnit": "TdegC",
            "flowingDensity": "243044",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
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
          },
          "calculation": {
            "base": {
              "pipeDiameter": "193,67",
              "size": {
                "maxFlow": "363586,3",
                "normalFlow": "243044",
                "differential": "26"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-0904",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "50",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "0,99"
            },
            "viscosity": "0.019",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Low pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,4"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "77,92",
              "size": {
                "maxFlow": "8140",
                "normalFlow": "50",
                "differential": "27"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1904",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "15800",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "0,99"
            },
            "viscosity": "0.019",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,41"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "17000",
                "normalFlow": "15800",
                "differential": "28"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1905",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "240",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "0,99"
            },
            "viscosity": "0.019",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Low pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,4"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "8140",
                "normalFlow": "240",
                "differential": "29"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-2904",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "15800",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "0,99"
            },
            "viscosity": "0.019",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,41"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "17000",
                "normalFlow": "15800",
                "differential": "30"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-2905",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "240",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "0,99"
            },
            "viscosity": "0.019",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Low pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,4"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "8140",
                "normalFlow": "240",
                "differential": "31"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-0903",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Liquid"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "28",
            "temperatureUnit": "TdegC",
            "flowingDensity": "1046220",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
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
          },
          "calculation": {
            "base": {
              "pipeDiameter": "307,04",
              "size": {
                "maxFlow": "1150000",
                "normalFlow": "1046220",
                "differential": "32"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1031",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "40,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "189768",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "16,23",
              "flowingCompressibilityFactor": "0,94"
            },
            "viscosity": "0.012",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Methane rich gas"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,25"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "363,52",
              "size": {
                "maxFlow": "230000",
                "normalFlow": "189768",
                "differential": "33"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1041",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "US Gas"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "38",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "365",
            "temperatureUnit": "TdegC",
            "flowingDensity": "193642",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "15,95",
              "flowingCompressibilityFactor": "1,01"
            },
            "viscosity": "0.02",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Methane rich gas"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,18"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "412,54",
              "size": {
                "maxFlow": "230000",
                "normalFlow": "193642",
                "differential": "34"
              }
            },
            "method": "size"
          }
        }
      ]
    }

let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)