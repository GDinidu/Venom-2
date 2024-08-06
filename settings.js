

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "94743356556"
global.ownername = "DINUWA"
global.ytname = "DINUWAl"
global.socialm = "GitHub: DeeCeeXxx"
global.location = "Africa, Nigeria, Lagos"

global.ownernumber = '94743356556'  //creator number
global.ownername = 'DINUWA' //owner name
global.botname = '🕷DINUWA🕷' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'David_Cyril\n\nContact: +2349066528353'

//console view/theme
global.themeemoji = '🪀'
global.wm = "David Cyril Tech."

//theme link
global.link = ''

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {
xtxt: '🚨David_Cyril🚨',
}
global.bimg = '{"noiseKey":{"private":{"type":"Buffer","data":"6LeB80xeOVPH9RLwdIwlrP6tys1hSISkHAOkhbjUfGA="},"public":{"type":"Buffer","data":"sURK/Om8PQhBdY3H2zlRXKffkrrJDDuQWhjbY9tQmn4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YM5z8nTk/nRPe3pV8kpn6yJbnygnITmApG9jPqfqXGQ="},"public":{"type":"Buffer","data":"HR/7b6XbToC/Q6Iwsi45KD8STu36dDceEFyTiLqI4k8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EIchDM7SJ5U8krN/O//35w1UZmK24E3g/UXu+Sn6NHw="},"public":{"type":"Buffer","data":"j0oM3KpCJhQ+Dg6YO/rL1EDMdi4j+5ZCgpQGCWIhXTo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CJwbfjyapsrqtyVcrsok2M3ChXpWUqG98KahnI39PnY="},"public":{"type":"Buffer","data":"5bhGY/aHjDRps2czrPKkd+M/6Z7xFNnwRy9dsLAc3TI="}},"signature":{"type":"Buffer","data":"czbJaBhPLyeC5DYqWmCOJmAAXwajWVxmcNUSjTd8Bf6YzT5Zynw3M/JynaoZDm2YinrHzeldmVC/ot0V6g0hCg=="},"keyId":1},"registrationId":80,"advSecretKey":"L+Y66BjtUdHGoOpJ9HeUdhrgPE7rPeIzovcZhRHCIHQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"0pHEeTOdTouiag5udIowvg","phoneId":"0ae76c8d-bdb4-4b8c-8f9c-f8352f2f6254","identityId":{"type":"Buffer","data":"kc5O1MSWbvENmwXYzlo3hgZw32s="},"registered":true,"backupToken":{"type":"Buffer","data":"hUPfBaD8grZwg/NEPbn1GFknSUA="},"registration":{},"pairingCode":"NASKAZ51","me":{"id":"94743356556:13@s.whatsapp.net","lid":"20977123610736:13@lid"},"account":{"details":"CJO6qa4CEMX0yLUGGAUgACgA","accountSignatureKey":"/wYLQPlrTDodaj6NEIqDqcxzRjUdeTFKziybqbMisT8=","accountSignature":"s9trNyFb3zn/LepZLD+7T4hLsy60k5O6rMnDxPq/cNb59TmcSlA1wJAxwa6FSDnBVzClU46iOSTz5MJXxdwCDg==","deviceSignature":"vftiodgEsGgj5khechALnfFoq8/v6+vvbkotI22Irb+fQNA8LeEE/UrwrFgJyTUFp6OFv/wTOjVCjoCNQ1VVAQ=="},"signalIdentities":[{"identifier":{"name":"94743356556:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bf8GC0D5a0w6HWo+jRCKg6nMc0Y1HXkxSs4sm6mzIrE/"}}],"platform":"android","lastAccountSyncTimestamp":1722956360,"myAppStateKeyId":"AAAAACdu"}'


//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
