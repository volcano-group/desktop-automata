import main from './fc8_main'
import helpers from './fc8_helpers'

let request =     {
  "state": "new",
  "createdAt": 1498733262873,
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
      }
    },
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
      }
    },
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
        "gasUnits": "Gas",
        "type": "Orifice"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
        "gasUnits": "Gas",
        "type": "Orifice"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
      "tag": "120-FE-1121",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0625",
        "base": {
          "pipeDiameter": "885,46",
          "size": {
            "maxFlow": "790000",
            "normalFlow": "662968",
            "differential": "48"
          }
        },
        "method": "size"
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
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "18181,9",
            "normalFlow": "15000",
            "differential": "49"
          }
        },
        "method": "size"
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
      }
    },
    {
      "tag": "120-FE-2031",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "363,52",
          "size": {
            "maxFlow": "227721,6",
            "normalFlow": "189768",
            "differential": "50"
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
      }
    },
    {
      "tag": "120-FE-2041",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "412,54",
          "size": {
            "maxFlow": "232370,4",
            "normalFlow": "193642",
            "differential": "51"
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
      }
    },
    {
      "tag": "120-FE-2043",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "242,82",
          "size": {
            "maxFlow": "74800",
            "normalFlow": "60000",
            "differential": "52"
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
      }
    },
    {
      "tag": "120-FE-2046",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "288,84",
          "size": {
            "maxFlow": "45000",
            "normalFlow": "40000",
            "differential": "53"
          }
        },
        "method": "size"
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
      }
    },
    {
      "tag": "120-FE-2201",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "154,05",
          "size": {
            "maxFlow": "17600",
            "normalFlow": "14000",
            "differential": "54"
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
      }
    },
    {
      "tag": "120-FE-2203",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "304",
        "primaryelement": "Monel 400",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "193,67",
          "size": {
            "maxFlow": "18700",
            "normalFlow": "15000",
            "differential": "55"
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
      }
    },
    {
      "tag": "120-FE-2011",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "304",
        "primaryelement": "Monel 400",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0625",
        "base": {
          "pipeDiameter": "325,48",
          "size": {
            "maxFlow": "131543,5",
            "normalFlow": "78753",
            "differential": "56"
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
      }
    },
    {
      "tag": "120-FE-2001",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "304",
        "primaryelement": "Monel 400",
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
          "pipeDiameter": "325,48",
          "size": {
            "maxFlow": "50400",
            "normalFlow": "118234",
            "differential": "57"
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
      }
    },
    {
      "tag": "120-FE-2002",
      "pipe": {
        "type2": "Flange Taps",
        "style": "Clamped",
        "standard": "ISO-5167 (2003-), ASME 3M (2004-)",
        "pressuretap": "Upstream",
        "pipematerial": "304",
        "primaryelement": "Monel 400",
        "special": {
          "DrainHole": "on",
          "holes": "1"
        },
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "193,67",
          "size": {
            "maxFlow": "46200",
            "normalFlow": "36000",
            "differential": "58"
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
      }
    },
    {
      "tag": "120-FE-2050",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "154,05",
          "size": {
            "maxFlow": "10000",
            "normalFlow": "8264",
            "differential": "59"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
      "tag": "120-FE-2090",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,05",
          "size": {
            "maxFlow": "14500",
            "normalFlow": "12400",
            "differential": "60"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
      "tag": "120-FE-2092",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "102,26",
          "size": {
            "maxFlow": "3500",
            "normalFlow": "2900",
            "differential": "61"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
      "tag": "120-FE-2093",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,05",
          "size": {
            "maxFlow": "11000",
            "normalFlow": "9000",
            "differential": "62"
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
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "12,3",
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
      "tag": "120-FE-2121",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "885,46",
          "size": {
            "maxFlow": "800000",
            "normalFlow": "662968",
            "differential": "65"
          }
        },
        "method": "size"
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
      }
    },
    {
      "tag": "120-FE-2124",
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
        "gasUnits": "Gas",
        "type": "Orifice"
      },
      "calculation": {
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "18181,9",
            "normalFlow": "15000",
            "differential": "66"
          }
        },
        "method": "size"
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
      }
    },
    {
      "tag": "130-FE-0013",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "77,92",
          "size": {
            "maxFlow": "4840",
            "normalFlow": "4000",
            "differential": "67"
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
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.018",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "HP Nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0014",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "77,92",
          "size": {
            "maxFlow": "1650",
            "normalFlow": "1000",
            "differential": "68"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "11,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "190",
        "temperatureUnit": "TdegC",
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "18",
          "flowingCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0082",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "77,92",
          "size": {
            "maxFlow": "2420",
            "normalFlow": "1500",
            "differential": "69"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "12",
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
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0006",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "8140",
            "normalFlow": "240",
            "differential": "70"
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
      }
    },
    {
      "tag": "130-FE-0910",
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
        "ventDrainHole": "0.1875",
        "base": {
          "pipeDiameter": "205,02",
          "size": {
            "maxFlow": "5874",
            "normalFlow": "4800",
            "differential": "71"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "11,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "190",
        "temperatureUnit": "TdegC",
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "18",
          "flowingCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0911",
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
          "pipeDiameter": "304,74",
          "size": {
            "maxFlow": "39154,5",
            "normalFlow": "32000",
            "differential": "72"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "11,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "190",
        "temperatureUnit": "TdegC",
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "18",
          "flowingCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0912",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "381,00",
          "size": {
            "maxFlow": "6028",
            "normalFlow": "5000",
            "differential": "73"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "11,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "190",
        "temperatureUnit": "TdegC",
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "18",
          "flowingCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-0916",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "381,00",
          "size": {
            "maxFlow": "87000",
            "normalFlow": "73100",
            "differential": "74"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "10",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "209",
        "temperatureUnit": "TdegC",
        "flowMethod": "Mass",
        "flowUnit": "Mass kg",
        "flowUnitTime": "Hour",
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "18",
          "flowingCompressibilityFactor": "1"
        },
        "viscosity": "0.016",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "SH MP Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-1070",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "16500",
            "normalFlow": "13500",
            "differential": "75"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "24,7",
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
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.018",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-1007",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "254,51",
          "size": {
            "maxFlow": "69520",
            "normalFlow": "62800",
            "differential": "76"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "24,4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "112",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "20,55",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Feed Gas"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-1011",
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
            "maxFlow": "2579,5",
            "normalFlow": "2000",
            "differential": "80"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "25,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "95",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "26,8",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.018",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Boiler Feed Gas"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-1015",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "102,26",
          "size": {
            "maxFlow": "11616",
            "normalFlow": "9600",
            "differential": "82"
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
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "HP Nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-2070",
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
        "ventDrainHole": "0.0938",
        "base": {
          "pipeDiameter": "154,08",
          "size": {
            "maxFlow": "16500",
            "normalFlow": "13500",
            "differential": "88"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "24,7",
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
        "flowingDensity": "-",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.018",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "MP Nitrogen"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-2007",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "254,51",
          "size": {
            "maxFlow": "69520",
            "normalFlow": "62800",
            "differential": "89"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "24,4",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "112",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "20,55",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.019",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Hydrocarbon Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-2011",
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
        "ventDrainHole": "0.125",
        "base": {
          "pipeDiameter": "77,92",
          "size": {
            "maxFlow": "2579,5",
            "normalFlow": "2100",
            "differential": "93"
          }
        },
        "method": "size"
      },
      "gas": {
        "dimensionalUnit": "Millimetre",
        "pressure": "25,5",
        "pressureUnit": "Bar,gage",
        "differentialUnit": "kPa",
        "temperature": "95",
        "temperatureUnit": "TdegC",
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "26,8",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.018",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "Hydrocarbon Steam"
        },
        "heatingTemperature": "15.56",
        "isentropicExponent": "1,4"
      }
    },
    {
      "tag": "130-FE-2015",
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
          "pipeDiameter": "102,26",
          "size": {
            "maxFlow": "11616",
            "normalFlow": "9600",
            "differential": "95"
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
        "flowMethod": "Base",
        "flowUnit": "Base Cubic Metres: for NCMH, etc.",
        "flowUnitTime": "Hour",
        "basePressure": "1.0133",
        "basePressureUnit": "Bar,abs",
        "baseTemperature": "0",
        "baseTemperatureUnit": "TdegC",
        "densityMassUnit": "Kilogram (ISO Standards)",
        "densityVolumeUnit": "Cubic Metre",
        "densityMethod": "pvT pf, Tf, Zf, Mw (Molecular Weight)",
        "densitySpecial": {
          "molecularWeight": "28",
          "flowingCompressibilityFactor": "1",
          "baseCompressibilityFactor": "1"
        },
        "viscosity": "0.02",
        "viscosityUnit": "Centipoise cP",
        "gasType": "Enter Fluid Properties",
        "fluidProperties": {
          "name": "HP Nitrogen"
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