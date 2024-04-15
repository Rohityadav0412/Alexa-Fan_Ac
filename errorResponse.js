    // Define a function to generate the ErrorResponse JSON
    function generateErrorResponse(errorType,errorMessage,Min_Value,Max_Value) {
        const errorResponse = {
            "event": {
            "header": {
                "namespace": "Alexa",
                "name": "ErrorResponse",
                "messageId": "Unique identifier, preferably a version 4 UUID",
                "correlationToken": "Opaque correlation token that matches the request",
                "payloadVersion": "3"
            },
            "endpoint":{
                "scope":{
                "type":"BearerToken",
                "token":"access-token-from-Amazon"
                },
                "endpointId": "Endpoint ID"
            },
            "payload": {
                "type":errorType ,
                "message": errorMessage,
                "validRange": {
                    "minimumValue": Min_Value,
                    "maximumValue": Max_Value
                  }
            }
            }
        }
        return errorResponse;
    }
    module.exports = generateErrorResponse;
    