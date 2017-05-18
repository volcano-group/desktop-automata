import robot from 'robotjs'
import sleep from 'sleep'

//set speed
robot.setKeyboardDelay(200)
robot.setMouseDelay(100)

//open FC8
robot.keyTap('command')
robot.typeString('C:\\FlowConsultant8\\FC8.exe')
robot.keyTap('enter')
sleep.msleep(500)

//insert data
robot.keyTap('tab')
robot.keyTap('down')
robot.keyTap('tab')
robot.keyTap('enter')