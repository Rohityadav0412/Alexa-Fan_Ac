let { currentState } = require("./currentState.js");
function handlePowerControl(request, context) {
  // get device ID passed in during discovery
  let requestMethod = request.directive.header.name;
  let responseHeader = request.directive.header;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  let requestToken = request.directive.endpoint.scope.token;
  let powerResult;

  if (requestMethod === "TurnOn") {
    powerResult = "ON";
  } else if (requestMethod === "TurnOff") {
    powerResult = "OFF";
  }
  if (request.directive.endpoint.endpointId === "FAN-01") {
    currentState["fan"]["power"] = powerResult;
  } else if (request.directive.endpoint.endpointId === "AC-01") {
    currentState["ac"]["power"] = powerResult;
  }

  let contextResult = {
    properties: [
      {
        namespace: "Alexa.PowerController",
        name: "powerState",
        value: powerResult,
        timeOfSample: "2022-09-03T16:20:50.52Z", //retrieve from result.
        uncertaintyInMilliseconds: 50,
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
    context: contextResult,
  };
  log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
  context.succeed(response);
}
function log(message, message1, message2) {
  console.log(message + message1 + message2);
}

module.exports = handlePowerControl;
