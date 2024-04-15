let { currentState } = require("./currentState.js");
let generateErrorResponse = require("./errorResponse.js");
function handleToggleControl(request, context) {
  // get device ID passed in during discovery
  let requestMethod = request.directive.header.name;
  let responseHeader = request.directive.header;
  let requestInstance = request.directive.header.instance;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  let requestToken = request.directive.endpoint.scope.token;
  let toggleResult;

  if (currentState.ac.power === "OFF") {
    const errorRes = generateErrorResponse(
      "NOT_IN_OPERATION",
      "Cannot toggle because AC is OFF"
    );
    log("DEBUG", "Alexa.ToggleController ", JSON.stringify(errorRes));
    return context.succeed(errorRes);
  } else {
    if (requestInstance === "Ac.Swing") {
      if (requestMethod === "TurnOn") {
        toggleResult = "ON";
      } else if (requestMethod === "TurnOff") {
        toggleResult = "OFF";
      }
      currentState["ac"]["swing"] = toggleResult;
    } 
    else if(requestInstance === "Ac.ChildLock") {
      if (requestMethod === "TurnOn") {
        toggleResult = "ON";
      } else if (requestMethod === "TurnOff") {
        toggleResult = "OFF";
      }
      currentState["ac"]["childLock"] = toggleResult;
    }
  }
  console.log("power",currentState.ac.power);
  console.log("requestMethd",requestMethod);
  console.log("requestInstance",requestInstance);
  console.log("childLock",currentState["ac"]["childLock"]);
  console.log("swing",currentState["ac"]["swing"]);
  let contextResult = {
    properties: [
      {
        namespace: "Alexa.ToggleController",
        name: "toggleState",
        value: toggleResult,
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
  log("DEBUG", "Alexa.ToggleController ", JSON.stringify(response));
  context.succeed(response);
}
function log(message, message1, message2) {
  console.log(message + message1 + message2);
}

module.exports = handleToggleControl;
