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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255773769972" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255773769972";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_20_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0Y3VDVmd0NXB5aWorUDl4TzdIV3luQXorcXJEellYTnJDSUNyT2JXRHJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc3Mzc2OTk3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjJCQjE0ODUzMUM3NTgzODhGRTgzNjM2MjE0NURFMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjI0ODIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNQMks5cmRzVDZTS01QM3ZqQ1lYaGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzE2Y2JiYjktY2MxMS00NDA3LTg4ODYtZjA1MjE3ZGIwYmNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDUxLFxuICAgICAgMTgzLFxuICAgICAgMTcwLFxuICAgICAgMTYwLFxuICAgICAgMTgyLFxuICAgICAgMCxcbiAgICAgIDI5LFxuICAgICAgMTE0LFxuICAgICAgMTcxLFxuICAgICAgMTMwLFxuICAgICAgMTExLFxuICAgICAgMTE3LFxuICAgICAgMTAzLFxuICAgICAgMTAyLFxuICAgICAgNjgsXG4gICAgICAyNDQsXG4gICAgICA3OSxcbiAgICAgIDIyMyxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIxNCxcbiAgICAgIDQyLFxuICAgICAgMTIwLFxuICAgICAgMTYyLFxuICAgICAgMTEyLFxuICAgICAgMTcyLFxuICAgICAgMTAzLFxuICAgICAgODEsXG4gICAgICAyNDQsXG4gICAgICA1MSxcbiAgICAgIDk3LFxuICAgICAgNTYsXG4gICAgICAyMSxcbiAgICAgIDIwNSxcbiAgICAgIDEzMCxcbiAgICAgIDIyMSxcbiAgICAgIDE2NyxcbiAgICAgIDE0MCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJSWU5WSzYxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NzM3Njk5NzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1zb2xpZFwiLFxuICAgIFwibGlkXCI6IFwiMTc3ODU5MzQzNzA4MzExOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUR2Z2JJRUVLek51clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2UjkyLzZGUE1KNUVXWE5hWjRpY2YzV1NKM29VWkRtTlA0OGtEQ1JGblcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlDN21YcHZ1WnRiaWp6d2RJaUlZa3NIOUgwcW92K2RsRkVDZWppZEZXSldVa2JlMkdla2gvSmZNSm1mTW81bnZTKzM4M3ZieS9CSERzdDZKSUtRZUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVHOWtuL2E4cnB3S0FrbHg1ZUNYQ0JYY25IV3orMWVUM2N1WkhXaUkyTndVU1VQWmVGYU1SV0E2VlFOL0JrR0ZVaDlvekhlenZTdnVYajE1TGUvbENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc3Mzc2OTk3MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyNDgxOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
