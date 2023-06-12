let error_1 =
    `:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631 - afk.onTransact

java.lang.Error

Type

java.lang.Error

Exception java.lang.Error: FATAL EXCEPTION [main]
Unity version     : 2020.3.38f1
Device model      : Xiaomi Redmi 7A
Device fingerprint: Xiaomi/pine/pine:9/PKQ1.190319.001/V11.0.7.0.PCMMIXM:user/release-keys
Build Type        : Release
Scripting Backend : IL2CPP
ABI               : armeabi-v7a
Strip Engine Code : true

Caused by: java.lang.OutOfMemoryError: pthread_create (1040KB stack) failed: Try again
at java.lang.Thread.nativeCreate
at java.lang.Thread.start (Thread.java:733)
at java.util.concurrent.ThreadPoolExecutor.addWorker (ThreadPoolExecutor.java:975)
at java.util.concurrent.ThreadPoolExecutor.execute (ThreadPoolExecutor.java:1393)
at com.google.android.gms.ads.internal.util.future.d.execute (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631)
at com.google.android.gms.ads.nonagon.ad.event.dx.v (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631)
at com.google.android.gms.ads.nonagon.ad.event.dx.x (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631)
at com.google.android.gms.ads.nonagon.shim.f.o (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631:2)
at com.google.android.gms.ads.nonagon.shim.ab.o (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631)
at com.google.android.gms.ads.internal.client.bf.bQ (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631:96)
at afk.onTransact (:com.google.android.gms.policy_ads_fdr_dynamite@224400003@224400003057.484457631.484457631:4)
at android.os.Binder.transact (Binder.java:662)
at com.google.android.gms.internal.ads.zzasd.zzbl (com.google.android.gms:play-services-ads-base@@21.4.0:2)
at com.google.android.gms.ads.internal.client.zzbs.zzz (com.google.android.gms:play-services-ads-lite@@21.4.0:2)
at com.google.android.gms.ads.internal.client.zzea.zzn (com.google.android.gms:play-services-ads-lite@@21.4.0:1)
at com.google.android.gms.ads.BaseAdView.pause (com.google.android.gms:play-services-ads-lite@@21.4.0:5)
at com.google.unity.ads.Banner$8.run (Banner.java:319)
at android.os.Handler.handleCallback (Handler.java:873)
at android.os.Handler.dispatchMessage (Handler.java:99)
at android.os.Looper.loop (Looper.java:201)
at android.app.ActivityThread.main (ActivityThread.java:6861)
at java.lang.reflect.Method.invoke
at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run (RuntimeInit.java:547)
at com.android.internal.os.ZygoteInit.main (ZygoteInit.java:873)`

