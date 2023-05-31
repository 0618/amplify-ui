#!/bin/bash

# Define the log file path
LOG_FILE=$1
# Define app name
MEGA_APP_NAME=$2

BUILD_TOOL=$3

# Import log function
source "../../../.github/scripts/log.sh"

log "command" "pwd"
pwd
log "command" "ls -al"
ls -al

# Log errors to LOG_FILE in the background
log "command" "touch $LOG_FILE"
touch $LOG_FILE
log "command" "npx react-native log-android >$LOG_FILE &"
npx react-native log-android >$LOG_FILE &

# Check if the command succeeded
if [ $? -ne 0 ]; then
  log "error" "Failed to run command: npx react-native log-android > $LOG_FILE &"
  exit 1
fi

# Run npm run android in the background
if [ $BUILD_TOOL == 'cli' ]; then
  log "command" "cd android"
  cd android
  log "command" "./gradlew clean" # To prevent "installDebug FAILED" https://stackoverflow.com/a/54955869/12610324
  ./gradlew clean
  log "command" "cd .."
  cd ..
elif [ $BUILD_TOOL == 'expo' ]; then
  log "command" "npm install expo-cli"
  npm install expo-cli
fi
log "command" "npm run android"
npm run android
