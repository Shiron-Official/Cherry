module.exports.info = {
	name: "resend",
    version: "1.0.1",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Gửi lại cấc tin nhắn mà thành viên đã gỡ (Điều kiện tin nhắn đó nằm trong phiên hoạt động của Bot)",
        short: "Resend"
    },
	group: "Tools",
	guide: [
		'',
	],
	countdown: 5,
    hide: true,
    require: {
        "fs-extra": "",
        "path": ""
    },
    configs: {
        status: true,
        ID: '4127643970650750',
        banned: []
    }
};

module.exports.onLoad = function() {
    const { join } = require("path");
    const { mkdirSync, existsSync } = require('fs-extra')
    var path = join(__dirname, "cache");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
    return;
}

module.exports.handleEvents = async function ({ event, api, Cherry, Users }) {
    function _0x347a(){var _0x23310e=['760323rsyWnR','208056EemcYO','logMessage','body','UAsLu','set','Nội\x20dung:\x20','type','sendMessag','video','kèm.','downloadFi','status','\x20vừa\x20gỡ\x20','attachment','.mp4','\x20tệp\x20đính\x20','message_un','RecSu','banned','322294lDujYE','UserID','push','\x20đã\x20gỡ\x201\x20t','toString','/cache/','215451sQzVZv','51412swvswb','(((.+)+)+)','in\x20nhắn.\x0a\x0a','.png','fs-extra','search','send','msgBody','getCurrent','1013145AVDjkA','length','35KIdnzf','constructo','apply','name','9rryesv','.mp3','photo','3615648gHAPaL'];_0x347a=function(){return _0x23310e;};return _0x347a();}function _0x5877a5(_0x34bdcd,_0x848c91,_0x3c26a8,_0x18b743){return _0x2f16(_0x3c26a8-0x37d,_0x848c91);}(function(_0x52592b,_0x54062f){var _0x47bdfd=_0x52592b();function _0x391a33(_0x1fe18f,_0x593813,_0x59f72a,_0x2f2667){return _0x2f16(_0x593813- -0x3ca,_0x59f72a);}function _0x815aa(_0x3ac291,_0x521baf,_0x14ea64,_0x47ef0a){return _0x2f16(_0x14ea64- -0x91,_0x3ac291);}while(!![]){try{var _0x48923c=parseInt(_0x815aa(0x140,0x134,0x130,0x13f))/(-0x19*-0xd2+-0x22f0+0xe6f)+parseInt(_0x815aa(0x141,0x136,0x12a,0x117))/(-0x1*0x16b4+0xade+0x2*0x5ec)+parseInt(_0x815aa(0x115,0xff,0x116,0x12d))/(0xa0b+-0x1203+0x7fb)+parseInt(_0x815aa(0x147,0x12c,0x131,0x139))/(-0x17*-0x89+-0x12f3+0x6a8)*(parseInt(_0x391a33(-0x212,-0x1fd,-0x1f2,-0x205))/(0x2*0x10b1+0x12df+0x343c*-0x1))+parseInt(_0x391a33(-0x235,-0x222,-0x20f,-0x21d))/(-0x2cc+0x8c8*0x1+0xda*-0x7)+-parseInt(_0x391a33(-0x213,-0x1ff,-0x209,-0x1eb))/(-0x1ddc+-0x1*0xc19+0x29fc*0x1)+-parseInt(_0x391a33(-0x230,-0x224,-0x23a,-0x22f))/(0x2fc+0x2241+-0x2535*0x1)*(parseInt(_0x815aa(0x105,0x102,0x112,0x10b))/(-0x13a3+0xbd2+0x3ed*0x2));if(_0x48923c===_0x54062f)break;else _0x47bdfd['push'](_0x47bdfd['shift']());}catch(_0x5df644){_0x47bdfd['push'](_0x47bdfd['shift']());}}}(_0x347a,-0x13759*-0x1+0x2d63c+-0x1a46a));function _0x26b696(_0x32e37c,_0x43d87b,_0x558b04,_0x5f435b){return _0x2f16(_0x43d87b-0x153,_0x558b04);}var _0x1aa304=(function(){var _0xb4dc0a=!![];return function(_0x4056fc,_0x3eab17){var _0x2126f6=_0xb4dc0a?function(){function _0x3b6fca(_0x1f5916,_0x22dcfc,_0x3b7e52,_0xe5c20c){return _0x2f16(_0xe5c20c-0x24a,_0x1f5916);}if(_0x3eab17){var _0x37de2f=_0x3eab17[_0x3b6fca(0x3f4,0x3eb,0x3ed,0x3eb)](_0x4056fc,arguments);return _0x3eab17=null,_0x37de2f;}}:function(){};return _0xb4dc0a=![],_0x2126f6;};}()),_0x425d6c=_0x1aa304(this,function(){var _0x138306={};function _0x262c00(_0x4a31e2,_0x402d2e,_0x11449b,_0x41866d){return _0x2f16(_0x11449b-0x338,_0x41866d);}_0x138306['UAsLu']=_0x262c00(0x509,0x507,0x4fb,0x4ee)+'+$';var _0x9d26e4=_0x138306;function _0x195e01(_0x2cfd15,_0x3e2550,_0x2cbac5,_0x5efc2c){return _0x2f16(_0x2cbac5-0x2ac,_0x2cfd15);}return _0x425d6c[_0x262c00(0x4e2,0x50c,0x4f7,0x4f9)]()[_0x262c00(0x501,0x4e9,0x4ff,0x4ee)](_0x9d26e4[_0x195e01(0x45a,0x46d,0x457,0x46d)])[_0x262c00(0x4ea,0x4f6,0x4f7,0x4fb)]()[_0x262c00(0x4c1,0x4d2,0x4d8,0x4dd)+'r'](_0x425d6c)[_0x195e01(0x485,0x478,0x473,0x488)]('(((.+)+)+)'+'+$');});_0x425d6c();const {createReadStream,unlinkSync}=require(_0x5877a5(0x54e,0x530,0x543,0x536));var {messageID,threadID,senderID,body,attachments}=event,{resend}=Cherry['configs'];if(resend[_0x26b696(0x301,0x306,0x2f3,0x303)]==![]||senderID==api[_0x5877a5(0x553,0x536,0x547,0x533)+_0x5877a5(0x52b,0x54a,0x539,0x52c)]()||resend[_0x26b696(0x303,0x30d,0x318,0x324)]['includes'](threadID))return;function _0x2f16(_0x1007c8,_0x440fc4){var _0x568c25=_0x347a();return _0x2f16=function(_0xe79279,_0x1c0a34){_0xe79279=_0xe79279-(0x4*-0x7f+-0x2082+-0x241e*-0x1);var _0x4d62db=_0x568c25[_0xe79279];return _0x4d62db;},_0x2f16(_0x1007c8,_0x440fc4);}if(!Cherry[_0x26b696(0x2eb,0x2fc,0x2ed,0x2f4)])Cherry[_0x26b696(0x2ec,0x2fc,0x2f4,0x2f5)]=new Map();if(event[_0x26b696(0x2f1,0x301,0x2f2,0x30b)]!=_0x26b696(0x30f,0x30b,0x302,0x2f7)+_0x5877a5(0x543,0x53b,0x545,0x54e)){var _0x1a8335={};_0x1a8335[_0x5877a5(0x556,0x53e,0x546,0x537)]=body,_0x1a8335[_0x5877a5(0x52f,0x53f,0x532,0x52b)]=attachments?attachments:'',Cherry[_0x26b696(0x311,0x2fc,0x30c,0x30a)][_0x5877a5(0x539,0x51b,0x529,0x535)](messageID,_0x1a8335);}if(event[_0x5877a5(0x51c,0x51d,0x52b,0x51f)]==_0x26b696(0x321,0x30b,0x31e,0x314)+'send'){var getMsg=Cherry[_0x5877a5(0x524,0x52a,0x526,0x518)]['get'](messageID);if(!getMsg)return;let name=(await Users['getData'](senderID))[_0x26b696(0x2e3,0x2f5,0x305,0x306)];if(getMsg['attachment'][_0x26b696(0x325,0x31f,0x32f,0x317)]==-0x1504+-0x1771+-0x257*-0x13)return api[_0x5877a5(0x51e,0x53d,0x52c,0x528)+'e'](name+(_0x26b696(0x324,0x311,0x30f,0x314)+_0x5877a5(0x551,0x532,0x541,0x553)+_0x5877a5(0x520,0x52e,0x52a,0x538))+getMsg[_0x5877a5(0x54a,0x556,0x546,0x557)],resend['ID']);var _0x2e94a6={};_0x2e94a6[_0x26b696(0x2fe,0x2fd,0x2e7,0x311)]=name+_0x5877a5(0x53c,0x52f,0x531,0x53b)+getMsg[_0x5877a5(0x51c,0x532,0x532,0x539)][_0x5877a5(0x552,0x55a,0x549,0x54d)]+(_0x26b696(0x2f5,0x30a,0x306,0x312)+_0x5877a5(0x535,0x52e,0x52e,0x527)),_0x2e94a6[_0x5877a5(0x53e,0x533,0x532,0x537)]=[];var msg=_0x2e94a6,path=[],number=0x11*-0x1c7+-0x1dad+-0x4*-0xef9;for(var i of getMsg[_0x5877a5(0x533,0x51b,0x532,0x539)]){number++;switch(i['type']){case _0x5877a5(0x528,0x536,0x522,0x523):var fileType=_0x26b696(0x326,0x318,0x314,0x32a);break;case'audio':var fileType=_0x5877a5(0x515,0x52e,0x521,0x514);break;case _0x5877a5(0x533,0x533,0x52d,0x516):var fileType=_0x5877a5(0x521,0x536,0x533,0x549);break;default:continue;}var filePath=__dirname+_0x5877a5(0x52b,0x545,0x53d,0x537)+threadID+'_'+senderID+'_'+number+fileType;await Cherry[_0x5877a5(0x53c,0x540,0x52f,0x531)+'le'](''+i['url'],filePath),msg[_0x5877a5(0x51f,0x531,0x532,0x533)]['push'](createReadStream(filePath)),path[_0x5877a5(0x524,0x551,0x53a,0x527)](filePath);}return api[_0x5877a5(0x537,0x537,0x52c,0x533)+'e'](msg,resend['ID'],()=>{function _0x7d21aa(_0x1aff2b,_0x58b3d2,_0x58c96f,_0x3a627e){return _0x26b696(_0x1aff2b-0xcf,_0x58c96f-0x277,_0x1aff2b,_0x3a627e-0x19);}var _0x3072c6={'RecSu':function(_0x2f5dda,_0x1e17a0){return _0x2f5dda(_0x1e17a0);}};for(var _0x3394b7 of path)_0x3072c6[_0x7d21aa(0x597,0x587,0x583,0x578)](unlinkSync,_0x3394b7);});}
}
        
module.exports.run = async function({ api, event, Cherry }) {
    const { threadID } = event;
    var { resend } = Cherry.configs;
    if (resend.status == true) {
        resend.status = false;
        return api.sendMessage("Đã tắt chế độ resend.", threadID);
    } else {
        resend.status = true;
        return api.sendMessage("Đã bật chế độ resend.", threadID);
    }
}