let error_2 = `libil2cpp
java.lang.Error

java.lang.Error
Exception java.lang.Error: FATAL EXCEPTION [UnityMain]
Unity version     : 2020.3.38f1
Device model      : Xiaomi M2103K19I
Device fingerprint: Redmi/camellia_in/camellia:11/RP1A.200720.011/V12.5.4.0.RKSINXM:user/release-keys
Build Type        : Release
Scripting Backend : IL2CPP
ABI               : arm64-v8a
Strip Engine Code : true

Caused by: java.lang.Error: *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
Version '2020.3.38f1 (8f5fde82e2dc)', Build type 'Release', Scripting Backend 'il2cpp', CPU 'arm64-v8a'
Build fingerprint: 'Redmi/camellia_in/camellia:11/RP1A.200720.011/V12.5.4.0.RKSINXM:user/release-keys'
Revision: '0'
ABI: 'arm64'
Timestamp: 2022-09-25 10:59:15+0530
pid: 4900, tid: 4900, name: g.driving.games  >>> com.kn.bikestunt3.racing.driving.games <<<
uid: 10271
signal 11 (SIGSEGV), code 1 (SEGV_MAPERR), fault addr 0x4a
Cause: null pointer dereference
    x0  0000000000000000  x1  0000000000000000  x2  0000007fdce31ff0  x3  0000007fdce32120
    x4  0000000000000000  x5  0000007fdce31b00  x6  0000007fdce31af8  x7  0000007fdce31af0
    x8  00000073d3b2d494  x9  000000000000000a  x10 0000000000000000  x11 0000000000000001
    x12 00000073d5266000  x13 0000000000000001  x14 00000074d6ed1408  x15 0000000000001000
    x16 00000073d76ee1d8  x17 00000074d19679c0  x18 00000073d5269000  x19 0000007fdce32120
    x20 0000000000000000  x21 0000000000000000  x22 0000007fdce31ff0  x23 0000000000000003
    x24 0000000000000000  x25 0000000012c45370  x26 0000000000000000  x27 0000007fdce326a0
    x28 0000000000000008  x29 0000007fdce322f0
    sp  0000007fdce31f60  lr  00000073d69199fc  pc  00000073d3b63394

backtrace:
      #00 pc 0000000000523394  /data/app/~~qgEnaj3g7rEy7bHP96nr5w==/com.kn.bikestunt3.racing.driving.games-fpLvGkrVqWwyoSniB1o-yg==/lib/arm64/libil2cpp.so (BuildId: 6589c1b79341e0922329620d9a03f5af2f50951b)
      #01 pc 00000000003619f8  /data/app/~~qgEnaj3g7rEy7bHP96nr5w==/com.kn.bikestunt3.racing.driving.games-fpLvGkrVqWwyoSniB1o-yg==/lib/arm64/libunity.so (BuildId: 6c3dc58956432421cfb66387014dbfab00363609)
      #02 pc 00000000003656ec  /data/app/~~qgEnaj3g7rEy7bHP96nr5w==/com.kn.bikestunt3.racing.driving.games-fpLvGkrVqWwyoSniB1o-yg==/lib/arm64/libunity.so (BuildId: 6c3dc58956432421cfb66387014dbfab00363609)
      #03 pc 00000000001b4ca4  /data/app/~~qgEnaj3g7rEy7bHP96nr5w==/com.kn.bikestunt3.racing.driving.games-fpLvGkrVqWwyoSniB1o-yg==/lib/arm64/libunity.so (BuildId: 6c3dc58956432421cfb66387014dbfab00363609)
      #04 pc 0000000000070bc0  /data/app/~~qgEnaj3g7rEy7bHP96nr5w==/com.kn.bikestunt3.racing.driving.games-fpLvGkrVqWwyoSniB1o-yg==/oat/arm64/base.odex
  at libil2cpp
  at libunity
  at libunity
  at libunity
  at base
`

