let {currentState} = require("./currentState.js");

function handleStateReportFan(request, context) {
    let responseHeader = request.directive.header;
    responseHeader.namespace = "Alexa";
    responseHeader.name = "StateReport";
    responseHeader.messageId = responseHeader.messageId + "-R";
    responseHeader.payloadVersion = "3";
    // log("power", currentState);
    // // log("speed",currentState);
    // get user token pass in request
    let requestToken = request.directive.endpoint.scope.token;
  
    let contextResult = {
      properties: [
        {
          namespace: "Alexa.PowerController",
          name: "powerState",
          value: currentState["fan"]["power"],
          timeOfSample: "2022-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 0,
        },
        {
          namespace: "Alexa.RangeController",
          name: "rangeValue",
          instance: "Fan.Speed",
          value: currentState["fan"]["speed"],
          timeOfSample: "2022-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 0,
        },
        {
          namespace: "Alexa.ModeController",
          name: "mode",
          instance: "Fan.Cycle",
          value: currentState["fan"]["mode"],
          timeOfSample: "2022-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 0,
        },
        {
          namespace: "Alexa.RangeController",
          name: "rangeValue",
          instance: "Fan.Humidity",
          value: currentState["fan"]["humidity"],
          timeOfSample: "2022-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 0,
        },
        {
          namespace: "Alexa.RangeController",
          name: "rangeValue",
          instance: "Fan.Temperature",
          value: currentState["fan"]["temperature"],
          timeOfSample: "2022-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 0,
        }, 

        {
          namespace: "Alexa.EndpointHealth",
          name: "connectivity",
          value: {
            value: "OK",
          },
          timeOfSample: "2022-02-03T16:20:50.52Z",
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
    log("DEBUG", "Alexa.StateReport ", JSON.stringify(response));
    context.succeed(response);
  }
  function log(message, message1, message2) {
    console.log(message + message1 + message2);
  }

  module.exports=handleStateReportFan;
  