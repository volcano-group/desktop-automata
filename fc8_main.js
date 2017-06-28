import robot from 'robotjs'
import sleep from 'sleep'
var fs = require('fs')
//set speed
robot.setKeyboardDelay(100)
robot.setMouseDelay(100)

import helpers from './fc8_helpers'
import venturi from './fc8_venturi'
import orifice from './fc8_orifice'
import gas from './fc8_gas'
import vapor from './fc8_vapor'
import liquid from './fc8_liquid'
//fare riferimento a fc8_venturi_map per vedere gli input disponibili
//compilare i json "User Defined" solo se nei relativi input è stato inserito "userdefined"

exports.main = async function(request, customer, errors) {
    const reqPipe = request.pipe
    const reqGas = request.gas
    const reqCalculation = request.calculation
    
    //lancia fc8
    helpers.startFC8()
    //selezione primo tipo di tubo
    helpers.selectType(reqPipe.type)
    //selezione secondo tipo di tubo e lancio degli script
    switch(reqPipe.type2){
        case "Flange Taps": {
            orifice.flangetaps(reqPipe)
            break
        }
        case "Corner Taps":{
            orifice.cornertaps(reqPipe)
            break

        }
        case "Thick Orifice":{
            orifice.thickorifice(reqPipe)
            break
        }
        case "Restrictive Orifice":{
            orifice.restrictiveorifice(reqPipe)
            break
        }
        case "Conic Orifice":{
            orifice.conicorifice(reqPipe)
            break
        }
        case "Quadrant Orifice":{
            orifice.quadrantorifice(reqPipe)
            break
        }
        case "Radius/Vena Contracta Taps":{
            orifice.radiusvena(reqPipe)
            break
        }
        case "Honored Orifice Run, Flange Taps":{
            orifice.hoft(reqPipe)
            break
        }
        case "Honored Orifice Run, Corner Taps":{
            orifice.hoct(reqPipe)
            break
        }
    }
    
    //select gas/vapor type
    switch(reqPipe.gasUnits){
        case "US Gas": {
            gas.gas(reqGas)
            break
        }
        case "US Liquid":{
            liquid.UsLiquid(reqGas)
            break
        }
        case "US Vapor":{
            vapor.vapor(reqGas)
            break
        }
        case "SI Gas":{
            gas.gas(reqGas)
            break
        }
        case "SI Liquid":{
            liquid.SiLiquid(reqGas)
            break
        }
        case "SI Vapor":{
            vapor.vapor(reqGas)
            break
        }
    }
    
    //input calculation
    helpers.calculation(reqCalculation)
    
    //print pdf
    let fileName = Date.now() + '-' + request.tag + '-' + reqPipe.type2
    helpers.printPDF(fileName, customer, request.tag)
    
    
    //helpers.existFile(fileName, errors)
    let fileNameCheck = fileName + '.pdf'
    helpers.existFile(fileName, errors)
    
    //close fc8
    robot.keyTap('f4', 'alt')
    robot.keyTap('tab')
    robot.keyTap('enter')
    sleep.msleep(1000)
    
    
    
    /*.then(()=>{
        console.log("file creato")
    }).catch((file) => {
        errors.push(file)
        console.log(file, " presenta errori")
    })*/
    
    /*try {
        await a
    } catch(err) {
        errors.push(fileName)
        console.log(fileName, "ha presentato errori")
    }*/
    
}