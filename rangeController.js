let { currentState } = require("./currentState.js");
let generateErrorResponse = require("./errorResponse.js");
function handleRangeControl(request, context) {
  // get device ID passed in during discovery
  let requestMethod = request.directive.header.name;
  let rangeValue = request.directive.payload.rangeValue;
  let responseHeader = request.directive.header;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  let requestToken = request.directive.endpoint.scope.token;
  let speedResult;
  console.log("range", rangeValue);
  console.log("requestMethod", requestMethod);

  if (currentState.fan.power === "OFF") {
    const errorRes = generateErrorResponse(
      "NOT_IN_OPERATION",
      "Cannot change speed because Fan is OFF"
    );
    log("DEBUG", "Alexa.RangeController ", JSON.stringify(errorRes));
    return context.succeed(errorRes);
  } else if (rangeValue < 1 || rangeValue > 5) {
    const errorRes = generateErrorResponse(
      "VALUE_OUT_OF_RANGE",
      "The range value is out of range od 1 to 5.",
      1,
      5
    );
    log(
      "DEBUG",
      "Alexa.RangeController OUT_OF_RANGE",
      JSON.stringify(errorRes)
    );
    return context.succeed(errorRes);
  } else if (requestMethod === "SetRangeValue") {
    speedResult = rangeValue;
    currentState["fan"]["speed"] = speedResult;
  } else {
    if (requestMethod === "AdjustRangeValue") {
      speedResult = request.directive.payload.rangeValueDelta;
      const adjustSpeed = currentState["fan"]["speed"] + speedResult;
      if (adjustSpeed < 1 || adjustSpeed > 5) {
        const errorRes = generateErrorResponse(
          "VALUE_OUT_OF_RANGE",
          "The range value is out of range od 1 to 5.",
          1,
          5
        );
        log(
          "DEBUG",
          "Alexa.RangeController OUT_OF_RANGE",
          JSON.stringify(errorRes)
        );
        return context.succeed(errorRes);
      }
      currentState["fan"]["speed"] = adjustSpeed;
    }
  }
  console.log("speed", speedResult);
  let contextResult = {
    properties: [
      {
        namespace: "Alexa.RangeController",
        name: "rangeValue",
        instance: "Fan.Speed",
        value: currentState["fan"]["speed"],
        timeOfSample: "2017-02-03T16:20:50.52Z",
        uncertaintyInMilliseconds: 500,
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
  log("DEBUG", "Alexa.RangeController ", JSON.stringify(response));
  context.succeed(response);
}
function log(message, message1, message2) {
  console.log(message + message1 + message2);
}

module.exports = handleRangeControl;
