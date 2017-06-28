import main from './fc8_main'
import helpers from './fc8_helpers'

let request =  {
      "state": "new",
      "createdAt": 1498665082391,
      "customer": "Volcano Group",
      "items": [ {
          "tag": "120-FE-0051",
          "pipe": {
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
            "method": "size",
            "ventDrainHole": "0.0938"
          }
        },
        
      ]
    }

let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)