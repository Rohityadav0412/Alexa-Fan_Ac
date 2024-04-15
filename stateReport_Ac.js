let {currentState} = require("./currentState.js");

function handleStateReportAc(request, context) {
    let responseHeader = request.directive.header;
    responseHeader.namespace = "Alexa";
    responseHeader.name = "StateReport";
    responseHeader.messageId = responseHeader.messageId + "-R";
    responseHeader.payloadVersion = "3";
    let requestToken = request.directive.endpoint.scope.token;
  
    let contextResult = {
      properties: [
        {
            "namespace": "Alexa.PowerController",
            "name": "powerState",
            "value": currentState["ac"]["power"],
            "timeOfSample": "2022-02-03T16:20:50.52Z",
            "uncertaintyInMilliseconds": 0,
          },
          {
            "namespace": "Alexa.ToggleController",
            "name": "toggleState",
            "instance": "Ac.Swing",
            "value": currentState["ac"]["swing"],
            "timeOfSample": "2022-02-03T16:20:50.52Z",
            "uncertaintyInMilliseconds": 0,
          },
          {
            "namespace": "Alexa.ToggleController",
            "name": "toggleState",
            "instance": "Ac.ChildLock",
            "value": currentState["ac"]["childLock"],
            "timeOfSample": "2022-02-03T16:20:50.52Z",
            "uncertaintyInMilliseconds": 0,
          },

          {
            "namespace": "Alexa.ThermostatController",
            "name": "thermostatMode",
            "value": currentState["ac"]["temperatureMode"],
            "timeOfSample": "2017-02-03T16:20:50.52Z",
            "uncertaintyInMilliseconds": 500
        },
        {
            "namespace": "Alexa.ThermostatController",
            "name": "targetSetpoint",
            "value": {
                "value": currentState["ac"]["temperature"],
                "scale": "CELSIUS"
            },
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
          "namespace": "Alexa.EndpointHealth",
          "name": "connectivity",
          "value": {
            "value": "OK",
          },
          "timeOfSample": "2022-02-03T16:20:50.52Z",
          "uncertaintyInMilliseconds": 0,
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
    log("DEBUG", "Alexa.StateReport ", JSON.stringify(response));
    context.succeed(response);
  }
  function log(message, message1, message2) {
    console.log(message + message1 + message2);
  }

  module.exports=handleStateReportAc;
  