let { currentState } = require("./currentState.js");
let generateErrorResponse = require("./errorResponse.js");
function handleModeControl(request, context) {
  // get device ID passed in during discovery
  let requestMethod = request.directive.header.name;
  let modeValue = request.directive.payload.mode;
  let responseHeader = request.directive.header;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  let requestToken = request.directive.endpoint.scope.token;
  let modeResult;

  if (request.directive.endpoint.endpointId === "FAN-01") {
    if (currentState.fan.power === "OFF") {
      const errorRes = generateErrorResponse(
        "NOT_IN_OPERATION",
        "Cannot change mode because FAN is OFF"
      );
      log("DEBUG", "Alexa.PowerController ", JSON.stringify(errorRes));
      return context.succeed(errorRes);
    } else {
      if (requestMethod === "SetMode") {
        modeResult = modeValue;
        currentState["fan"]["mode"] = modeResult;
      }
    }
  }

  console.log("mode", modeResult);
  let contextResult = {
    properties: [
      {
        namespace: "Alexa.ModeController",
        name: "mode",
        instance: "Fan.Cycle",
        value: modeResult,
        timeOfSample: "2017-02-03T16:20:50.52Z",
        uncertaintyInMilliseconds: 0,
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
  log("DEBUG", "Alexa.ModeController ", JSON.stringify(response));
  context.succeed(response);
}
function log(message, message1, message2) {
  console.log(message + message1 + message2);
}

module.exports = handleModeControl;
