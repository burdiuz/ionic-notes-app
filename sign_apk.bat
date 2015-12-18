cd platforms/android/build/outputs/apk/
copy android-release-unsigned.apk ionicnotesapp-release.apk
"c:\Program Files\Java\jdk1.8.0_45\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../../../../../com.actualwave.ionicnotesapp.keystore ionicnotesapp-release.apk ionicnotesapp
move ionicnotesapp-release.apk ../../../../../ionicnotesapp-release.apk
cd ../../../../../