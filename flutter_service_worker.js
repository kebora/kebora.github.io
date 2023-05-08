'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cff38175b631d4fcaf5d240f0b87aa39",
".git/config": "1a2bcd794394e73675e03d4867577341",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e41dad2c55a3af570916d22da4431ce9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b06ceaf4db94e3c9917192f774a6a39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f87c52aad7b402329ae5e74114ae38c1",
".git/logs/refs/heads/main": "f87c52aad7b402329ae5e74114ae38c1",
".git/logs/refs/remotes/origin/main": "e71ef8b8e20acc1cb06dd96c72a87d3d",
".git/objects/09/71e4ebeae5e0eaa49f96429c7568116475ab86": "c72e72893fa536bbfb7d3ef19c83812a",
".git/objects/0a/06dd9c913cd36a614e44ff8cf96857a072dfac": "895462f3c3203c5125c8de518be0c31b",
".git/objects/0a/b89b55c245be0adc50c2fb2192e916eb73adea": "8eb91dcb63973d2312200aa0271f59ef",
".git/objects/0e/d1e9d957f63aab93848277d3793e5d507b42fb": "3556959c87f032d4c323caa93c2ebc82",
".git/objects/0f/840ef9c7fca7918fb5b8fc9a4dca6bbea2797e": "0d7153671582dc12dd68df528563904a",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/15/b4c64adcfa5c47738a819ceb62cea80e39b51a": "aef59f6e2c10e1b17727a4738b08228d",
".git/objects/15/deb8ea1c5bb5704f6ab51534c273820096fab5": "cca1a1dcec3dc35853b9a67925b8c299",
".git/objects/18/a574a17cb0a75975c6315fb4004ae1737829cd": "0193c70303416f67b5ddfa91caedaa96",
".git/objects/1d/180407b99df194a4398622ea8ee409039accca": "dc797fb1045aad1f7770d447d8e5c4d7",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/c7bd8e04efb61a56a29685e6c9d92379d5b0b2": "fedd7034a35431bcf190fb4f7a398064",
".git/objects/20/c7a7a2e9f5a55793f20b6755d22a7741f6cefa": "3af3a7b79b3966a678972ef8b4cd0fe6",
".git/objects/24/c21593c21b8800b307bd528e380910ca2625a6": "e472d9c7da6b8bc745f1789c6085e5ef",
".git/objects/32/fb9aa7263a05f459fab925e42057e24f323b70": "99d074942bf04fddd810382231de58af",
".git/objects/36/962681811392e9d91fdd79a0a3b8099ad5c839": "ffce51a4769e46a4c13fde2f02637bf5",
".git/objects/3a/904f16ce24658b7966c2848a2fa0073bc7e84e": "dfa8f075cd8a756836b767216e85db4a",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3f/e264b0a8c51d45b7d8a57f46493a4c729b4ae2": "ac2f64228c54b4cd98483ee8b7ea5f03",
".git/objects/40/29fec7b6725a533e8aa214bcb50f37200bddc3": "b8334b4c548fdaef665f5906bbe1735f",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/790db13032ab59bba09ec24bb14626c7b3c39e": "1aa30095da05077adec74059df583684",
".git/objects/4e/30d8e7263473cdd397354090e8fad88254fe98": "b832dba790afcb895ee8051952513836",
".git/objects/4f/98c4c8851163153cb1faf2aca12b104f55d5c3": "b1720ef5514793b218a1423b18b2b963",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/58/dbd497c935fbf1753d7176a30486fafb3fb2f8": "ea4d0c7824bd05e9cbddc904e180c7f5",
".git/objects/59/8564dbfb87704eea07c2a67249350700ea720a": "0c30d366136b8eabffc1813bebf89320",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/f11e705cf5323012d270d03cb68c3b6fe48d20": "ccdfe2c5cd4fb71159e5b63541e82656",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/32cd1e41a14946ce2e4f98ce45392399a16786": "a9bb1271d3f4c394d013876e871eaa2d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/0e293db2cc1de73299b4e1dcd2f4a7b8ca83c4": "a3bbbc397385e14314b6b7ad93051318",
".git/objects/63/e1a3c61ced9a866b07b9b6830deb0ec851e7c7": "180023546f8431c7b72e8e9c5d3fe068",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/69/28a6ba570559bad01083d4c5ca8e6ce4e0cd2c": "41165059a3ff1db43ab42dba22013dcc",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6d/e87a8c3f655a02f7150ae26a0612f81b1e9d32": "245f676a250f9e1e02fb21b20f0f0fda",
".git/objects/6e/69c14c5fffab41be1b3c2ef9af2e314d9c9935": "6004cbda8c967b5eb92129b01aa53203",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/71/cbd0c8806b736b9e3c84b3a8c11caf63db9433": "8fce728c3531f64e513327e42882f95b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/0249b78391b0f0ef0275bdff667aaf6d1ae059": "6a7e1146cc132ac2a6ba19546096d508",
".git/objects/77/ccc90795e35dedbdbf12c21370b285ad8cdea7": "be2177a6a3c4dd99d29ec6c5f558535e",
".git/objects/7d/7ff069fe5ae27b23b860ab2811efcc15fa63a0": "6f2f5d5e82f854dd017eb9f29d56eee2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a9c77b4bf765ad041e0df3dfab2cae325df795": "eddb1075fc0123e9d47c8cbeca6342aa",
".git/objects/8a/787b78972d61c5edab4e520735c43f518514d5": "d5a1cc9d8533e8c29d1202d561bac1c2",
".git/objects/8d/866ce9eeac1acff88b85c6a5e51de4c4a00099": "af1fd7b59fe56309b6f47a06e794c547",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/623ef4b4d90a62b718eb330525192d04db7648": "bd2f508cf1502966ec88613f83b48496",
".git/objects/9f/2b942bcb829e494a2a2eb7b0405382fe5d344d": "f2c3efc26c766d5c1217501e4cf60a73",
".git/objects/a1/94b9ba50ba868bd36e9e80802ed3267995833a": "09c06e56a74460d190ead1728e5c9a60",
".git/objects/a5/06b7e983f180fe6551137af6c67570943be83e": "1eef2eea78245453244ba692cfa75c7b",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/f24f5d0b3544140a88c1b22c0b90d7898794ea": "b5ee12df2fdf391fdb2822ac763f402c",
".git/objects/ab/f0648db834a28d6480675966e0cbca858864e6": "eb28456d35e9aa80436c11362f40a420",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dc976ae03a6226f36a31b73b317926b48314f6": "202140d0a1bd0669b4caf091e06df070",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/7c54f3e23e5fbda50d2167307ff239c9c16165": "9fc97e34d67f6f422cf3282fd26864cd",
".git/objects/c7/8022a1c6bcb7a69765e1f50976e971a9558d4f": "031929401b80c64c55d8f5e311aa3f32",
".git/objects/c8/54b8e14c9ef330e141c03d8600f85244cdbcb9": "e8eae954ce966bd7e413deae5f6c0e26",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d1/afa353e6b397ec7b616974277c9740ef4d7f5f": "fab1ab53827eb1f4325b2d761559b999",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/caed0991d23d9ca04f335b424b15da2b9e6ec8": "ab8217d9bd4ff4f73f93068a180c67f6",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/6b202f3aa9bc458139a697685f20cce2ecad23": "48621bebb099777aecc8fb4d19e17f30",
".git/objects/db/6fe230a33743a282ba2c07d99e8f81166e2342": "97641ca81fa8f00970a533f8d135ee5b",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/e1/cceec890fb5cbc1a07288103e0ca5b0a13daf6": "fda389cbd19a83b03579b389703eaef6",
".git/objects/e5/41fc8c3f6fa866f03aacf7b6e17116015599f1": "275bf8d9b64e36d46c953916733d2cdc",
".git/objects/e8/457398348b597da3ebe1cc10761ccd64c5d0d8": "78a838c9efef324685112eaaa8059c84",
".git/objects/e8/952edf8c67ce730fc4f018cb0d5d36da42a255": "35aa674ff250bc7e39a8680b8e26b054",
".git/objects/ea/b0253c3a9c1d1ad086d8c857ad721192240f99": "dafeae820a22e2f0b1ddb162b53ea417",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/5f235316e793d38026dfb66bdc26f4394ac085": "b9fd6f3ad337bf20385f6f6a907df81d",
".git/objects/f6/ab2223f226935e4350cea087c830df25e1224c": "ad4e5454f1bcc902c75ae67f1deb2527",
".git/objects/f7/82eaa8a3153a7c3aa270a6afa34c4dfc16bdf2": "0cde6514de452df23dcf3b7cc406741c",
".git/objects/f8/fbbfeac32e534eb07e0852d4ca4b7cd2270f39": "606b97fb2aba0ad06877f1de6e9b760f",
".git/objects/f9/f6c1c91700999f70302f835d93c1b81833e877": "5f3d076736dee31411f6697fef9c2f93",
".git/objects/fa/d0a8eee89d254461c22c17beafa2f97ff310dd": "740495a866ddb42b66ead8c80b78a994",
".git/objects/fd/8cf2464df7cd3710dad72f2728d60c6a68084f": "c72cb2f5cf7dcd50c395a4ea74185e79",
".git/objects/fd/92994a5acef97ea566781d61c05ee5972c9ec9": "cde366e6b792b3e48459a5d7bf2a3475",
".git/objects/fd/c085f23b99320d58072e1641f6ab085452ebef": "6602dc894c31d4ebbe26efa63f431060",
".git/objects/fe/dd6c8b87f496283f50bec589cfee34f5634d66": "6556bb2f9b72f74768b478d3800e849e",
".git/ORIG_HEAD": "7c317aa1383ccaf7dc728fd2aeaa4b60",
".git/refs/heads/main": "7c317aa1383ccaf7dc728fd2aeaa4b60",
".git/refs/remotes/origin/main": "7c317aa1383ccaf7dc728fd2aeaa4b60",
"assets/AssetManifest.bin": "7ff5068d99a55543907738572f04a83c",
"assets/AssetManifest.json": "4b74527a2f4d69cd8e705dfa6362e353",
"assets/assets/fonts/Montserrat-Black.ttf": "976649f5b0b109bfc06c008372d90094",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "bf087000dc560f8f2a318d4ddad4720f",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "324a0e0cec3a73b38b58703bc5747b17",
"assets/assets/fonts/Montserrat-Italic.ttf": "2e79685963d89831a0878b5fe44ce9b5",
"assets/assets/fonts/Montserrat-Light.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/fonts/Montserrat-Medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/NovaOval-Regular.ttf": "9d34fd08d90b4d6b47c34937a27dcf0c",
"assets/assets/fonts/PermanentMarker-Regular.ttf": "a7d455d6ad24caf420a0693f5fe28fa7",
"assets/assets/images/api1.png": "e9c7ccfa4d6a91c2b7a8dd0c6c75f1b0",
"assets/assets/images/gsd.png": "ff2c97b19fa2473c88abee238342805b",
"assets/assets/images/loading_clock.riv": "0e85b11b2c7b151325032084677a340e",
"assets/assets/images/mav_ft.png": "0a6cbf2fcec510f06f1bee6f639fa066",
"assets/assets/images/mav_gsd.png": "217b41b8be40197b93ac0efa2fdf96f8",
"assets/assets/images/mav_news.png": "71e01e41af370b16945026f6e5d149ed",
"assets/assets/images/mav_news2.png": "29e11b2c682b8812d06d7e0eab2ceab9",
"assets/assets/images/portrait.svg": "0e4b8bc7aa5224424f7853741200c8bb",
"assets/assets/images/sesc.png": "acc93b742ecad69affdaaebbe5aff522",
"assets/assets/images/wav_dentcreatives.png": "bfd8182becf4cf18ac01fd3ef5dda446",
"assets/assets/images/wav_portfolio.png": "b10fad6361a2f4e005281cad78de10aa",
"assets/FontManifest.json": "ec50abcdcc754de8126fb95773d473b7",
"assets/fonts/MaterialIcons-Regular.otf": "eb7ce14f6ce94d3850732dca2c251243",
"assets/NOTICES": "32cae6433668ba37f5537ccfba2374ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "08f22b1287f0ff8b17ee37e8eac578ad",
"canvaskit/canvaskit.wasm": "44073ee47bbc21c09bc956d32b79a671",
"canvaskit/chromium/canvaskit.js": "54cf03846c02e4e23488538580e7db2b",
"canvaskit/chromium/canvaskit.wasm": "b861fcb2d35cd2ecc3fd3dc2b2ec31aa",
"canvaskit/skwasm.js": "13e994e6ad2a86d2312d8f6ecbe0cf52",
"canvaskit/skwasm.wasm": "eea31eb13fe50731f4f016cad706167a",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "a827c0461a07fb09db17cee715a33eff",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "38bd1f47d460b873b4e0ca0aef3248fb",
"/": "38bd1f47d460b873b4e0ca0aef3248fb",
"main.dart.js": "89db61ead3ce4d476a0e0995556f9f4f",
"manifest.json": "cc2e96c3da56a63cd75ff248335d5cf7",
"version.json": "62011b3cf4966769a962204fcd839f68"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
