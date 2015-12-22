## Ionic Notes App
Demo application built with [Ionic framework](http://ionicframework.com) on [Apache Cordova platform](https://cordova.apache.org). Its simple application where you can create and manage text notes. You can [download release version](https://github.com/burdiuz/ionic-notes-app/raw/master/ionicnotesapp-release.apk).  
  
![Screenshot #1](https://github.com/burdiuz/ionic-notes-app/raw/master/screenshots/03.png)  
[Screenshot #2](https://github.com/burdiuz/ionic-notes-app/raw/master/screenshots/04.png)
[Screenshot #3](https://github.com/burdiuz/ionic-notes-app/raw/master/screenshots/05.png)

### Installation
You can use install.bat on Windows or execute these commands on any platform.
```batch
npm install cordova -g
npm install ionic -g
npm install
ionic state reset
bower install
ionic resources
```
*Note: Android SDK version is defined in package.json.*

### Build
Android application should be signed, so first you will need to create a certificate via `generate_key.bat` or using command
```batch
keytool -genkey -v -keystore com.actualwave.ionicnotesapp.keystore -alias ionicnotesapp -keyalg RSA -keysize 2048 -validity 10000
```
To build application on Windows you can use sequence of batch files
```batch
build_android.bat
sign_apk.bat
```
Or these commands
```batch
cordova build --release android
copy /Y platforms\android\build\outputs\apk\android-release-unsigned.apk ionicnotesapp-release.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore com.actualwave.ionicnotesapp.keystore ionicnotesapp-release.apk ionicnotesapp
```

You can get more information about build process [here](http://ionicframework.com/docs/guide/publishing.html) and [here](https://cordova.apache.org/docs/en/4.0.0/guide/platforms/android/).
  
[Cordova Docs: The config.xml File](https://cordova.apache.org/docs/en/4.0.0/config_ref/)