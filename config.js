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


global.devs = "255767442386" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767442386";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255767442386";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFUEtGb2lsL2hhY0hIc0NRakY3djM1bzR1a3E2N0lqSjYzNkFtWkVhbElZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc2NzQ0MjM4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTlDMzNCRUIyNkM3Mzk3Q0QyNzBGNEFEOTlCMDk1REZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NDAwNzM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzY3NDQyMzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Q0RGRTk4RDRBMUM5MDJCN0ZFRjRCNTk4QjdCNjRBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0MDA3MzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUlpb3NOSHVRYUdnaDhOVkE2bFc5d1wiLFxuICBcInBob25lSWRcIjogXCIzOTk0ZjM5NC1mYTVhLTRhN2EtYmM2ZS1kMzQ0YzBlM2FlZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyNDYsXG4gICAgICA4MyxcbiAgICAgIDk4LFxuICAgICAgNzgsXG4gICAgICAyMTAsXG4gICAgICAyMTcsXG4gICAgICAxMjUsXG4gICAgICAyNixcbiAgICAgIDE0MyxcbiAgICAgIDE1LFxuICAgICAgOTgsXG4gICAgICAyNTEsXG4gICAgICAyLFxuICAgICAgMTY3LFxuICAgICAgMTE1LFxuICAgICAgNjEsXG4gICAgICA4LFxuICAgICAgODksXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICA2NCxcbiAgICAgIDI1MSxcbiAgICAgIDIxMixcbiAgICAgIDI0OSxcbiAgICAgIDEzMixcbiAgICAgIDE1NixcbiAgICAgIDI0NCxcbiAgICAgIDIzLFxuICAgICAgMzMsXG4gICAgICAxOTYsXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NixcbiAgICAgIDIzNixcbiAgICAgIDEyLFxuICAgICAgMjE4LFxuICAgICAgMjI0LFxuICAgICAgNyxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFR0szOFNSN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzY3NDQyMzg2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExODIxNTIwMDAwNjI2Njo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Ard2t1a0hFSmJ5NzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjk3VEt3a1Y0V3picGQxb0xVYzh1OE9xVG1lNHV6eC9NbngxN2cwaWdsMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFQlpuRVdISUFBTjdqNUZNRkR1U3VBbU81RXRYSHBIWlROY3d6RG1pU3RXWGZ5dlBjbHNHZ3hveW4rejBJSG9oaDJnWjBhQ1Yvd21LankvUlFBUG9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSUUlrNGk1OGF3SE0xSXJ4WGF5Tjd0dHRwM3pmczY5UzMvYnhleWZpcThYeXBXRThISEtsL2NzMGVCNno1eDF3eXhOK21maFJMUXB3Nkp6L0VwUTRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3Njc0NDIzODY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDAwNzMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVJHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwSis3allOTzZPK1dJTVlnQVMvVGF0NGRWNDVSYzJpVTE5WXJSRnNsQlJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTk1NTAzMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQwMDczNTM5NVwifSIKfQ=="  // PUT your SESSION_ID 


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