let error_3 =
    `libunity
java.lang.Error

Exception java.lang.Error
Exception java.lang.Error: FATAL EXCEPTION [UnityMain]
Unity version     : 2020.3.38f1
Device model      : Xiaomi Redmi Note 8
Device fingerprint: xiaomi/ginkgo/ginkgo:11/RKQ1.201004.002/V12.5.1.0.RCOINXM:user/release-keys
Build Type        : Release
Scripting Backend : IL2CPP
ABI               : arm64-v8a
Strip Engine Code : true

Caused by: java.lang.Error: *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
Version '2020.3.38f1 (8f5fde82e2dc)', Build type 'Release', Scripting Backend 'il2cpp', CPU 'arm64-v8a'
Build fingerprint: 'xiaomi/ginkgo/ginkgo:11/RKQ1.201004.002/V12.5.1.0.RCOINXM:user/release-keys'
Revision: '0'
ABI: 'arm64'
Timestamp: 2022-09-05 11:38:04+0530
pid: 13957, tid: 23126, name: Thread-1144  >>> com.kn.bikestunt3.racing.driving.games <<<
uid: 10675
signal 11 (SIGSEGV), code 1 (SEGV_MAPERR), fault addr 0x12e4
    x0  0000000000000000  x1  00000072b5956980  x2  b40000731f4351c8  x3  b40000731f360618
    x4  0000000000000000  x5  000000725a3fe370  x6  0000007251b44ee0  x7  0000007251b44ec0
    x8  00000000000012e4  x9  00000000000012f4  x10 0000000000001304  x11 0000000000000001
    x12 0000000000001324  x13 0000000000000007  x14 00000000fffe921c  x15 0000000000000000
    x16 00000074289f0940  x17 000000751659513c  x18 0000000000000000  x19 0000000000000000
    x20 00000073250df0f0  x21 0000000000000001  x22 000000742758cc80  x23 0000000000000001
    x24 00000072b5956a78  x25 0000000000000000  x26 0000000000000000  x27 000000742758c1d0
    x28 00000074275892b0  x29 00000072b59569a0
    sp  00000072b5956940  lr  0000007427dd5fb4  pc  0000007427dd6074

backtrace:
      #00 pc 000000000054f074  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #01 pc 0000000000ae26c4  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #02 pc 00000000006dcd90  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #03 pc 00000000006dd674  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #04 pc 0000000000766634  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #05 pc 0000000000744b4c  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #06 pc 00000000006e0b84  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #07 pc 00000000006ec634  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #08 pc 00000000006f4034  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #09 pc 0000000000d8a3ec  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #10 pc 0000000000d8da98  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #11 pc 0000000000d8a3ec  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #12 pc 0000000000742334  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #13 pc 0000000000f57008  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #14 pc 0000000000f57008  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #15 pc 0000000000576dd4  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #16 pc 00000000004f210c  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #17 pc 00000000004f7e7c  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #18 pc 00000000004cc5fc  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #19 pc 0000000000d725b8  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #20 pc 00000000014690d8  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #21 pc 000000000146c1dc  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #22 pc 00000000005b71a8  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #23 pc 00000000004f210c  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #24 pc 0000000000364830  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #25 pc 00000000003684c4  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #26 pc 00000000001b69dc  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #27 pc 0000000000035aa0  /data/app/~~ShAEu_YKlSJl0TUpFuD_pw==/com.kn.bikestunt3.racing.driving.games-9cW-Q-qyH11fLR1DVLFvmw==/oat/arm64/base.odex
  at libunity
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libunity
  at libunity
  at libunity
  at base
`

let error_4 =
    `android.view.ViewGroup.offsetRectBetweenParentAndChild
java.lang.Error


Exception java.lang.Error
Exception java.lang.Error: FATAL EXCEPTION [main]
Unity version     : 2020.3.38f1
Device model      : Xiaomi M2004J19C
Device fingerprint: Redmi/lancelot_in/lancelot:11/RP1A.200720.011/V12.5.5.0.RJCINXM:user/release-keys
Build Type        : Release
Scripting Backend : IL2CPP
ABI               : arm64-v8a
Strip Engine Code : true

Caused by: java.lang.IllegalArgumentException: parameter must be a descendant of this view
  at android.view.ViewGroup.offsetRectBetweenParentAndChild (ViewGroup.java:6417)
  at android.view.ViewGroup.offsetDescendantRectToMyCoords (ViewGroup.java:6343)
  at android.view.ViewRootImpl.scrollToRectOrFocus (ViewRootImpl.java:4694)
  at android.view.ViewRootImpl.draw (ViewRootImpl.java:4230)
  at android.view.ViewRootImpl.performDraw (ViewRootImpl.java:4074)
  at android.view.ViewRootImpl.performTraversals (ViewRootImpl.java:3329)
  at android.view.ViewRootImpl.doTraversal (ViewRootImpl.java:2129)
  at android.view.ViewRootImpl$TraversalRunnable.run (ViewRootImpl.java:8603)
  at android.view.Choreographer$CallbackRecord.run (Choreographer.java:975)
  at android.view.Choreographer.doCallbacks (Choreographer.java:799)
  at android.view.Choreographer.doFrame (Choreographer.java:734)
  at android.view.Choreographer$FrameDisplayEventReceiver.run (Choreographer.java:960)
  at android.os.Handler.handleCallback (Handler.java:938)
  at android.os.Handler.dispatchMessage (Handler.java:99)
  at android.os.Looper.loop (Looper.java:236)
  at android.app.ActivityThread.main (ActivityThread.java:7864)
  at java.lang.reflect.Method.invoke
  at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run (RuntimeInit.java:620)
  at com.android.internal.os.ZygoteInit.main (ZygoteInit.java:1011)"

`

