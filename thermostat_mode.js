let {currentState} = require("./currentState.js");
let generateErrorResponse = require("./errorResponse.js");
function handleThermostatModeControl(request, context) {
    // get device ID passed in during discovery
    let requestMethod = request.directive.header.name;
    let responseHeader = request.directive.header;
    responseHeader.namespace = "Alexa";
    responseHeader.name = "Response";
    responseHeader.messageId = responseHeader.messageId;
    // get user token pass in request
    let requestToken = request.directive.endpoint.scope.token;
    let modeResult;
 
  
      if (currentState.ac.power === "OFF") {
        const errorRes = generateErrorResponse(
          "NOT_IN_OPERATION",
          "Cannot change mode because AC is OFF"
        );
        log("DEBUG", "Alexa.PowerController ", JSON.stringify(errorRes));
        return context.succeed(errorRes);
      }
      else {
        if(requestMethod==="SetThermostatMode"){
           modeResult=request.directive.payload.thermostatMode.value; 
           currentState["ac"]["temperatureMode"]=modeResult;   
        }
      }
      console.log("request method",requestMethod);
    
     

    let contextResult = {
      properties: [
        {
            "namespace": "Alexa.ThermostatController",
            "name": "thermostatMode",
            "value": modeResult,
            "timeOfSample": "2017-02-03T16:20:50.52Z",
            "uncertaintyInMilliseconds": 500
        },
        {
          "namespace": "Alexa.TemperatureSensor",
          "name": "temperature",
          "value": {
              "value": currentState["ac"]["temperatureSensor"],
              "scale": "CELSIUS"
          },
          "timeOfSample": "2017-02-03T16:20:50.52Z",
          "uncertaintyInMilliseconds": 1000
      },
        {
          namespace: "Alexa.EndpointHealth",
          name: "connectivity",
          value: {
            value: "OK",
          },
          timeOfSample: "2022-09-03T22:43:17.877738+00:00",
          uncertaintyInMilliseconds: 0,
        },
      ],
    };
    const response = {
      context: contextResult,
      event: {
        header: responseHeader,
        endpoint: {
          scope: {
            type: "BearerToken",
            token: requestToken,
          },
          endpointId: request.directive.endpoint.endpointId,
        },
        payload: {},
      },
    };
    log("DEBUG", "Alexa.ThermostatController ", JSON.stringify(response));
    context.succeed(response);
  }
  function log(message, message1, message2) {
    console.log(message + message1 + message2);
  }

  module.exports=handleThermostatModeControl;
  