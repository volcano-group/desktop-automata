import main from './fc8_main'
import helpers from './fc8_helpers'

let parsed = {
  "data": {
    "generateJson": {
      "state": "new",
      "createdAt": 1498740689959,
      "customer": "Volcano Group",
      "items": [
        {
          "tag": "120-FE-1050",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "12,3",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1.23"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154.05",
              "size": {
                "maxFlow": "10000",
                "normalFlow": "8264",
                "differential": "42"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1090",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "12,3",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "14500",
                "normalFlow": "12400",
                "differential": "43"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1092",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "12,3",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "102,26",
              "size": {
                "maxFlow": "3500",
                "normalFlow": "2900",
                "differential": "44"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1093",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "12,3",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "11000",
                "normalFlow": "9000",
                "differential": "45"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1121",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "26,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "72",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "12,5",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "13,16",
              "flowingCompressibilityFactor": "1,01",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.018",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Hydrocarbon streams"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,38"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "885,46",
              "size": {
                "maxFlow": "790000",
                "normalFlow": "662968",
                "differential": "48"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1124",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "26,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "72",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "12,5",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "13,16",
              "flowingCompressibilityFactor": "1,01",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.018",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Hydrocarbon streams"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,38"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "18181.9",
                "normalFlow": "15000",
                "differential": "49"
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