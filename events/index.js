const EventEmitter = require('events')
const event = new EventEmitter()
//NODE JS HAS A BUILT IN MODULE CALLED EVENTS
//WHERE YOU CAN LISTEN, FIRE, AND CREATE YOUR OWN EVENTS
//EG1: REGISTRING FOR THE EVENT TO BE FIRED ONLY OE TIME USING ONCE
//EG 2: CREATE A EVENT  EMITTER INSTANCE AND REGISTER A COUPLE OF CALLBACKS
//EG 3: REGISTER FOR THE EVENT WITH THE CALLBACK PARAMETER

event.on("sayMyName", () => {
    console.log("event saymyname is triggerd")
})

//REGISTERING MUSTIPLE CALLBACK ON A EVENT
event.on("sayMyName", () => {
    console.log("eVENT SAY NAME IS TRIGGERED 2ND TIME")
})
event.on("sayMyName", () => {
    console.log("eVENT SAY NAME IS TRIGGERED 2ND TIME")
})

//CALLING EVENT
event.emit("sayMyName")

event.on("checkPage", (sc, msg) => {
    console.log(`Status Code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage", 200, "ok")
