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


global.devs = "255629376804" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255629376804";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_53_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVXRYdTJ6U3NENytMdWgvQ2V2R1NBeWNSdUlwRmxTTUhUVmNRSGVzeW11UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHZua1E2b1RSRnEweXgxd1pFNWp1QVwiLFxuICBcInBob25lSWRcIjogXCJkOTRjYjNhNy02YTNlLTQ0MGEtODZjZi02Y2U2ODUyOWNhMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgOSxcbiAgICAgIDEwMixcbiAgICAgIDE1NixcbiAgICAgIDE2MCxcbiAgICAgIDIxMyxcbiAgICAgIDg1LFxuICAgICAgMjUwLFxuICAgICAgNTksXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDE2MSxcbiAgICAgIDE1LFxuICAgICAgMTE2LFxuICAgICAgNzUsXG4gICAgICAxNjcsXG4gICAgICAyMTcsXG4gICAgICAxMjUsXG4gICAgICAyMDIsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMTk5LFxuICAgICAgMzksXG4gICAgICA5NyxcbiAgICAgIDUxLFxuICAgICAgMTYwLFxuICAgICAgODEsXG4gICAgICA5MixcbiAgICAgIDk2LFxuICAgICAgNCxcbiAgICAgIDE1LFxuICAgICAgMTAzLFxuICAgICAgMTY5LFxuICAgICAgMTMzLFxuICAgICAgMjE4LFxuICAgICAgMTYxLFxuICAgICAgMTY3LFxuICAgICAgMTY0LFxuICAgICAgMTg2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5aSkw1U0JQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MjkzNzY4MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMTIxMjQ2NzIwNTE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSHptY0FERUxQYmxMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtZR05Xa1UrUGgzbjNuNFNYYW1HUklZci9IM2NFT0M3ekVydmh5L1Y4V3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXg2TEwxNGdnRGp0MkVkY2VmenpLNEtuN3NnWkQxQjBNQXVyZUUrTEx2WFpVNDJWSlorTjhtcDV3aGIxdjZxZ0theWwrMnFCU3ZNL1lTaVZpWk9GQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUklOU3hLaGtRU1pZb0NjQVBWakIvQ3I1dERYWFJBMnZCdksrNUpxVzNYK0svYXh1YnBna1hham5jVHo4Z0tkTFR4bjI2cTdSTkxzZXJrdjhLblhRRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI5Mzc2ODA0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMDQwMjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "msolid2023",
  antilink_values:process.env.ANTILINK_VALUES|| "false",
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
