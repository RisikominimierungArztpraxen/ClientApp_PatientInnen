# ClientApp_PatientInnen
App mit der Patient:innen ihren Status in der Warteschlange erfahren können oder Nachrichten empfangen können.

Disclaimer: The webapp protoype is not done!

## Developement

### Server

The app is running on a simple Spring Boot Service that is currently only rendering a static webapp. 
When built and run, the server runs on port 9000 and the root component is the app.
The files for the app are in scr/main/webapp

### Frontend

The Frontend Part is a single page application that has a routing concept and is prepared for i18n. 
It uses angular material and the theme is already done and can be used.

## next steps

### Finish the prototype

Since time was running out we could not finish the app. To see how it should look like when it is finished, see [Link to prototype](https://3311r3.axshare.com/#id=u3u9al&p=statisch__benachrichtigung_patient&g=1)

### Add notifications

There will be notifications, send from the QueueApp, to the app.
