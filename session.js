//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1FSHc5ODNGMlF4NVBLRGZzU2hCOFJEaTU0WXdNaFZYWjBBVjY3MzJFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXVqMFFzNDZQazFJbUZDVmZydlRIS3RkRFZZYlFQa0Rsb1NpZEIzTjkzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTTJFRVNPZERzelBXTCtpT2xkaXBMV2YvS095ckFzZTlsU3dEZEJKM0ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQjRrd0NQWS9QeXY3MGRRVlR2aWFJcGszNG1VWGxJNFdqNlBQMGFLWjAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKRVJQaU9UekFLQ1B0dEs4MUUxU3doTlI3aVM4dCtuL0E3MjQyMXlOMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZGWUZuL2hiaDVWbWliL0EyaFJIeHJVbTI4dG1UOC9FUEtBb2ptMW9kaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUR4RG5tMUVReEhrTTVGT3E2Q01CbEhkaXFqcXNMSDR0cStXaWtQTjBuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0tvZW1TVS9hRjNEN3ZHeUt1dkdWR28yWXp1OEovdnpZTUtTelFHQ0xXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh4UHpCM2c4WHhYUW5oc0c4dTN5TENha1N2SllsYnNQZFEwYk5DRlVrc3UyN1dGUkJydjFVbWV6ajlNVkVKVThHUGJ5NFo2RVdCbWZtNVdzM21HZ0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IlpMSDhTdFZ1Ui9rc1o1QWZGL0R4MGtFaVB5SkJaMFNGeWh4YzZmSXN2Y009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJlY3lUNk1KUUdpYm5xVldmVjJJdlEiLCJwaG9uZUlkIjoiMDg4ODU5MTgtY2M5MC00OThiLWFiNzItMWJhZTVjYzc1NmY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFpTWY4NCsxbktLeEJuT1JzUko3R05KQmhKOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQR2JwNkJoaWpERHVXUFFkYkplRjgxSlZ5aGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0MyNUNQTU4iLCJtZSI6eyJpZCI6Ijk0Nzc0MzkxNTYwOjU1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlUgUCBsIG8gYSBkIGUgciAgOiApIiwibGlkIjoiNzA3MjE1NTIyNzc2NDM6NTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSHZ5K2NGRUlpSTZzSUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6QUJiN3VCRjF3aUtBaEYyeUwwR3k0dmVGRmFUdHdOcW44T2RvbzgyRXlrPSIsImFjY291bnRTaWduYXR1cmUiOiI1TjdRZ1FnVVFtM0dZV09OWjNNcWJlR3IreElnbm1FSkYxR1B4SlZOWkZNR0JpenYwRWdUZm9FcmJCcVdHNnZGT2dzYVhxUUJLS1pwbVhqNVBRaFVEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGY0MHJWdWFhVDB3dCtpL3k1UXhaYkcwdXR3dExaOTBNT2lzNG11NFlWMDVjR005ZGgwTE1aTDY0ZU1RbWtSeGRERVYzY3Z4bUx6dmJKSCtUR2RhQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDM5MTU2MDo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjd0FXKzdnUmRjSWlnSVJkc2k5QnN1TDNoUldrN2NEYXAvRG5hS1BOaE1wIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA3NjI1MTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDlHIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
