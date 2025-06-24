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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9laTI0S2JLd3duL3lGSmhjUXhSV3RjY0Q0RkJIRDl6MlJBaE93TGMzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1JqMFFya3NpMnRmVGZyQy9PSXBCZjRKTWYrYnVrVGhNdmNOREh1OVBFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T2UvZ1pVWXVOYXJXUlB0aW5xaS9wRDJodkE0bWFxZEZxcEEvQVNvdEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQK0JUUHVSTlZ4ZXpWWEVMRmFCNDliS0ZBalJRTlJvUE9GbEllc0VKUTFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQaVh0NHBXYmhkMVRXTUpUUklTZVRlNXI5WFRCSTY0NElyVXJSV2ZrRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCTUlKN2k2SEVYZEFKZmtwZHpyWUtITlZXdXBoWEtEd1NkT2V4cGw3VFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVRK013OWYvRWNqVGFxZjZxZjVCbHhoZW5ZaU92bk9RUlNJd2JkTHJGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDBEODBuYTBxQTNkYVVoZXM1UHVxdHp6NU5xaDRIZ3MwWk5nWUJlUU5pMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBZcjdsbmora1ByTFlrTkw1NGp3ZHgzbnRHNHJ1K0phYWdQZEtadnVNbHRsS0NnMzZNa2hoc0JsVUlaSWd0QjdsREgvWUEwaHFlc09CNXFicmpmUGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJFUDNpMnd4czhZYjRlK2JXT0N6QWxPZDZMbVNLeDd1Ti9jWWZrNll3WEVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsS3d3bTZxbVRMNjZEcEhNYkFvVTNnIiwicGhvbmVJZCI6IjdiYjhhZDY1LWNkNTktNDRhZC1iNDAzLThmYjUxODc1ODQ4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdm5mb0ZqSkh4VnprWkdiMjVSL3NTZUN3RzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHFXbEJZOWpiYzM0RmQ1V01HakVpbDMvM1RNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVNQ0NHU1YxIiwibWUiOnsiaWQiOiI5NDc3NDM5MTU2MDo1N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVIFAgbCBvIGEgZCBlIHIgIDogKSIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjU3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0h2eStjRkVMRzE2OElHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiekFCYjd1QkYxd2lLQWhGMnlMMEd5NHZlRkZhVHR3TnFuOE9kb284MkV5az0iLCJhY2NvdW50U2lnbmF0dXJlIjoicTVzazZ0MTN6QjlNUFZhY0xzZXovR1p2Z0dLSXcwOTc3QzZOMlZkMGhVS2R2dVNIR050SjRqQ0c2NW5qcklCUTFsbTR5ZGxlOC93dHM4MFE0ajU4QUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZicjRMaFYrbEE5dzh1d3FoczN2TjRaaVIyaFRwTDZBK01OcFRKOG5FemlVOXA3T0NDYXMva2lUWm01KzdvT1Q0Rm42QmptTnFTeVJBbnZPWUtDRGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3dBVys3Z1JkY0lpZ0lSZHNpOUJzdUwzaFJXazdjRGFwL0RuYUtQTmhNcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNzg0NzAzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg5SCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
