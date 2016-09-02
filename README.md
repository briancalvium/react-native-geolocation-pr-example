# react-native-geolocation-pr-example
Example project using Geolocation background updates change

# Usage
It looks like this step is needed only on iOS >= 9, so test on a device or simulator with 9.x
When starting the app, you should immediately see the use location always alert.

After giving permission, locations should start updating (on the simulator, use City run or similar).

Background the app - should still see logs through xcode.

Update package.json to use RN 0.32, clean npm install => no update logs when in the background.
