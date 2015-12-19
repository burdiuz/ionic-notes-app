## Ionic Notes App
Demo application built with [Ionic framework](http://ionicframework.com) on [Apache Cordova platform](https://cordova.apache.org). Its simple application where you can create and manage text notes. You can download release version [here](https://github.com/burdiuz/ionic-notes-app/raw/master/ionicnotesapp-release.apk).

### Installation
```batch
npm install
bower install
#ionic platform add android
cordova platform add android@4.1.1
```
*Note: Android SDK version might be omitted.*

### Build
I've created batch files to simplify building application on Windows.
```batch
build_android.bat
generate_key.bat #run once to generate certificate
sign_apk.bat
```
You can get more information about build process [here](http://ionicframework.com/docs/guide/publishing.html) and [here](https://cordova.apache.org/docs/en/4.0.0/guide/platforms/android/).
  
[Cordova Docs: The config.xml File](https://cordova.apache.org/docs/en/4.0.0/config_ref/)