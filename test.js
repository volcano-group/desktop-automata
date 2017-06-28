import main from './fc8_main'
import helpers from './fc8_helpers'

let request =  {
      "state": "new",
      "createdAt": 1498665082391,
      "customer": "Volcano Group",
      "items": [
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
            "method": "size",
            "ventDrainHole": "0.0938"
          }
        }
      ]
    }

let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)