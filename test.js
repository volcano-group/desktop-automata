import main from './fc8_main'
import helpers from './fc8_helpers'

let request =   {
      "state": "new",
      "createdAt": 1498674607627,
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
            "gasUnits": "Liquid"
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
            "flowingDensity": "949",
            "flowMethod": "Flowing",
            "flowUnit": "Flowing m^3",
            "flowUnitTime": "Hour",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "Density",
            "densitySpecial": {
              "vaporPressure": "27.013"
            },
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
            "gasUnits": "Gas"
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
            "flowingDensity": "50",
            "flowMethod": "Base",
            "flowUnit": "Base Cubic Metres: for NCMH, etc.",
            "flowUnitTime": "Hour",
            "basePressure": "1,013",
            "basePressureUnit": "Bar,abs",
            "baseTemperature": "0",
            "baseTemperatureUnit": "TdegC",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.2188",
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "17000",
                "normalFlow": "15800",
                "differential": "28"
              }
            },
            "method": "size"
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.0625",
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "8140",
                "normalFlow": "240",
                "differential": "29"
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "17000",
                "normalFlow": "15800",
                "differential": "30"
              }
            },
            "method": "size"
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.0938",
            "base": {
              "pipeDiameter": "154,08",
              "size": {
                "maxFlow": "8140",
                "normalFlow": "240",
                "differential": "31"
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
            "gasUnits": "Liquid"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "307,04",
              "size": {
                "maxFlow": "1150000",
                "normalFlow": "1046220",
                "differential": "32"
              }
            },
            "method": "size"
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
            "densitySpecial": {
              "vaporPressure": "27.013"
            },
            "viscosity": "0.832",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "Cooling water supply"
            },
            "heatingTemperature": "15.56"
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.0938",
            "base": {
              "pipeDiameter": "363,52",
              "size": {
                "maxFlow": "230000",
                "normalFlow": "189768",
                "differential": "33"
              }
            },
            "method": "size"
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "412,54",
              "size": {
                "maxFlow": "230000",
                "normalFlow": "193642",
                "differential": "34"
              }
            },
            "method": "size"
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
          }
        },
        {
          "tag": "120-FE-1043",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.2188",
            "base": {
              "pipeDiameter": "242,82",
              "size": {
                "maxFlow": "74800",
                "normalFlow": "50000",
                "differential": "35"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "38",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "365",
            "temperatureUnit": "TdegC",
            "flowingDensity": "50000",
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
          }
        },
        {
          "tag": "120-FE-1046",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "288,84",
              "size": {
                "maxFlow": "45000",
                "normalFlow": "40000",
                "differential": "36"
              }
            },
            "method": "size"
          },
          "gas": {
              "type": "Orifice",
            "dimensionalUnit": "Millimetre",
            "pressure": "18,2",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "280",
            "temperatureUnit": "TdegC",
            "flowingDensity": "40000",
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
          }
        },
        {
          "tag": "120-FE-1201",
          "pipe": {
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.0938",
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "17600",
                "normalFlow": "12000",
                "differential": "37"
              }
            },
            "method": "size"
          },
          "gas": {
              "type": "Orifice",
            "dimensionalUnit": "Millimetre",
            "pressure": "36",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "40",
            "temperatureUnit": "TdegC",
            "flowingDensity": "12000",
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
          }
        },
        {
          "tag": "120-FE-1203",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "193,67",
              "size": {
                "maxFlow": "18700",
                "normalFlow": "15000",
                "differential": "38"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "4",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "240",
            "temperatureUnit": "TdegC",
            "flowingDensity": "15000",
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
          }
        },
        {
          "tag": "120-FE-1011",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "325,48",
              "size": {
                "maxFlow": "131543,5",
                "normalFlow": "78753",
                "differential": "39"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "35,2",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "260",
            "temperatureUnit": "TdegC",
            "flowingDensity": "78753",
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
          }
        },
        {
          "tag": "120-FE-1001",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "325,48",
              "size": {
                "maxFlow": "141000",
                "normalFlow": "118234",
                "differential": "40"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "35",
            "temperatureUnit": "TdegC",
            "flowingDensity": "118234",
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
          }
        },
        {
          "tag": "120-FE-1002",
          "pipe": {
              "type": "Orifice",
            "type2": "Flange Taps",
            "style": "Clamped",
            "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
            "pressuretap": "Downstream",
            "pipematerial": "304",
            "primaryelement": "Monel 400",
            "special": {
              "DrainHole": "on",
              "holes": "1"
            },
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1875",
            "base": {
              "pipeDiameter": "193,67",
              "size": {
                "maxFlow": "46200",
                "normalFlow": "35000",
                "differential": "41"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "36,5",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "35",
            "temperatureUnit": "TdegC",
            "flowingDensity": "35000",
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
          }
        },
        {
          "tag": "120-FE-1050",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.0938",
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "10000",
                "normalFlow": "8264",
                "differential": "42"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowingDensity": "8264",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          }
        },
        {
          "tag": "120-FE-1090",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "14500",
                "normalFlow": "12400",
                "differential": "43"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowingDensity": "12400",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          }
        },
        {
          "tag": "120-FE-1092",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1563",
            "base": {
              "pipeDiameter": "102,26",
              "size": {
                "maxFlow": "3500",
                "normalFlow": "2900",
                "differential": "44"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowingDensity": "2900",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          }
        },
        {
          "tag": "120-FE-1093",
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
            "gasUnits": "Gas"
          },
          "calculation": {
            "ventDrainHole": "0.1250",
            "base": {
              "pipeDiameter": "154,05",
              "size": {
                "maxFlow": "11000",
                "normalFlow": "9000",
                "differential": "45"
              }
            },
            "method": "size"
          },
          "gas": {
            "dimensionalUnit": "Millimetre",
            "pressure": "34,7",
            "pressureUnit": "Bar,gage",
            "differentialUnit": "kPa",
            "temperature": "390",
            "temperatureUnit": "TdegC",
            "flowingDensity": "9000",
            "flowMethod": "Mass",
            "flowUnit": "Mass kg",
            "densityMassUnit": "Kilogram (ISO Standards)",
            "densityVolumeUnit": "Cubic Metre",
            "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
            "densitySpecial": {
              "molecularWeight": "18,02",
              "flowingCompressibilityFactor": "0,95"
            },
            "viscosity": "0.024",
            "viscosityUnit": "Centipoise cP",
            "gasType": "Enter Fluid Properties",
            "fluidProperties": {
              "name": "High pressure superheated steam"
            },
            "heatingTemperature": "15.56",
            "isentropicExponent": "1,23"
          }
        }
        
      ]
    }

let errors = []

request.items.map((object)=>main.main(object, request.customer, errors))

console.log(errors)