let { currentState } = require("./currentState.js");
const handleDiscovery = require("./discovery.js");
const handlePowerControl = require("./powerController.js");
const handleRangeControl = require("./rangeController.js");
const handleModeControl = require("./modeController.js");
const handleStateReportAc = require("./stateReport_Ac.js");
const handleStateReportFan = require("./stateReport_Fan.js");
const handleToggleControl = require("./toggleController.js");
const handleThermostatTempControl = require("./thermostat_temp.js");
const handleThermostatModeControl = require("./thermostat_mode.js");
exports.handler = function(request, context) {
  if (
    request.directive.header.namespace === "Alexa.Discovery" &&
    request.directive.header.name === "Discover"
  ) {
    log("DEBUG:", "Discover request", JSON.stringify(request));
    handleDiscovery(request, context, "");
  } else if (
    request.directive.header.namespace === "Alexa.PowerController" &&
    (request.directive.header.name === "TurnOn" ||
      request.directive.header.name === "TurnOff")
  ) {
    log("DEBUG:", "TurnOn or TurnOff Request", JSON.stringify(request));
    handlePowerControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.RangeController" &&
    (request.directive.header.name === "SetRangeValue" || request.directive.header.name==="AdjustRangeValue")
  ) {
    log("DEBUG:", "Range Value Request", JSON.stringify(request));
    handleRangeControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.ModeController" &&
    request.directive.header.name === "SetMode"
  ) {
    log("DEBUG:", "Mode Value Request", JSON.stringify(request));
    handleModeControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.ToggleController" &&
    (request.directive.header.name === "TurnOn" ||
      request.directive.header.name === "TurnOff")
  ) {
    log("DEBUG:", "TurnOn or TurnOff Request", JSON.stringify(request));
    handleToggleControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.ThermostatController" &&
    (request.directive.header.name === "SetTargetTemperature" || request.directive.header.name==="AdjustTargetTemperature")
  ) {
    log("DEBUG:", "ThermostatTemp Request", JSON.stringify(request));
    handleThermostatTempControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.ThermostatController" &&
    request.directive.header.name === "SetThermostatMode"
  ) {
    log("DEBUG:", "ThermostatMode Request", JSON.stringify(request));
    handleThermostatModeControl(request, context);
  } else if (
    request.directive.header.namespace === "Alexa.Authorization" &&
    request.directive.header.name === "AcceptGrant"
  ) {
    handleAuthorization(request, context);
  } else if (request.directive.header.name === "ReportState") {
    if (request.directive.endpoint.endpointId === "FAN-01") {
      handleStateReportFan(request, context);
    } else if (request.directive.endpoint.endpointId === "AC-01") {
      handleStateReportAc(request, context);
    }
  }
};
function handleAuthorization(request, context) {
  // Send the AcceptGrant response
  let payload = {};
  let header = request.directive.header;
  header.name = "AcceptGrant.Response";
  log(
    "DEBUG",
    "AcceptGrant Response: ",
    JSON.stringify({ header: header, payload: payload })
  );
  context.succeed({ event: { header: header, payload: payload } });
}

function log(message, message1, message2) {
  console.log(message + message1 + message2);
}
