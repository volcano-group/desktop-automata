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
    }
  ]
}


let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)