let error_5 =
    `libil2cpp
java.lang.Error

Exception java.lang.Error
Exception java.lang.Error: FATAL EXCEPTION [UnityMain]
Unity version     : 2020.3.38f1
Device model      : samsung SM-A125F
Device fingerprint: samsung/a12nnxx/a12:11/RP1A.200720.012/A125FXXS2BVC1:user/release-keys
Build Type        : Release
Scripting Backend : IL2CPP
ABI               : arm64-v8a
Strip Engine Code : true

Caused by: java.lang.Error: *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
Version '2020.3.38f1 (8f5fde82e2dc)', Build type 'Release', Scripting Backend 'il2cpp', CPU 'arm64-v8a'
Build fingerprint: 'samsung/a12nnxx/a12:11/RP1A.200720.012/A125FXXS2BVC1:user/release-keys'
Revision: '7'
ABI: 'arm64'
Timestamp: 2022-09-03 17:19:45+0530
pid: 3043, tid: 6118, name: UnityMain  >>> com.kn.bikestunt3.racing.driving.games <<<
uid: 10447
signal 11 (SIGSEGV), code 1 (SEGV_MAPERR), fault addr 0x7e58df62a8
    x0  0000007dbb0e0fb0  x1  0000000000000000  x2  fffffffffffffff0  x3  0000007dbb0e1000
    x4  0000007dbb0e1030  x5  0000000000000004  x6  00000000ffffffff  x7  000000000435b528
    x8  fffffffffffffc08  x9  0000007e58df62b0  x10 0000000000000000  x11 0000000000000000
    x12 0000007dc031d020  x13 0000007dbb0e0fb0  x14 000000000001f6e5  x15 ffffffffffffe010
    x16 0000007d4fcc0678  x17 0000007e51758fc0  x18 0000000000000000  x19 0000000000000020
    x20 0000007e58df6298  x21 0000007dc031f960  x22 0000007d4fddb000  x23 0000007e58df5eb8
    x24 0000000000000000  x25 0000007d4fddc000  x26 0000007dc34663dd  x27 0000007db4190252
    x28 0000000000000001  x29 0000007dbb0e1080
    sp  0000007dbb0e0fa0  lr  0000007d4e651d2c  pc  0000007d4e6520ac

backtrace:
      #00 pc 000000000052e0ac  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #01 pc 000000000052aa5c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #02 pc 000000000052a248  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #03 pc 0000000000529f20  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #04 pc 000000000052c11c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #05 pc 000000000052c378  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #06 pc 0000000000527618  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #07 pc 000000000052c608  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #08 pc 000000000052eb2c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #09 pc 00000000004ddbf4  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #10 pc 0000000001038c00  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #11 pc 0000000000cd701c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #12 pc 0000000000ce4c20  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #13 pc 0000000000a69450  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #14 pc 0000000001132558  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #15 pc 0000000000cd77ac  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #16 pc 0000000000a1e5e4  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #17 pc 0000000000a6b7b0  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #18 pc 0000000000cde05c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #19 pc 0000000000d4a038  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #20 pc 0000000000d4b3d4  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #21 pc 0000000000a6a1d8  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #22 pc 0000000000bc6164  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #23 pc 00000000005a0a2c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #24 pc 00000000004f210c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libil2cpp.so (BuildId: 7bfa2e08384178cf1b7e860e9d18c76d98bb61e0)
      #25 pc 0000000000364830  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #26 pc 00000000003684c4  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #27 pc 00000000002a35ec  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #28 pc 00000000002bcfe0  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #29 pc 00000000002bd888  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #30 pc 00000000002b10c4  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #31 pc 00000000002b10f8  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #32 pc 00000000002b133c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #33 pc 00000000003e2324  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #34 pc 00000000003f813c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/lib/arm64/libunity.so (BuildId: 31a341a03ca2dee464204400f8411605ca6fbc93)
      #35 pc 000000000003ea3c  /data/app/~~nlNJHmJ8Zn8BprGxC4oa8Q==/com.kn.bikestunt3.racing.driving.games-5sNHXsggCCOj4KSou0huNA==/oat/arm64/base.odex
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libil2cpp
  at libunity
  at libunity
  at libunity
  at libunity
  at libunity
  at libunity
  at libunity
  `

