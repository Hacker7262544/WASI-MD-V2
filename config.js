//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FBUEl1bEduZ1FzQWhmb3RNaHY1Y1E4aW1Gdjd3UlBXYjhWQXlJN1pXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Z5SUFoVjZPV1k2UnZLdWdzNUk1U0cwOFNHR2F2bDk2a21iY2xNcGRoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SHVNc2NUUy81OFJXcFNkVWd1OTdXNEVDaWlaZzQ1ck1vNW9pYmtWM1hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrN2dqNmpSc1NXNXJLWE01aVZvY2dBeTY4cjBSSUVDdlNvUm4yd0JNQm5RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMdGdSdXpNU3dsREJTSUZCbEwvYjJlRHhyaCtrMFhDVVh6V3ZMdE0wV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMdG5YdzVDZ2loMW11THdRUUMvMnNtQzVrS3UwUExiYkZaTlhHeGdKR2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUwwenU4T0VMQXQ2dVVDQlV3L2VCeUpNUWNIb3BIc3ZxaDFIUWU4WVduZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkoyL0J0bVZoaHVJTmZQTWt1b0JZYk5NeUFDbGpVaExZc3JRbGxySlBqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBpTGtvdUgyNitSWFZkQ0RqM2xBb3cyMTBXS2tkSG1MTVZnc0tyNHpNK29BZk5vRVY5eFRCZ2xEekcxZ3EzMTZqcGpBT01FWFZndUJaSkRsQU4xMmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJ5d2pPTWFySjRrR2RycVY0dFNTQklZdUM0Z0d2UThwZmpONzA2TXNSNHUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3Mjk4NDc4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MEU5NjY1RDY4QkM3OTI1NDJDRDMwNkQ0NzMxNzlBOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwOTgwMDc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNzI5ODQ3ODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzUyNjM3QzAyODBDQ0FEODNCQzJDQzczQUNFOTU0MjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDk4MDA3N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicDJUbkNsVjVRbW0xcTBfSDlUc19QQSIsInBob25lSWQiOiI4YzUzYzRmNC0yN2NiLTQzYzUtODIxNi1jZGViNTg4ZTQzOTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtFUnR5YzdTaFNFbXhuSEVWR1pJMHh6c1dFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVTM1BES0xsR0d2eHZvMGwyZUdManQvclVQbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4RVRXVzFYVyIsIm1lIjp7ImlkIjoiOTIzMDcyOTg0Nzg2OjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkoDwnZGo8J2RuPCdkbbwnZG28J2RqSDwnZG68J2RsiDwn4e18J+HsPCflKUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uRzJKVUJFTnVrMExRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRzUU5WcGs1emJVcmJ2dEFmdTQxakpneTZqL2NWYVNJOThCTy9EekNueEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpKRFhpNFFzYXBIRW1mNU5KelVSN05DNEJQYk4wVks3OVJ2aWdRZWxOcXJFUzFhRHZDRDZDTDRHZEpnSTgwV1UzSE5pZUtOTitiOHU2K1ZWMncyaURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFbFZSdWVOUWNLL1RLMERKb3h3Nkhxc3FBZnFkQTlQdS9pTWZnNkcyVWtNT0lsaER0bG1NaUxPNjFIZ25SMENJZ0NDN1FDWU5rOTZleFduZzBqU3doQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3Mjk4NDc4Njo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYkVEVmFaT2MyMUsyNzdRSDd1Tll5WU11by8zRldraVBmQVR2dzh3cDhTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTgwMDcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZKWiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝙔𝘼𝙌𝙊𝙊𝘽-𝙎𝙆-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝙔𝘼𝙌𝙊𝙊𝘽-𝙎𝙆-𝐕2",
  ownername: process.env.OWNER_NAME || "YAQOOB",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
