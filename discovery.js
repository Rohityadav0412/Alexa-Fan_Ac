function handleDiscovery(request, context) {
  console.log("Discover started");
  // Send the discovery response
  let payload = {
    endpoints: [
      {
        endpointId: "FAN-01",
        manufacturerName: "Smart Device Company",
        friendlyName: "Bedroom Fan",
        description: "Virtual smart FAN",
        displayCategories: ["FAN"],
        additionalAttributes: {
          manufacturer: "Sample Manufacturer",
          model: "Sample Model",
          serialNumber: "U11112233456",
          firmwareVersion: "1.24.2546",
          softwareVersion: "1.036",
          customIdentifier: "Sample custom ID",
        },
        cookie: {
          key1: "arbitrary key/value pairs for skill to reference this endpoint.",
          key2: "There can be multiple entries",
          key3: "but they should only be used for reference purposes.",
          key4: "This is not a suitable place to maintain current endpoint state.",
        },
        capabilities: [
          {
            interface: "Alexa.PowerController",
            version: "3",
            type: "AlexaInterface",
            properties: {
              supported: [
                {
                  name: "powerState",
                },
              ],
              retrievable: true,
            },
          },
          {
            interface: "Alexa.RangeController",
            version: "3",
            type: "AlexaInterface",
            instance: "Fan.Speed",
            properties: {
              supported: [
                {
                  name: "rangeValue",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
              nonControllable: false,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Speed",
                    locale: "en-IN",
                  },
                },
              ],
            },
            configuration: {
              supportedRange: {
                minimumValue: 1,
                maximumValue: 5,
                precision: 1,
              },
              presets: [
                {
                  rangeValue: 1,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Minimum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Low",
                        },
                      },
                      {
                        "@type": "text",
                        value: {
                          text: "Lowest",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
                {
                  rangeValue: 5,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Maximum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.High",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            interface: "Alexa.RangeController",
            version: "3",
            type: "AlexaInterface",
            instance: "Fan.Humidity",
            properties: {
              supported: [
                {
                  name: "rangeValue",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
              nonControllable: true,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Humidity",
                    locale: "en-IN",
                  },
                },
              ],
            },
            configuration: {
              supportedRange: {
                minimumValue: 1,
                maximumValue: 5,
                precision: 1,
              },
              presets: [
                {
                  rangeValue: 1,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Minimum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Low",
                        },
                      },
                      {
                        "@type": "text",
                        value: {
                          text: "Lowest",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
                {
                  rangeValue: 5,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Maximum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.High",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            interface: "Alexa.RangeController",
            version: "3",
            type: "AlexaInterface",
            instance: "Fan.Temperature",
            properties: {
              supported: [
                {
                  name: "rangeValue",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
              nonControllable: true,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Temperature",
                    locale: "en-IN",
                  },
                },
              ],
            },
            configuration: {
              supportedRange: {
                minimumValue: 1,
                maximumValue: 5,
                precision: 1,
              },
              presets: [
                {
                  rangeValue: 1,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Minimum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Low",
                        },
                      },
                      {
                        "@type": "text",
                        value: {
                          text: "Lowest",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
                {
                  rangeValue: 5,
                  presetResources: {
                    friendlyNames: [
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.Maximum",
                        },
                      },
                      {
                        "@type": "asset",
                        value: {
                          assetId: "Alexa.Value.High",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.ModeController",
            instance: "Fan.Cycle",
            version: "3",
            properties: {
              supported: [
                {
                  name: "mode",
                },
              ],
              retrievable: true,
              proactivelyReported: true,
              nonControllable: false,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Mode",
                    locale: "en-IN",
                  },
                },
              ],
            },
            configuration: {
              ordered: false,
              supportedModes: [
                {
                  value: "FanCycle.Manual",
                  modeResources: {
                    friendlyNames: [
                      {
                        "@type": "text",
                        value: {
                          text: "Manual",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
                {
                  value: "FanCycle.Smart",
                  modeResources: {
                    friendlyNames: [
                      {
                        "@type": "text",
                        value: {
                          text: "Smart",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
                {
                  value: "FanCycle.Breeze",
                  modeResources: {
                    friendlyNames: [
                      {
                        "@type": "text",
                        value: {
                          text: "Breeze",
                          locale: "en-IN",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.EndpointHealth",
            version: "3.2",
            properties: {
              supported: [
                {
                  name: "connectivity",
                },
              ],
              retrievable: true,
            },
          },
          {
            type: "AlexaInterface",
            interface: "Alexa",
            version: "3",
          },
        ],
      },
      {
        endpointId: "AC-01",
        manufacturerName: "Smart Device Company Ac",
        friendlyName: "Bedroom AC",
        description: "Virtual smart AC",
        displayCategories: ["THERMOSTAT"],
        additionalAttributes: {
          manufacturer: "Sample Manufacturer Ac",
          model: "Sample Model Ac",
          serialNumber: "U11112233456",
          firmwareVersion: "1.24.2546",
          softwareVersion: "1.036",
          customIdentifier: "Sample custom ID",
        },
        cookie: {
          key1: "arbitrary key/value pairs for skill to reference this endpoint.",
          key2: "There can be multiple entries",
          key3: "but they should only be used for reference purposes.",
          key4: "This is not a suitable place to maintain current endpoint state.",
        },
        capabilities: [
          {
            interface: "Alexa.PowerController",
            version: "3",
            type: "AlexaInterface",
            properties: {
              supported: [
                {
                  name: "powerState",
                },
              ],
              retrievable: true,
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.ThermostatController",
            version: "3",
            properties: {
              supported: [
                {
                  name: "targetSetpoint",
                },
                {
                  name: "thermostatMode",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
            },
            configuration: {
              supportedModes: ["AUTO", "COOL", "HEAT"],
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.TemperatureSensor",
            version: "3",
            properties: {
              supported: [
                {
                  name: "temperature",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.ToggleController",
            instance: "Ac.Swing",
            version: "3",
            properties: {
              supported: [
                {
                  name: "toggleState",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
              nonControllable: false,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Swing",
                    locale: "en-IN",
                  },
                },
              ],
            },
          },
          {
            type: "AlexaInterface",
            interface: "Alexa.ToggleController",
            instance: "Ac.ChildLock",
            version: "3",
            properties: {
              supported: [
                {
                  name: "toggleState",
                },
              ],
              proactivelyReported: true,
              retrievable: true,
              nonControllable: false,
            },
            capabilityResources: {
              friendlyNames: [
                {
                  "@type": "text",
                  value: {
                    text: "Child lock",
                    locale: "en-IN",
                  },
                },
              ],
            },
          },

          {
            type: "AlexaInterface",
            interface: "Alexa.EndpointHealth",
            version: "3.2",
            properties: {
              supported: [
                {
                  name: "connectivity",
                },
              ],
              retrievable: true,
            },
          },
          {
            type: "AlexaInterface",
            interface: "Alexa",
            version: "3",
          },
        ],
      },
    ],
  };
  let header = request.directive.header;
  header.name = "Discover.Response";
  log(
    "DEBUG",
    "Discovery Response: ",
    JSON.stringify({ header: header, payload: payload })
  );
  context.succeed({ event: { header: header, payload: payload } });
}

function log(message, message1, message2) {
  console.log(message + message1 + message2);
}
module.exports = handleDiscovery;