let error_6 =
    `(float, float)(setVolume - libaudioclient.android::AudioTrack::setVolume
    java.lang.Error
    
    
    Exception java.lang.Error
    Exception java.lang.Error: FATAL EXCEPTION [UnityMain]
    Unity version     : 2020.3.38f1
    Device model      : Xiaomi M2101K6I
    Device fingerprint: Redmi/sweetinpro/sweetin:12/SKQ1.210908.001/V13.0.5.0.SKFINXM:user/release-keys
    Build Type        : Release
    Scripting Backend : IL2CPP
    ABI               : arm64-v8a
    Strip Engine Code : true
    
    Caused by: java.lang.Error: *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
    Version '2020.3.38f1 (8f5fde82e2dc)', Build type 'Release', Scripting Backend 'il2cpp', CPU 'arm64-v8a'
    Build fingerprint: 'Redmi/sweetinpro/sweetin:12/SKQ1.210908.001/V13.0.5.0.SKFINXM:user/release-keys'
    Revision: '0'
    ABI: 'arm64'
    Timestamp: 2022-09-08 09:22:13+0530
    pid: 27034, tid: 27058, name: Binder:27034_3  >>> com.kn.bikestunt3.racing.driving.games <<<
    uid: 10395
    signal 11 (SIGSEGV), code 1 (SEGV_MAPERR), fault addr 0x7148ad9010
        x0  000000000000e000  x1  000000715112bec8  x2  0000000000000050  x3  0000000000000003
        x4  0000007099f5ad20  x5  0000000000000000  x6  0000007165339000  x7  00000000028aeee8
        x8  0000007148ad9000  x9  b3cfb967dd9b44d6  x10 0000000000000000  x11 000000004c000000
        x12 000000004c000000  x13 000000000000002c  x14 0000007099f5c188  x15 0000e145e193e43f
        x16 00000071441e8a28  x17 0000007151325a18  x18 0000007039546000  x19 b400006f4bc1e400
        x20 b400006f4bc1e788  x21 00000000e000e000  x22 0000007099f5e000  x23 b40000709da72a80
        x24 0000007099f5e000  x25 b40000708eacf7c4  x26 0000000000000000  x27 000000000000699a
        x28 0000000000000000  x29 0000007099f5d670
        sp  0000007099f5c5e0  lr  00000071510fa23c  pc  00000071510fa244
    
    backtrace:
          #00 pc 0000000000094244  /system/lib64/libaudioclient.so (android::AudioTrack::setVolume(float, float)+512) (BuildId: 5fb4f64ace0e684a674edd6b4f2d0837)
      at libaudioclient.android::AudioTrack::setVolume (float, float)(setVolume:512)    
`

