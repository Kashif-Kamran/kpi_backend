
const express = require("express");
const recomendationRouter = express.Router();

let anr_errors = {
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out Thread": ["Request ads after the SDK starts and try not to request more than 1 ad per line of code",
        "Make sure to use the minimal set of SDKs, with all the proper dependencies for ad networks, and perform and android resolve on the final build architecture (64 bit e.g.). when using IronSource mediation, make sure you have zero manual dependencies to ad networks and that you IronSource add the dependencies and do the android resolve. Also be sure you are using the latest versions of everything."],
    "chromium-TrichromeWebViewGoogle.apk-stable-<US_SOCIAL_SECURITY_NUMBER> Input dispatching timed out main tid=1 Runnable": ["Most ANRs are caused by Ad SDKs (e.g. Google's own AdMob), so there is an option to only enable it during ad views.","Add this permission in your manifest uses-permission android:name=android.permission.MANAGE_EXTERNAL_STORAGE","Replaced useAnimatedReaction with another hook","Request ads after the SDK starts and try not to request more than 1 ad per line of code"],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out Thread Signal Catcher tid=7 Runnable": ["Request ads after the SDK starts and try not to request more than 1 ad per line of code"],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out (No focused window) Thread Signal Catcher tid=4 Runnable": ["Increase the delay time from 1000 millis to 2000millis to start new activity or those devices did not have Text to Speech services available and that needed to disable the access to it at all to stop those ANRs"],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out": ["Make sure to use the minimal set of SDKs, with all the proper dependencies for ad networks, and perform and android resolve on the final build architecture (64 bit e.g.). when using IronSource mediation, make sure you have zero manual dependencies to ad networks and that you IronSource add the dependencies and do the android resolve. Also be sure you are using the latest versions of everything."],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out (No focused window) Thread Signal Catcher tid=6 Runnable": ["Call all billing processor methods on an IO thread to avoid blocking your main thread. There are literally too many possible ways to do this to describe succinctly. AsyncTasks, RxJava, vanilla Threads, Android Service, etc."],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out Thread AdWorker(ClientSingle) #1 tid=52 Runnable at cax.<clinit> )": ["Register a BroadcastReceiver for BOTH Intent.ACTION_SCREEN_OFF AND Intent.ACTION_SCREEN_ON actions on onCreate() and unregister it on onDestroy(), AND call this.goAsync().finish() on onReceive()"],
    "GoogleApiHandler tid=31 Native  at android.os.MessageQueue.nativePollOnce (Native method) at android.os.MessageQueue.next (MessageQueue.java:386) at android.os.Looper.loop (Looper.java:175) at android.os.HandlerThread.run (HandlerThread.java:65)": ["Replaced useAnimatedReaction with another hook"],
    "com.google.android.gms.policy_ads_fdr_dynamite@222508000@222508000000.455804270.455804270 - adg.i": ["Optimize Google Mobile Ads SDK initializationThe flag below optimizes the MobileAds.initialize() initialization call:<manifest> <application>"],
    "[libc.so] __ioctl Input dispatching timed out Signal Catcher tid=6 Runnable #00  pc 0x000000000040f3d4  /apex/com.android.runtime/lib64/libart.so (art::DumpNativeStack(std::__1::basic_ostream<char, std::__1::char_traits<char>>&, int, BacktraceMap*, char const*, art::ArtMethod*, void*, bool))": ["Remove all the paths to that 'lock' statement by bypassing the MobileAdsEventExecutor GameObject"],
    "unavailable - com.unity3d.player.UnityPlayer.pauseUnity Input dispatching timed out Signal Catcher tid=4 Runnable": ["Calling MapView#onDestroy in the fragment's onDestroyView() instead of onDestroy(). So nevermind ;)"],
    "Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out Signal Catcher tid=5 Runnable": ["Upgrade to latest version adding also in manifest the Manifest.permission.POST_NOTIFICATIONS"],
    "Native method - android.os.MessageQueue.nativePollOnce Broadcast of Intent { act=android.intent.action.SCREEN_OFF } Signal Catcher tid=6 Runnable": ["Make getByteArrayFromBitmap() runing on background threads.","Register a BroadcastReceiver for BOTH Intent.ACTION_SCREEN_OFF AND Intent.ACTION_SCREEN_ON actions on onCreate() and unregister it on onDestroy(), AND call this.goAsync().finish() on onReceive()"],
    "[libc.so] __futex_wait_ex(void volatile*, bool, int, bool, timespec const*) Input dispatching timed out Signal Catcher tid=6 Runnable": ["Most ANRs are caused by Ad SDKs (e.g. Google's own AdMob), so there is an option to only enable it during ad views."],
    "chromium-TrichromeWebViewGoogle.aab-stable-<US_SOCIAL_SECURITY_NUMBER> - XQ.get Input dispatching timed out Signal Catcher tid=6 Runnable": ["Add this permission in your manifest uses-permission android:name=android.permission.MANAGE_EXTERNAL_STORAGE"],
    "Native method - J.N.MaRRNbDu Input dispatching timed out Signal Catcher tid=5 Runnable": ["Should be using sys.exit() (or the old exit message) and never use os.exit()","Call all billing processor methods on an IO thread to avoid blocking your main thread."],
    "chromium-TrichromeWebViewGoogle.apk-stable-<US_SOCIAL_SECURITY_NUMBER> - org.chromium.android_webview.AwContents.Input dispatching timed out main tid=1 Runnable": ["There is androidHardwareAccelerationDisabled prop in webview make it disabled like this, androidHardwareAccelerationDisabled={true}","Should be using sys.exit() (or the old “exit” message) and never use os.exit()"]
}


