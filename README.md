#  React Native Tof-do App

##  Getting Started

###  Setup Instructions

1. **Unzip** the downloaded project folder.
2. Open your terminal, navigate into the project directory.

Run the following commands:

```bash
# Install dependencies
yarn install
# OR
npm install

# Run the project on Android
npx react-native run-android
# OR
yarn android

# Using a Physical Device
If you're using a physical Android phone:

Make sure you have adb (Android Debug Bridge) installed — part of the Android SDK.

Connect your phone via USB.

Enable Developer Options and turn on USB Debugging.

When prompted on the device, accept the Allow USB debugging permission.

# Features
Maintened responsive design for all devices
Add new task 
Delete new task 
Update task status
Tasks are auto-filtered: completed tasks appear before pending ones. (custom filter not applied)
Used context api to load data while on splash screen.
 