let error_7 =
    `[libunity.so]
SIGSEGV


  #00  pc 0x00000000005c6838  /apex/com.android.art/lib64/libart.so (art
  #00  pc 0x00000000005c6838  /apex/com.android.art/lib64/libart.so (art::FetchStackTraceVisitor::VisitFrame())
  #00  pc 0x000000000058d540  /apex/com.android.art/lib64/libart.so (void art::StackVisitor::WalkStack<(art::StackVisitor::CountTransitions)0>(bool))
  #00  pc 0x00000000005bfb24  /apex/com.android.art/lib64/libart.so (art::Thread::CreateInternalStackTrace(art::ScopedObjectAccessAlreadyRunnable const&) const)
  #00  pc 0x00000000004cf320  /apex/com.android.art/lib64/libart.so (art::Throwable_nativeFillInStackTrace(_JNIEnv*, _jclass*))
  #00  pc 0x000000000008a310  /apex/com.android.art/javalib/arm64/boot.oat (art_jni_trampoline)
  #00  pc 0x00000000001626d8  /apex/com.android.art/javalib/arm64/boot.oat (java.lang.Throwable.fillInStackTrace)
  #00  pc 0x00000000001fb210  /apex/com.android.art/javalib/arm64/boot.oat (java.lang.Error.<init> [DEDUPED])
  #00  pc 0x0000000000133564  /apex/com.android.art/lib64/libart.so (art_quick_invoke_stub)
  #00  pc 0x00000000001a97e8  /apex/com.android.art/lib64/libart.so (art::ArtMethod::Invoke(art::Thread*, unsigned int*, unsigned int, art::JValue*, char const*))
  #00  pc 0x000000000055d820  /apex/com.android.art/lib64/libart.so (art::JValue art::InvokeWithVarArgs<art::ArtMethod*>(art::ScopedObjectAccessAlreadyRunnable const&, _jobject*, art::ArtMethod*, std::__va_list))
  #00  pc 0x000000000055dce4  /apex/com.android.art/lib64/libart.so (art::JValue art::InvokeWithVarArgs<_jmethodID*>(art::ScopedObjectAccessAlreadyRunnable const&, _jobject*, _jmethodID*, std::__va_list))
  #00  pc 0x00000000003bec20  /apex/com.android.art/lib64/libart.so (art::JNI<false>::CallNonvirtualVoidMethodV(_JNIEnv*, _jobject*, _jclass*, _jmethodID*, std::__va_list))
  #00  pc 0x00000000003a16e4  /apex/com.android.art/lib64/libart.so (art::JNI<false>::NewObjectV(_JNIEnv*, _jclass*, _jmethodID*, std::__va_list))
  #00  pc 0x00000000003ccf30  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/lib/arm64/libunity.so
  #00  pc 0x00000000003ccd30  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/lib/arm64/libunity.so
  #00  pc 0x00000000003f8128  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/lib/arm64/libunity.so
  #00  pc 0x0000000000041a3c  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/oat/arm64/base.odex (art_jni_trampoline)
  #00  pc 0x000000000005d788  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/oat/arm64/base.odex (com.unity3d.player.UnityPlayer$e$1.handleMessage)
  #00  pc 0x0000000000688518  /system/framework/arm64/boot-framework.oat (android.os.Handler.dispatchMessage)
  #00  pc 0x000000000071b8ac  /system/framework/arm64/boot-framework.oat (android.os.Looper.loop)
  #00  pc 0x000000000005e3e8  /data/app/~~n30bu0sqC2nTp4hl4nJwAA==/com.kn.bikestunt3.racing.driving.games-u7YYIiUzAA9oHR0MJNOu9Q==/oat/arm64/base.odex (com.unity3d.player.UnityPlayer$e.run)
  #00  pc 0x0000000000133564  /apex/com.android.art/lib64/libart.so (art_quick_invoke_stub)
  #00  pc 0x00000000001a97e8  /apex/com.android.art/lib64/libart.so (art::ArtMethod::Invoke(art::Thread*, unsigned int*, unsigned int, art::JValue*, char const*))
  #00  pc 0x000000000055e374  /apex/com.android.art/lib64/libart.so (art::JValue art::InvokeVirtualOrInterfaceWithJValues<art::ArtMethod*>(art::ScopedObjectAccessAlreadyRunnable const&, _jobject*, art::ArtMethod*, jvalue const*))
  #00  pc 0x00000000005ad5c4  /apex/com.android.art/lib64/libart.so (art::Thread::CreateCallback(void*))
  #00  pc 0x00000000000db188  /apex/com.android.runtime/lib64/bionic/libc.so (__pthread_start(void*))
  #00  pc 0x000000000007a9d0  /apex/com.android.runtime/lib64/bionic/libc.so (__start_thread)

`