import main from './fc8_main'
import helpers from './fc8_helpers'

let parsed = {
  "data": {
    "generateJson": {
      "state": "new",
      "createdAt": 1498739938044,
      "customer": "Volcano Group",
      "items": [
        {
          "tag": "120-FE-1201",
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
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "17600",
                "normalFlow": "12000",
                "differential": "37"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1203",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
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
            "temperature": "240",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "3,13",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "28,01",
              "flowingCompressibilityFactor": "1",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.017",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Hydrocarbon streams"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,41"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "193,67",
              "size": {
                "maxFlow": "18700",
                "normalFlow": "15000",
                "differential": "38"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1011",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "35,2",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "260",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "21,2",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "26,14",
              "flowingCompressibilityFactor": "1,01",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Hydrocarbon streams"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,25"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "325,48",
              "size": {
                "maxFlow": "131543,5",
                "normalFlow": "78753",
                "differential": "39"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1001",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "35",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "47,6",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "32,04",
              "flowingCompressibilityFactor": "0,98",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.022",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Oxygen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,36"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "325,48",
              "size": {
                "maxFlow": "141000",
                "normalFlow": "118234",
                "differential": "40"
              }
            },
            "method": "size"
          }
        },
        {
          "tag": "120-FE-1002",
          "pipe": {
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Upstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Gas",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "35",
            "temperatureUnit": "TdegC",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
            "flowingDensity": "47,6",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "32,04",
              "flowingCompressibilityFactor": "0,98",
              "baseCompressibilityFactor": "1"
            },
            "viscosity": "0.022",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Oxygen"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,36"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "193,67",
              "size": {
                "maxFlow": "46200",
                "normalFlow": "35000",
                "differential": "41"
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