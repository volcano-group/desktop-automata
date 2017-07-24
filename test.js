import main from './fc8_main'
import helpers from './fc8_helpers'

let parsed = {
  "data": {
    "generateJson": {
      "state": "new",
      "createdAt": 1500917250975,
      "customer": "Volcano Group",
      "items": [
        {
          "pipe": {
            "type": "Type",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Liquid"
          },
          "tag": "14FE912",
          "calculation": {
            "checkVentDrainHole": "off",
            "base": {
              "pipeDiameter": "206.37",
              "size": {
                "maxFlow": "252000",
                "normalFlow": "210000",
                "differential": "2500"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "5.3955",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "mm of Water @ 20 degC",
            "temperature": "35",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "7800",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
              "barPressure": "1.0133",
              "vaporPressure": "0.0000005886"
            },
            "viscosity": "1.38",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Kerosene"
            },
            "heatingTemperature": "15.56"
          }
        },
        {
          "pipe": {
            "type": "Type",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Liquid"
          },
          "tag": "14FE03N",
          "calculation": {
            "checkVentDrainHole": "off",
            "base": {
              "pipeDiameter": "154.05",
              "size": {
                "maxFlow": "139650",
                "normalFlow": "105000",
                "differential": "5000"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "10.791",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "mm of Water @ 20 degC",
            "temperature": "42.4",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "7800",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
              "barPressure": "1.0133",
              "vaporPressure": "0.0000006867"
            },
            "viscosity": "1.23",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Kerosene"
            },
            "heatingTemperature": "15.56"
          }
        },
        {
          "pipe": {
            "type": "Type",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "Carbon Steel",
            "primaryelement": "316",
            "special": {
              "DrainHole": "off"
            },
            "gasUnits": "Liquid"
          },
          "tag": "14FE04N",
          "calculation": {
            "checkVentDrainHole": "off",
            "base": {
              "pipeDiameter": "154.05",
              "size": {
                "maxFlow": "139650",
                "normalFlow": "105000",
                "differential": "5000"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "10.791",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "mm of Water @ 20 degC",
            "temperature": "42.4",
            "temperatureUnit": "TdegC",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "flowUnitTime": "Hour",
            "flowingDensity": "7800",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
              "barPressure": "1.0133",
              "vaporPressure": "0.0000006867"
            },
            "viscosity": "1.23",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Kerosene"
            },
            "heatingTemperature": "15.56"
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