let crash_errors = {
    "Caused by: java.lang.IllegalArgumentException: parameter must be a descendant of this view": ["Append a ScrollListener to your Activity, when listView start scrolling, clear current focus.","Set prepare(mediaSource, true, true)"],
    "[libaudioclient.so] android::AudioTrack::setVolume(float, float) SIGSEGV": ["There is a fix scheduled for Android T which came out August 15 2022, so hopefully this crash will start disappearing as more people move to the latest Android OS.","Successfully opened OpenSLES input stream which never calls back, not an OpenSLES which begins callbacks with (audioData == nullptr || numFrames = 0). If the latter is the case, then there is unexpected behavior which should be resolved","Solution 3 for Crash error 2"],
    "[libaudioclient.so] android::AudioTrack::setVolume(float, float) SIGSEGV Stack trace 1 pid: 0, tid: 10630 >>> com.kn.bikestunt3.racing.driving.games": ["Successfully opened OpenSLES input stream which never calls back, not an OpenSLES which begins callbacks with (audioData == nullptr || numFrames = 0). If the latter is the case, then there is unexpected behavior which should be resolved","Catch the OutOfMemory error in two places where the thread is started, and log the error condition. This will let the app try again on the next opportunity (probably the next ScanJob run 15 minutes later) to start a scan.It's still unclear why this happens at all. This should not be necessary."],
    "[libaudioclient.so] android::AudioTrack::setVolume(float, float) SIGSEGV pid: 0, tid: 26995 >>> com.kn.bikestunt3.racing.driving.games": ["There is a fix scheduled for Android T which came out August 15 2022, so hopefully this crash will start disappearing as more people move to the latest Android OS.","Successfully opened OpenSLES input stream which never calls back, not an OpenSLES which begins callbacks with (audioData == nullptr || numFrames = 0). If the latter is the case, then there is unexpected behavior which should be resolved"],
    "[libaudioclient.so] android::AudioTrack::setVolume(float, float) pid: 0, tid: 29111 >>> com.kn.bikestunt3.racing.driving.games": ["Change OutputType to opensl instead of aaudio, which is default"],
    ":com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631 - afk.onTransact": ["In manifest application section add following below android:largeHeap=true","Change OutputType to opensl instead of aaudio, which is default"],
    "android.view.ViewGroup.offsetRectBetweenParentAndChild java.lang.Error java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [main] Unity version     : 2020.3.38f1 Device model      : realme RMX2180 Device fingerprint: realme/RMX2180/RMX2180:11/RP1A.200720.011/1656996363460:user/release-keys Build Type        : Release Scripting Backend : IL2CPP ABI               : arm64-v8a Strip Engine Code : true": ["Append a ScrollListener to your Activity, when listView start scrolling, clear current focus."],
    "libil2cpp java.lang.Error java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain] Unity version     : 2020.3.38f1 Device model      : Xiaomi M2103K19I Device fingerprint: Redmi/camellia_in/camellia:11/RP1A.200720.011/V12.5.4.0.RKSINXM:user/release-keys": ["Added app:surface_type= texture_view in exoplayer layout file instead of android:hardwareAccelerated=true"],
    "libunity java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain]": ["Try disabling hermes in build.gradle"],
    "libaaudio_internal java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain]": ["Set Minimum API Level to Android 4.4(API Level 20) in build settings"],
    "android.view.ViewGroup.offsetRectBetweenParentAndChild java.lang.Error Exception java.lang.Error": ["1. (<meta-data android:name=descendantFocusability android:value=beforeDescendants />)  added in manifest and static banners for restricted mode"],
    "Caused by: java.lang.Error: Version '2020.3.38f1 (8f5fde82e2dc)', Build type 'Release', Scripting Backend 'il2cpp', CPU 'arm64-v8a'": ["Turn off hardware acceleration in the AndroidManifest.xml, or even better, directly on the ad component itself"],
    "float, float)(setVolume - libaudioclient.android::AudioTrack::setVolume java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain] Unity version : 2020.3.38f1 Device model : Xiaomi M2101K6I Device fingerprint: Redmi/sweetinpro/sweetin:12/SKQ1.210908.001/V13.0.5.0.SKFINXM:user/release-keys Build Type        : Release Scripting Backend : IL2CPP ABI               : arm64-v8a Strip Engine Code : true": ["added android:launchMode=singleTask in androidmanifest.xml, in <activety>"],
    "[libunity.so] SIGSEGV #00  pc 0x00000000005c6838  /apex/com.android.art/lib64/libart.so (art #00  pc 0x00000000005c6838  /apex/com.android.art/lib64/libart.so (art::FetchStackTraceVisitor::VisitFrame())": ["Replacing the ad (or any PlatformViews) with a placeholder when the app lyfecycle change to inactive, and show again when lifecycle return to resumed"],
    "libc.abort java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain] Unity version     : 2020.3.38f1 Device model      : Xiaomi M2101K6I": ["Set prepare(mediaSource, true, true)"],
    "libil2cpp java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain]": ["Invalidate Android Studio's cache and Wipe the device's data and cold boot it.","There is a fix scheduled for Android T which came out August 15 2022, so hopefully this crash will start disappearing as more people move to the latest Android OS."],
    "libil2cpp java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain] Unity version     : 2020.3.38f1 Device model      : realme RMX3286": ["In memory change double toGray(Mat& rgb, Mat& gray); to double toGray(Mat rgb, Mat gray)"],
    "android.view.ViewGroup.offsetRectBetweenParentAndChild java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [main] Unity version     : 2019.4.32f1": ["here's a small patch fixing this bug : diff --git a/node_modules/@react-native-admob/admob/android/src/main/java/com/rnadmob/admob/ads/banner/RNAdMobBannerView.java b/node_modules/@react-native-admob/admob/android/src/main/java/com/rnadmob/admob/ads/banner/RNAdMobBannerView.java index 573e3d8..c372d51 100644 --- a/node_modules/@react-native-admob/admob/android/src/main/java/com/rnadmob/admob/ads/banner/RNAdMobBannerView.java +++ b/node_modules/@react-native-admob/admob/android/src/main/java/com/rnadmob/admob/ads/banner/R"],
    "float, float)(setVolume - libaudioclient.android::AudioTrack::setVolume java.lang.Error Exception java.lang.Error Exception java.lang.Error: FATAL EXCEPTION [UnityMain] Unity version     : 2019.4.32f1 Device model      : Xiaomi M2101K6I Device fingerprint:": ["Add this to you Manifest like android:allowBackup=“false” tools:replace=“android:allowBackup”","import com.facebook.react.bridge.Arguments;"],
}

