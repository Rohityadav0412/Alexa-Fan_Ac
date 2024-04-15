var currentState = {
    fan:{
    power:"OFF",
    speed: 1,
    mode: "FanCycle.Manual",
    humidity:25,
    temperature: 23,
    },
    ac:{
        power:"OFF",
        swing:"OFF",
        childLock: "OFF",
        temperature: 23,
        temperatureMode: "COOL",
        temperatureSensor: 18,
    }
    }
    module.exports  = {
    currentState : currentState,
    }