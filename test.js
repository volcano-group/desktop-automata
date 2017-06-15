import main from './fc8_main'
import helpers from './fc8_helpers'

let request = {
    state: "new",
    createdAt: Date.now(),
    customer: "Volcano Group",
    items: [
        {
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
            "gasUnits": "US gas"
          },
          "tag": "1111",
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "102.331",
              "borePrimaryElement": "57.51",
              "size": {
                "maxFlow": "6000.0000",
                "normalFlow": "4245.0000",
                "differential": "2500"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "25",
            "pressureUnit": "Bar,abs",
            "differentialUnit": "mm of Water @ 4 degC",
            "temperature": "25",
            "temperatureUnit": "TdegC",
            "flowingDensity": "20.71",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "viscosity": "0.012",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Natural Gas"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1.364"
          }
        },
        {
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
            "gasUnits": "US gas"
          },
          "tag": "1112",
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "102.331",
              "borePrimaryElement": "57.51",
              "size": {
                "maxFlow": "6000.0000",
                "normalFlow": "4245.0000",
                "differential": "2500"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "25",
            "pressureUnit": "Bar,abs",
            "differentialUnit": "mm of Water @ 4 degC",
            "temperature": "25",
            "temperatureUnit": "TdegC",
            "flowingDensity": "20.71",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "viscosity": "0.012",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Natural Gas"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1.364"
          }
        },
        {
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
            "gasUnits": "US gas"
          },
          "tag": "1113",
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "102.331",
              "borePrimaryElement": "57.51",
              "size": {
                "maxFlow": "60000000000.0000",
                "normalFlow": "4245.0000",
                "differential": "2500"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "25",
            "pressureUnit": "Bar,abs",
            "differentialUnit": "mm of Water @ 4 degC",
            "temperature": "25",
            "temperatureUnit": "TdegC",
            "flowingDensity": "20.71",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "viscosity": "0.012",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Natural Gas"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1.364"
          }
        }
      ]
}

let errors = []

test = async function (request, errors){
    request.items.map((object)=>main.main(object, request.customer, errors)).then(()=>{console.log(errors)})
} 

test(request, errors)
//console.log(errors)