function getErrorType(error)
{
    if (error.includes("Input dispatching") || error.includes("tid") || error.includes("Runnable"))
    {
        return "ANR"; T
    } else
    {
        return "Crash";
    }
}

function findError(occuredError)
{
    try
    {
        let errorType = getErrorType(occuredError);
        var solutions = []
        if (errorType === "ANR")
        {
            if (anr_errors.hasOwnProperty(occuredError))
            {
                solutions = anr_errors[occuredError];
            } else
            {
                console.log("Error not found.");
            }
        } else if (errorType === "Crash")
        {
            if (crash_errors.hasOwnProperty(occuredError))
            {
                solutions = crash_errors[occuredError];


            } else
            {
                console.log("Error not found.");
            }
        }
        else
        {
            console.log("Error Doesn't Belong to ANR and Crashes");
        }
        return {
            status: 401,
            data: solutions
        };
    }
    catch (error)
    {
        console.log("Error Occured While Recomendation",error);
        return {
            status: 500,
            data: "Error Occured While Recomendation"
        }
    }
}
recomendationRouter.post("/",(req,res) =>
{
    console.log("Req ",req.body)
    let sollutions = findError('Native method - android.os.MessageQueue.nativePollOnce Input dispatching timed out Thread')
    console.log("Sollutions : ",sollutions)
    res.send({
        status: 200,
        data: "Recived"
    });
});
// export this router
module.exports = recomendationRouter;

