#!/bin/bash

# Default values
BUILD_TOOL="cra"
BUILD_TOOL_VERSION="latest"
LANGUAGE="ts"
MEGA_APP_NAME=""
FRAMEWORK="react"
FRAMEWORK_VERSION="latest"
PLATFORM="android"
LOG_FILE="test.log"

# Options
# e.g.
# $ ./mega-app-build.sh --build-tool react --build-tool-version latest --language typescript --name react-latest-cra-latest-node-18-ts --framework cra --framework-version latest --pkg-manager npm
# $ ./mega-app-build.sh -bt react -btr latest -lang typescript -n react-latest-cra-latest-node-18-ts -fw cra -fwv latest -pm npm -pmv latest
# $ ./mega-app-build.sh -n react-latest-cra-latest-node-18-ts

while [[ $# -gt 0 ]]; do
    case $1 in
    -bt | --build-tool)
        BUILD_TOOL=$2
        shift
        ;;
    -btr | --build-tool-version)
        BUILD_TOOL_VERSION=$2
        shift
        ;;
    -lang | --language)
        LANGUAGE=$2
        shift
        ;;
    -n | --name)
        MEGA_APP_NAME=$2
        shift
        ;;
    -fw | --framework)
        FRAMEWORK=$2
        shift
        ;;
    -fwv | --framework-version)
        FRAMEWORK_VERSION=$2
        shift
        ;;
    -pm | --pkg-manager)
        PKG_MANAGER=$2
        shift
        ;;
    -pmv | --pkg-manager-version)
        PKG_MANAGER_VERSION=$2
        shift
        ;;
    -p | --platform)
        PLATFORM=$2
        shift
        ;;
    -h | --help)
        echo "Usage: mega-app-create-app.sh [OPTIONS]"
        echo "Options:"
        echo "  -bt, --build-tool            Specify the build tool: cra, next, vite, angular-cli, vue-cli, nuxt, react-native-cli, expo. (default: cra)"
        echo "  -btr, --build-tool-version   Specify the build tool version (default: latest)"
        echo "  -lang, --language            Specify the language: js, ts (default: js)"
        echo "  -n, --name                   Specify the mega app name (required)"
        echo "  -fw, --framework             Specify the framework: react, angular, vue, react-native (default: react)"
        echo "  -fwv, --framework-version    Specify the framework version (default: latest)"
        echo "  -pm, --pkg-manager           Specify the package manager: npm, yarn (default: npm)"
        echo "  -pmv, --pkg-manager-version  Specify the package manager version (default: latest)"
        echo "  -p, --platform               Specify the platform: android, ios (default: android)"
        echo "  -h, --help                 Show help message"
        exit 0
        ;;
    *)
        echo "Unknown option: $1"
        exit 1
        ;;
    esac
    shift
done

# Check if MEGA_APP_NAME is provided
if [[ -z "$MEGA_APP_NAME" ]]; then
    echo "Please provide a name for the mega app using the -n or --name option."
    exit 1
fi

########################
# Start Mega App Build #
########################

echo $PLATFORM

# echo "cd build-system-tests/mega-apps/${MEGA_APP_NAME}"
# cd build-system-tests/mega-apps/${MEGA_APP_NAME}

if [ "$PKG_MANAGER" == 'yarn' ]; then
    echo "yarn build"
    yarn build
else
    if [[ "$FRAMEWORK" == "react-native" ]]; then
        echo "../../../.github/scripts/build-${PLATFORM}.sh $LOG_FILE $MEGA_APP_NAME $BUILD_TOOL"
        ../../../.github/scripts/build-${PLATFORM}.sh $LOG_FILE $MEGA_APP_NAME $BUILD_TOOL
    else
        echo "npm run build"
        npm run build
    fi
fi
