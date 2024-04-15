# Alexa-Fan_Ac
# Presentation file Attached.
# SMART HOME SKILLS FOR BEDROOM FAN AND BEDROOM AC WITH ALEXA
# Content
01 Alexa
02 Alexa Skill Kit, Skills and Types
03 Alexa Connectivity
04 Foundational APIs
05 Controllers
06 Air Conditioner Skill
07 Fan Skill

# Alexa
Alexa is a virtual assistant developed by Amazon, capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, and other real-time information.

# Alexa Skill Kit, Skills and Types
Alexa Skill Kit
The Alexa Skills Kit (ASK) is a software development framework that enables you to create content, called
skills.
Skills
Skills are like apps for Alexa where we build our logics or code to perform some functionality. With an
interactive voice interface, Alexa gives users a hands-free way to interact with your skill. Users can use their
voice to perform everyday tasks like checking the news, listening to music, or playing a game.
Skill Types
PreBuilt Skills - In this ASK defines the set of words users say to invoke a skill. For example, a user can say,
"Alexa, turn on the light." or "Alexa, turn off the television." You simply define your skill to accept these
predefined requests. eg... Smart Home Skill
Custom Skill - In this everything needs to be developed with custom utterences, own controllers or APIs.

# Alexa Connectivity
When user speaks utterances, those utterances are converted to directives which your
skill receives as a POST request containing a JSON body. The request body contains the
parameters necessary for your skill to understand the request, perform its logic, and then
generate a response.
NOTE - Alexa connects with the skill using the skill Id and the skill is hosted using Lambda
Function on AWS which has its own ARN ( Amazon Resource Names) which are provided in
the skill configuration and defines the endpoint location of the Lambda function

# Foundational APIs
The Alexa foundational API reference contains the API definitions for Alexa interfaces that all
skills use. These APIs include general Alexa directives, response events, discovery, state
reporting, change reporting, and error reporting.
Alexa.Authorization — Obtain credentials to send asynchronous responses or proactive
messages to Alexa.
Alexa.Discovery — Identify the capabilities that your skill supports.
Alexa.EndpointHealth — Report the detected health of devices to Alexa.
Alexa.ErrorResponse — Send an error response to a directive that your skill can't handle.
Alexa.Response — Send a response to a directive that your skill successfully handles.
Alexa.StateReport — to query your skill for the current state of all retrievable properties of
an interface.
Alexa.ChangeReport — a customer might manually turn on the light. You send a change
report so that Alexa displays the correct status of the light in the Alexa app.

# Controllers
These controllers or APIs are used to perform some functionality in our skill. A skill can have as
many as functionality according to the user needs. We will discuss some of the general
controllers we use in our skills.
Alexa.PowerController — Users can turn their smart home devices on and off.
Alexa.RangeController — Model properties of a device that the user can set to one of a
range of values.
Alexa.ToggleController — Model properties of a device that the user can set to on or off.
Alexa.ThermostatController — Interfaces for smart thermostats. We can perform setting the
temerature as well as setting the modes.
Alexa.TemperatureSensor — You can report the temperature for devices that sense the
current temperature, such as thermostats.
Alexa.ModeController — Model properties of a device that the user can set to one of a list of
values.

# Air Conditioner Skill
In this I have implemented the basic functionalities of
AC.
I have implemented Power On-Off.
Showing the current temperature of the surrounding.
Setting up Swing, Child Lock.
Changing the temerature in the range of 16-25.
Selecting the modes of the AC such as Auto, COOL,
HEAT.
I have implmented some edge cases such as all the
functionality will work if the power will be ON.
If the users try to set up the temperature other than 16-
25 range, it would not work.

# Fan Skill
In this I have implemented the basic functionalities of
Fan.
I have implemented Power On-Off.
Showing the current temperature of the surrounding.
Showing the humidity around the fan.
Changing the speed of the Fan in the range of 1-5.
Selecting the modes of the Fan such as Manual, Smart,
Breeze.
I have implmented some edge cases such as all the
functionality will work if the power will be ON.
If the users try to set up the speed other than 1-5 range,
it would not work.
