## Ionic Notes App
Demo application built with [Ionic framework](http://ionicframework.com) on [Apache Cordova platform](https://cordova.apache.org). Its simple application where you can create and manage text notes. You can download release version here.

### Installation
```
npm install
bower install
#ionic platform add android
cordova platform add android@4.1.1
```

### Build
I've created batch files for building app on Windows. So its just a sequence of batch files. You can get more information about build process [here](http://ionicframework.com/docs/guide/publishing.html) and [here](https://cordova.apache.org/docs/en/4.0.0/guide/platforms/android/).
```
build_android
generate_key
sign_apk
```
  
[Cordova Docs: The config.xml File](https://cordova.apache.org/docs/en/4.0.0/config_ref/)