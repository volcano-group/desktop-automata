import robot from 'robotjs'
import sleep from 'sleep'
import orifice from './fc8_orifice_map.json'
const ft = orifice.FlangeTaps
const ct = orifice.CornerTaps
const to = orifice.ThickOrifice
const ro = orifice.RestrictiveOrifice
const co = orifice.ConicOrifice

//set speed
robot.setKeyboardDelay(350)
robot.setMouseDelay(100)

//flangetaps
exports.flangetaps = function(request){
    //select flangetaps
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('up')
    robot.keyTap('up')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select orifice stlye
    let i = 0
    for(i=0; i<ft.Style.indexOf(request.style); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select standard
    robot.keyTap('tab')
    robot.keyTap('tab')
    let ind = ft.Standard.indexOf(request.standard)
    let stdInd = ft.Standard.indexOf('ANSI-2530/AGA-3/API-Ch.14 (1992-)')
    if(ind<stdInd){
        for (i=0; i<stdInd-ind; i++){
            robot.keyTap('up')
        }
    } else {
        for (i=0; i<=ind-stdInd; i++){
            robot.keyTap('down')
        }
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pressuretap
    for(i=0; i<ft.PressureTap.indexOf(request.pressuretap); i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<ft.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select primary element material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.primaryelement=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.peUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.peUserDefined.coeffThermalExpansion)
    } else {
        let ind = ft.PrimaryElementMaterial.indexOf(request.primaryelement)
        if(ind<6){
            for (i=0; i<6-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-6; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.special.ManometerCorrectionFactor == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    if(request.special.DrainHole == "on"){
        robot.keyTap('space')
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }
        robot.keyTap('tab')
        if(request.special.holes=="2"){
            robot.keyTap('right')
        }
    } else {
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }    
    }
    
    robot.keyTap('tab')     
    robot.keyTap('tab')     
    robot.keyTap('enter')
    switch(request.gasUnits){
        case "US gas": {
            robot.keyTap('tab')     
            robot.keyTap('enter')
            break
        }        
        case "US vapor": {
            robot.moveMouse(50, 25)
            robot.mouseClick()
            robot.moveMouse(50, 125)
            robot.mouseClick()
        }
    }
    
}

//corner taps
exports.cornertaps = function(request){
    //select corner taps
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('up')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select orifice stlye
    let i = 0
    for(i=0; i<ct.Style.indexOf(request.style); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select standard
    robot.keyTap('tab')
    robot.keyTap('tab')
    let ind = ct.Standard.indexOf(request.standard)
    let stdInd = ct.Standard.indexOf('ANSI-2530/AGA-3/API-Ch.14 (1992-)')
    if(ind<stdInd){
        for (i=0; i<stdInd-ind; i++){
            robot.keyTap('up')
        }
    } else {
        for (i=0; i<=ind-stdInd; i++){
            robot.keyTap('down')
        }
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pressuretap
    for(i=0; i<ct.PressureTap.indexOf(request.pressuretap); i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<ct.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select primary element material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.primaryelement=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.peUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.peUserDefined.coeffThermalExpansion)
    } else {
        let ind = ft.PrimaryElementMaterial.indexOf(request.primaryelement)
        let indStd = ft.PrimaryElementMaterial.indexOf('316')
        if(ind<6){
            for (i=0; i<6-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-6; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.special.ManometerCorrectionFactor == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    if(request.special.DrainHole == "on"){
        robot.keyTap('space')
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }
        robot.keyTap('tab')
        if(request.special.holes=="2"){
            robot.keyTap('right')
        }
    } else {
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }    
    }
    
    robot.keyTap('tab')     
    robot.keyTap('tab')     
    robot.keyTap('enter')
    switch(request.gasUnits){
        case "US gas": {
            robot.keyTap('tab')     
            robot.keyTap('enter')
            break
        }        
        case "US vapor": {
            robot.moveMouse(50, 25)
            robot.mouseClick()
            robot.moveMouse(50, 125)
            robot.mouseClick()
        }
    }

//thick orifice
exports.thickorifice = function(request){
    //select thick orifice
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('up')
    robot.keyTap('up')
    robot.keyTap('up')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<to.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select primary element material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.primaryelement=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.peUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.peUserDefined.coeffThermalExpansion)
    } else {
        let ind = to.PrimaryElementMaterial.indexOf(request.primaryelement)
        let indStd = to.PrimaryElementMaterial.indexOf('316')
        if(ind<indStd){
            for (i=0; i<indStd-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-indStd; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.special.ManometerCorrectionFactor == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    if(request.special.DrainHole == "on"){
        robot.keyTap('space')
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }
        robot.keyTap('tab')
        if(request.special.holes=="2"){
            robot.keyTap('right')
        }
    } else {
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }    
    }
    
    robot.keyTap('tab')     
    robot.keyTap('tab')     
    robot.keyTap('enter')
    switch(request.gasUnits){
        case "US gas": {
            robot.keyTap('tab')     
            robot.keyTap('enter')
            break
        }        
        case "US vapor": {
            robot.moveMouse(50, 25)
            robot.mouseClick()
            robot.moveMouse(50, 125)
            robot.mouseClick()
        }
    }
    
}

//restrictive orifice 
exports.restrictiveorifice = function(request){
    //select RO
    robot.keyTap('tab')
    robot.keyTap('tab')
    robot.keyTap('down')
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select orifice stlye
    let i = 0
    for(i=0; i<ro.Style.indexOf(request.style); i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pressuretap
    for(i=0; i<ro.PressureTap.indexOf(request.pressuretap); i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<ro.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select primary element material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.primaryelement=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.peUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.peUserDefined.coeffThermalExpansion)
    } else {
        let ind = ro.PrimaryElementMaterial.indexOf(request.primaryelement)
        if(ind<6){
            for (i=0; i<6-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-6; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.special.ManometerCorrectionFactor == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    if(request.special.DrainHole == "on"){
        robot.keyTap('space')
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }
        robot.keyTap('tab')
        if(request.special.holes=="2"){
            robot.keyTap('right')
        }
    } else {
        robot.keyTap('tab')
        if(request.special.WaterVaporCorrection == "on"){
            robot.keyTap('space')
        }    
    }
    
    robot.keyTap('tab')     
    robot.keyTap('tab')     
    robot.keyTap('enter')
    switch(request.gasUnits){
        case "US gas": {
            robot.keyTap('tab')     
            robot.keyTap('enter')
            break
        }        
        case "US vapor": {
            robot.moveMouse(50, 25)
            robot.mouseClick()
            robot.moveMouse(50, 125)
            robot.mouseClick()
        }
    }
    
}

//conic orifice 
exports.restrictiveorifice = function(request){
    //select conic orifice
    robot.keyTap('tab')
    robot.keyTap('tab')
    for(i=0; i<7; i++){
        robot.keyTap('down')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pressuretap
    for(i=0; i<ro.PressureTap.indexOf(request.pressuretap); i++){
        robot.keyTap('up')
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select pipe material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.pipematerial=="userdefined"){    
        for(i=0; i<21; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.pmUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.pmUserDefined.coeffThermalExpansion)
    } else {
        for(i=0; i<ro.PipeMaterial.indexOf(request.pipematerial); i++){
            robot.keyTap('down')
        }   
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select primary element material
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.primaryelement=="userdefined"){
        for(i=0; i<15; i++){
            robot.keyTap('down')
        }
        robot.typeString(request.peUserDefined.name)
        robot.keyTap('tab')
        robot.keyTap('enter')
        for(i=0; i<10; i++){
            robot.keyTap('delete')
        }
        robot.typeString(request.peUserDefined.coeffThermalExpansion)
    } else {
        let ind = ro.PrimaryElementMaterial.indexOf(request.primaryelement)
        if(ind<6){
            for (i=0; i<6-ind; i++){
                robot.keyTap('up')
            }
        } else {
            for (i=0; i<=ind-6; i++){
                robot.keyTap('down')
            }
        }    
    }
    robot.keyTap('tab')
    robot.keyTap('enter')
    //select special factor
    robot.keyTap('tab')
    robot.keyTap('tab')
    if(request.special.ManometerCorrectionFactor == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    if(request.special.WaterVaporCorrection == "on"){
        robot.keyTap('space')
    }
    robot.keyTap('tab')
    robot.keyTap('tab')     
    robot.keyTap('enter')
    switch(request.gasUnits){
        case "US gas": {
            robot.keyTap('tab')     
            robot.keyTap('enter')
            break
        }        
        case "US vapor": {
            robot.moveMouse(50, 25)
            robot.mouseClick()
            robot.moveMouse(50, 125)
            robot.mouseClick()
        }
    }
    
}