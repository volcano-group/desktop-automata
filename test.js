import main from './fc8_main'
import helpers from './fc8_helpers'

let parsed = {
  "data": {
    "generateJson": {
      "state": "new",
      "createdAt": 1498818503719,
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
              "DrainHole": "off"
            },
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "38,1",
            "barPressure": "1,0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "115",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "flowingDensity": "949",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
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
                "maxFlow": "363,5863",
                "normalFlow": "243,044",
                "differential": "26"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
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
              "DrainHole": "off"
            },
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "barPressure": "1.0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "28",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "flowingDensity": "996,4",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
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
                "maxFlow": "1150,000",
                "normalFlow": "1046,220",
                "differential": "32"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
          }
        },
        {
          "tag": "120-FE-1122",
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
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "43,4",
            "barPressure": "1.0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "71",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "flowingDensity": "978",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
            "viscosity": "0.398",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Process water"
            },
            "heatingTemperature": "15.56"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "167,4266",
                "normalFlow": "126,838",
                "differential": "46"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
          }
        },
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
              "DrainHole": "off"
            },
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "38,1",
            "barPressure": "1,0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "115",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "flowingDensity": "949",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
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
                "maxFlow": "363,5863",
                "normalFlow": "243,044",
                "differential": "26"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
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
              "DrainHole": "off"
            },
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "barPressure": "1.0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "28",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "basePressure": "1.0133",
            "flowingDensity": "996,4",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
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
                "maxFlow": "1150,000",
                "normalFlow": "1046,220",
                "differential": "32"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
          }
        },
        {
          "tag": "120-FE-1122",
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
            "gasUnits": "Liquid",
            "type": "Orifice"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "43,4",
            "barPressure": "1.0133",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "71",
            "temperatureUnit": "TdegC",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "flowingDensity": "978",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
                "vaporPressure": "0.2"
            },
            "viscosity": "0.398",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Process water"
            },
            "heatingTemperature": "15.56"
          },
          "calculation": {
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "167,4266",
                "normalFlow": "126,838",
                "differential": "46"
              }
            },
            "method": "size",
            "ventDrainHole": "none"
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