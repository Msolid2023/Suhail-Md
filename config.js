const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Dodoma";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255767442386" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767442386";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_08_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2xKYTgrdzVKNzFrSVlsM3N5T2VNUUlCTENVSlJTVjJXVXVtd0FtYzM3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3Njc0NDIzODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5OTQ4RTdGQUM3MUVGMjA4MTMxRUFCMTEwNEY1OURBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY2NDkyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc2NzQ0MjM4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRENBMkE0RTNFREZCM0QyRkIwODU4NDlEMkRFMzlBNThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NjY0OTI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllHckZXTDd1UWRxZG1SeUpUcG0zQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDIwNzZhMzAtNDAzOS00Njk0LWFlOGItZjZhM2FmZTMwOWI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDI5LFxuICAgICAgMTUsXG4gICAgICAxMzgsXG4gICAgICAyNDMsXG4gICAgICA3MixcbiAgICAgIDUxLFxuICAgICAgMTcxLFxuICAgICAgMTg2LFxuICAgICAgMTAzLFxuICAgICAgMjMzLFxuICAgICAgMTc3LFxuICAgICAgNTAsXG4gICAgICA3OSxcbiAgICAgIDQsXG4gICAgICAxOTIsXG4gICAgICA4MCxcbiAgICAgIDE2NyxcbiAgICAgIDUwLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDE1MyxcbiAgICAgIDE5NSxcbiAgICAgIDcsXG4gICAgICAxNixcbiAgICAgIDk3LFxuICAgICAgMjM0LFxuICAgICAgMTE3LFxuICAgICAgMjE1LFxuICAgICAgMjM1LFxuICAgICAgMTcsXG4gICAgICAzNixcbiAgICAgIDE2NyxcbiAgICAgIDk4LFxuICAgICAgMjMyLFxuICAgICAgMTEwLFxuICAgICAgMjI3LFxuICAgICAgMTYzLFxuICAgICAgMTAyLFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFTUTVUUjExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3Njc0NDIzODY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE4MjE1MjAwMDA2MjY2OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwibXNvbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9LOUt3REVKUDVoYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIQkxUNzk4WXlvMkpuSHYzYTg2dFRxNlRYZm8wK2xqVHIvZFh5bHNZZVhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU4V2ovVkVicklBR29lclc1ckdRQ1VvdDBjMW9WV2xTMG1kQ1crTEp1YWovQ2pIYzUxeGg4MjZIMUdIVm1Kai9WYlNwZzZjTGJlL1R2MVQ5UEROT0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVyQ2FCbEpjaUsxSEhkaTRjYkw3VVdiblppY0s2UzNWWnB6SUtrbGh6Tk9veXRleGN5bEY4UHk5bFEvNkNINmhhdEtjby9MQzl1Y0MvaWNySHo2bGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc2NzQ0MjM4NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2NjQ5MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1Cby5qc29uIjogIntcImtleURhdGFcIjpcIjdQMzdPeDhQc1B4dFJ4a08xMHlad1RKNkZFV1FuelRLUHBCOGoyR3liV0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODk5NDgyOTk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "msolid",
  packname: process.env.PACK_NAME || "msolid",
  botname : process.env.BOT_NAME  || "msolid",
  ownername:process.env.OWNER_NAME|| "msolid",


  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "true",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
