﻿// t.me/andraz404 | AirdropFamilyIDN x boterdrop
const _0x63a032=_0x4e32;function _0x4e32(_0x58a03f,_0xe223cc){const _0x14a01f=_0x14a0();return _0x4e32=function(_0x4e32f1,_0x4d181b){_0x4e32f1=_0x4e32f1-0x18e;let _0x4d0036=_0x14a01f[_0x4e32f1];return _0x4d0036;},_0x4e32(_0x58a03f,_0xe223cc);}(function(_0x1df82d,_0x12d7fe){const _0x388e2=_0x4e32,_0x5c89fe=_0x1df82d();while(!![]){try{const _0x17df85=-parseInt(_0x388e2(0x198))/0x1*(parseInt(_0x388e2(0x1e4))/0x2)+parseInt(_0x388e2(0x1be))/0x3*(parseInt(_0x388e2(0x19f))/0x4)+parseInt(_0x388e2(0x1af))/0x5+-parseInt(_0x388e2(0x19b))/0x6*(parseInt(_0x388e2(0x193))/0x7)+parseInt(_0x388e2(0x1d9))/0x8*(parseInt(_0x388e2(0x1b2))/0x9)+-parseInt(_0x388e2(0x1c3))/0xa+parseInt(_0x388e2(0x1c2))/0xb*(-parseInt(_0x388e2(0x1c7))/0xc);if(_0x17df85===_0x12d7fe)break;else _0x5c89fe['push'](_0x5c89fe['shift']());}catch(_0x217d38){_0x5c89fe['push'](_0x5c89fe['shift']());}}}(_0x14a0,0xaf2fa));const axios=require(_0x63a032(0x1c1)),fs=require('fs'),path=require(_0x63a032(0x1b0)),querystring=require(_0x63a032(0x1ba)),readline=require(_0x63a032(0x1bf)),hashFilePath=path[_0x63a032(0x1b1)](__dirname,_0x63a032(0x1c8)),baseURL='https://api-yield-pass.masterprotocol.xyz',askForLicense=()=>{const _0x3ebffe=_0x63a032,_0x622de0=readline[_0x3ebffe(0x1c6)]({'input':process[_0x3ebffe(0x1da)],'output':process['stdout']});return new Promise(_0x47cc85=>{const _0x35d36d=_0x3ebffe;_0x622de0['question'](_0x35d36d(0x19c),_0x40b7ee=>{const _0x5f2472=_0x35d36d;_0x622de0[_0x5f2472(0x1a7)](),_0x47cc85(_0x40b7ee[_0x5f2472(0x191)]());});});},validateLicense=async()=>{const _0x252709=_0x63a032,_0x1c220b=_0x252709(0x192);while(!![]){const _0x5a2934=await askForLicense();return _0x5a2934===_0x1c220b?(console['log']('License\x20valid\x20Ganteng'),!![]):(console[_0x252709(0x1d8)](_0x252709(0x1b7)),![]);}},readHashFile=()=>{const _0x331ce4=_0x63a032,_0x5aa37d=fs[_0x331ce4(0x1a9)](hashFilePath,_0x331ce4(0x1a2));return _0x5aa37d[_0x331ce4(0x199)]('\x0a')[_0x331ce4(0x1cd)](_0x4cbeb4=>_0x4cbeb4['trim']())['map'](_0x2fc29d=>{const _0x243fab=_0x331ce4,_0x266244=querystring[_0x243fab(0x1c9)](_0x2fc29d[_0x243fab(0x1de)]('\x0d',''));return{'webInitdata':{'user':JSON[_0x243fab(0x1c9)](decodeURIComponent(_0x266244[_0x243fab(0x1d5)])),'chat_instance':_0x266244[_0x243fab(0x1d7)],'chat_type':_0x266244[_0x243fab(0x1a5)],'auth_date':_0x266244[_0x243fab(0x1e1)],'hash':_0x266244[_0x243fab(0x1c5)]}};});},getToken=async _0x3b274d=>{const _0x105c71=_0x63a032,_0x579c9a=await axios[_0x105c71(0x1e2)](baseURL+_0x105c71(0x190),_0x3b274d,{'headers':{'Content-Type':_0x105c71(0x1a8),'User-Agent':_0x105c71(0x195),'Origin':'https://miniapp-social.masterprotocol.xyz','X-Requested-With':_0x105c71(0x1b6)}});return _0x579c9a[_0x105c71(0x18e)][_0x105c71(0x1d3)];},cekEnergi=async _0x5bca1e=>{const _0x2226ba=_0x63a032,_0x147c00=await axios['get'](baseURL+_0x2226ba(0x1c0),{'headers':{'Authorization':_0x2226ba(0x18f)+_0x5bca1e,'User-Agent':_0x2226ba(0x195),'Origin':_0x2226ba(0x1ae),'X-Requested-With':_0x2226ba(0x1b6)}});return _0x147c00['data'];},startGame=async _0x3bc1e5=>{const _0xa48b25=_0x63a032;try{const _0x3c8b8d=await axios[_0xa48b25(0x1e2)](baseURL+_0xa48b25(0x1b3),{},{'headers':{'Authorization':_0xa48b25(0x18f)+_0x3bc1e5,'Content-Type':_0xa48b25(0x1a8),'User-Agent':_0xa48b25(0x195),'Origin':_0xa48b25(0x1ae),'X-Requested-With':_0xa48b25(0x1b6)}});return _0x3c8b8d['data'][_0xa48b25(0x1a3)];}catch(_0x2a43ba){if(_0x2a43ba[_0xa48b25(0x1c4)]&&_0x2a43ba[_0xa48b25(0x1c4)][_0xa48b25(0x1bd)]===0x190&&_0x2a43ba['response'][_0xa48b25(0x18e)][_0xa48b25(0x1ab)]===_0xa48b25(0x1d4))console[_0xa48b25(0x1d8)](_0xa48b25(0x19e)),delay(0xbb8);else throw _0x2a43ba;}},endGame=async(_0x53bc75,_0x2127d8,_0x1ef8ad)=>{const _0x31f796=_0x63a032,_0x4d5d24=await axios[_0x31f796(0x1e2)](baseURL+_0x31f796(0x1df),{'gameId':_0x2127d8,'score':_0x1ef8ad},{'headers':{'Authorization':_0x31f796(0x18f)+_0x53bc75,'Content-Type':'application/json','User-Agent':_0x31f796(0x195),'Origin':_0x31f796(0x1ae),'X-Requested-With':_0x31f796(0x1b6)}});return _0x4d5d24[_0x31f796(0x18e)];},infoUser=async _0x439073=>{const _0xb95b09=_0x63a032,_0x4c9995=await axios[_0xb95b09(0x1e3)](baseURL+_0xb95b09(0x1cb),{'headers':{'Authorization':_0xb95b09(0x18f)+_0x439073,'User-Agent':_0xb95b09(0x195),'Origin':_0xb95b09(0x1ae),'X-Requested-With':_0xb95b09(0x1b6)}});return _0x4c9995[_0xb95b09(0x18e)];},taskListProtocolId=async _0x4b86d3=>{const _0x12b376=_0x63a032,_0x4b60bc=await axios['get'](baseURL+_0x12b376(0x1d2),{'headers':{'Authorization':'Bearer\x20'+_0x4b86d3,'User-Agent':_0x12b376(0x195),'Origin':_0x12b376(0x1ae),'X-Requested-With':_0x12b376(0x1b6)}});return _0x4b60bc[_0x12b376(0x18e)];},taskListId=async(_0x48bef3,_0x590a25)=>{const _0x5b2e33=_0x63a032,_0x1dcb9f=await axios['get'](baseURL+_0x5b2e33(0x1a1)+_0x590a25,{'headers':{'Authorization':_0x5b2e33(0x18f)+_0x48bef3,'User-Agent':'Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SM-N976N\x20Build/QP1A.190711.020;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/92.0.4515.131\x20Mobile\x20Safari/537.36','Origin':_0x5b2e33(0x1ae),'X-Requested-With':_0x5b2e33(0x1b6)}});return _0x1dcb9f['data']['filter'](_0x5c0e4c=>!_0x5c0e4c[_0x5b2e33(0x1b8)]);},prosesTask=async(_0x2a018c,_0x55241e)=>{const _0x303c2e=_0x63a032,_0x27ec65=await axios[_0x303c2e(0x1e2)](baseURL+_0x303c2e(0x1dc)+_0x55241e,{},{'headers':{'Authorization':_0x303c2e(0x18f)+_0x2a018c,'Content-Type':_0x303c2e(0x1a8),'User-Agent':_0x303c2e(0x195),'Origin':_0x303c2e(0x1ae),'X-Requested-With':_0x303c2e(0x1b6)}});return _0x27ec65['data'];},delay=_0x218c0a=>new Promise(_0x2fa5d0=>setTimeout(_0x2fa5d0,_0x218c0a));function formatTime(_0x1bf8ad){const _0x22e92e=_0x63a032,_0x5348af=Math[_0x22e92e(0x1d6)](_0x1bf8ad/0x3e8),_0x1fdde1=String(Math[_0x22e92e(0x1d6)](_0x5348af/0xe10))[_0x22e92e(0x1e0)](0x2,'0'),_0x5cdcce=String(Math[_0x22e92e(0x1d6)](_0x5348af%0xe10/0x3c))[_0x22e92e(0x1e0)](0x2,'0'),_0x54a4cd=String(_0x5348af%0x3c)['padStart'](0x2,'0');return _0x1fdde1+':'+_0x5cdcce+':'+_0x54a4cd;}async function countdown(_0x4948f5){const _0x244ee6=_0x63a032;let _0x3db9f2=_0x4948f5;const _0x330008=['.','!','?'];let _0x23d77c=0x0;while(_0x3db9f2>0x0){process[_0x244ee6(0x1dd)][_0x244ee6(0x1bb)](_0x244ee6(0x1a0)+_0x330008[_0x23d77c]+'\x1b[0m\x20]\x20Countdown:\x20'+formatTime(_0x3db9f2)),await delay(0x64),_0x3db9f2-=0x64,_0x23d77c=(_0x23d77c+0x1)%_0x330008[_0x244ee6(0x1db)];}process[_0x244ee6(0x1dd)]['write'](_0x244ee6(0x1ce)),console['log']('');}const processAccount=async(_0x29a9ed,_0x4116d7)=>{const _0x24710c=_0x63a032;console[_0x24710c(0x1d8)](_0x24710c(0x1b5)+(_0x4116d7+0x1)+_0x24710c(0x1ac));const _0x46bd6b=await getToken(_0x29a9ed),_0x236c85=await taskListProtocolId(_0x46bd6b);for(const _0x370170 of _0x236c85){const _0x2a8e5e=await taskListId(_0x46bd6b,_0x370170[_0x24710c(0x1a4)]);for(const _0x3d9822 of _0x2a8e5e){const _0x2d3b44=await prosesTask(_0x46bd6b,_0x3d9822['id']);console['log'](_0x24710c(0x1cf)+_0x2d3b44[_0x24710c(0x1aa)]+'\x1b[0m\x20|\x20Status:\x20\x1b[32m'+_0x2d3b44[_0x24710c(0x1bd)]+_0x24710c(0x196)+_0x2d3b44[_0x24710c(0x1ca)]+_0x24710c(0x1ac));}}while(!![]){const _0x5e3bdc=await cekEnergi(_0x46bd6b);console[_0x24710c(0x1d8)](_0x24710c(0x1d1)+_0x5e3bdc+_0x24710c(0x1ac));if(_0x5e3bdc<=0x0)break;const _0xedbeae=await startGame(_0x46bd6b);if(!_0xedbeae)break;console[_0x24710c(0x1d8)](_0x24710c(0x1b4)),console[_0x24710c(0x1d8)](_0x24710c(0x194)+_0xedbeae+_0x24710c(0x1ac)),console['log']('[\x20\x1b[33m?\x1b[0m\x20]\x20Delay\x2020\x20Detik'),await delay(0x4e20);const _0x45e752=Math[_0x24710c(0x1d6)](Math[_0x24710c(0x1b9)]()*(0x12c-0x118+0x1))+0x118,_0x96623c=await endGame(_0x46bd6b,_0xedbeae,_0x45e752);console['log'](_0x24710c(0x1ad)+_0x96623c[_0x24710c(0x1a6)]+'\x1b[0m');}const _0x19a334=await infoUser(_0x46bd6b);console[_0x24710c(0x1d8)](''),_0x19a334[_0x24710c(0x1d0)](_0x29315c=>{const _0x1cef0e=_0x24710c;console[_0x1cef0e(0x1d8)]('[\x20\x1b[33m?\x1b[0m\x20]\x20'+_0x29315c[_0x1cef0e(0x19d)]+_0x1cef0e(0x19a)+_0x29315c[_0x1cef0e(0x1bc)]+_0x1cef0e(0x1ac));});},asciiArt='\x0a\x20_____\x20\x20\x20\x20\x20\x20\x20\x20\x20_\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_____\x20\x20\x20\x20\x20\x20\x20\x20\x20_\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_\x20\x0a|\x20\x20\x20\x20\x20|___\x20___|\x20|_\x20___\x20___|\x20\x20_\x20\x20|___\x20___|\x20|_\x20___________|\x20|\x0a|\x20|\x20|\x20|\x20.\x27|_\x20-|\x20\x20_|\x20-_|\x20\x20_|\x20\x20\x20__|\x20\x20_|\x20.\x20|\x20\x20_|\x20.\x20|\x20\x20_|\x20.\x20|\x20|\x0a|_|_|_|__,|___|_|\x20|___|_|\x20|__|\x20\x20|_|\x20|___|_|\x20|___|___|___|_|\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x1b[33mv1.0\x20|\x20AirdropFamilyIDN\x1b[0m\x0a',main=async()=>{const _0x2ef115=_0x63a032;console[_0x2ef115(0x1d8)](asciiArt);const _0x113313=await validateLicense();if(!_0x113313){console['log']('Minimal\x20baca\x20post\x20channel');return;}const _0x24b5f0=readHashFile();while(!![]){for(let _0x1fdec2=0x0;_0x1fdec2<_0x24b5f0[_0x2ef115(0x1db)];_0x1fdec2++){await processAccount(_0x24b5f0[_0x1fdec2],_0x1fdec2);}console['log'](''),await countdown(0x1*0x3c*0x3c*0x3e8+0x2710);}};main()[_0x63a032(0x1cc)](console[_0x63a032(0x197)]);function _0x14a0(){const _0x51ce1f=['1137192ngkwRN','hash.txt','parse','pointsRewarded','/miniApp/api/v1/user/info','catch','filter','\x0d[\x20\x1b[32m!\x1b[0m\x20]\x20Countdown\x20Selesai','[\x20\x1b[32m!\x1b[0m\x20]\x20Task:\x20\x1b[32m','forEach','\x0a[\x20\x1b[33m?\x1b[0m\x20]\x20Energi\x20\x1b[33m','/miniApp/api/v1/task/all','token','User\x20is\x20not\x20channel\x20member','user','floor','chat_instance','log','496368yEiALD','stdin','length','/miniApp/api/v1/task/complete/','stdout','replace','/miniApp/api/v1/clicker-game/end','padStart','auth_date','post','get','2grOIYI','data','Bearer\x20','/miniApp/api/v1/auth/signin','trim','Gusryan','186410GjuQIR','[\x20\x1b[33m?\x1b[0m\x20]\x20ID\x20Game:\x20\x1b[33m','Mozilla/5.0\x20(Linux;\x20Android\x207.1.2;\x20SM-N976N\x20Build/QP1A.190711.020;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/92.0.4515.131\x20Mobile\x20Safari/537.36','\x1b[0m\x20|\x20Reward:\x20\x1b[32m','error','1207939RWCvLQ','split','\x20:\x20\x1b[33m','114IphsIY','\x0aMasukan\x20license\x20:\x20','category','[\x20\x1b[31m!\x1b[0m\x20]\x20Join\x20Channel\x20https://t.me/MasterProtocol_News\x20Dulu','4lqlZJW','\x0d[\x20\x1b[33m','/miniApp/api/v1/task/list?protocolId=','utf8','gameId','protocolId','chat_type','score','close','application/json','readFileSync','taskId','message','\x1b[0m','[\x20\x1b[32m!\x1b[0m\x20]\x20Score:\x20\x1b[32m','https://miniapp-social.masterprotocol.xyz','6704375ZyQTpD','path','join','117OxiJve','/miniApp/api/v1/clicker-game/start','[\x20\x1b[32m!\x1b[0m\x20]\x20\x1b[32mStart\x20Game\x1b[0m','\x0a[\x20\x1b[32m!\x1b[0m\x20]\x20\x1b[32mLogin\x20Akun\x20ke-','org.telegram.messenger','License\x20Tidak\x20Valid\x20Baca\x20postingan\x20Channel!','completed','random','querystring','write','totalPoints','status','3883998xInaXj','readline','/miniApp/api/v1/clicker-game/energy','axios','11nKMTOf','9159020SCKaJt','response','hash','createInterface'];_0x14a0=function(){return _0x51ce1f;};return _0x14a0();}
