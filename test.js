import main from './fc8_main'
import helpers from './fc8_helpers'

let parsed = {
  "data": {
    "generateJson": {
      "state": "new",
      "createdAt": 1498738824540,
      "customer": "Volcano Group",
      "items": [
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
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
          "tag": "120-FE-1031",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
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
            "basePressure": "1.0133",
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
          },
          "calculation": {
            "base": {
              "pipeDiameter": "242,82",
              "size": {
                "maxFlow": "74800",
                "normalFlow": "50000",
                "differential": "35"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1046",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "18,2",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "280",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "11,6",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "1",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.028",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure nitrogen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,4"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "288,84",
              "size": {
                "maxFlow": "45000",
                "normalFlow": "40000",
                "differential": "36"
              }
            },
            "method": "size"
          }
        }
      ]
    }
  }
}

let request =  parsed.data.generateJson



let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)