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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxaM2pIc0NFN282ZmZYSVA5azJRSHlJTHlmNjRsK0puUUlIQTVTRDUwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUF3VkoxOHVrSHZRSXN2VjB6WXdCY2tubXJpT2pOMmJQYXhDNFB5RmVYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRnRreHZMZ2VxZWFsT0hCaU9SUGpvTTR4MGdOY3hlbEluOHhKOWhnbTF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuOGVYL2tpbVB2bVBrWExNWmhHbUExNTk3UWJjWklYL0RoT1BERFdlQW5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlBWnhuODR4bXZvdHlZdy9WY1h2YitsSFBZSmo0bjB2ZEp3V1JvQk4ybFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF2dEg2OGN3YmI2b0x1M2I1SWpoMUIrZzVqSEZUSlhjbGRXT1BleUJseWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQvN1RNNGM5TUxFZ0MvaEJoekFLRldCK2xPbG1xVXBTYVR2VC9KWDIxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWFQcmF3THVYRndRWGlMMVUrZFl3S0JWd2ZTbkx1T3RUU04ycEpWMzJrbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNmV1ovZGw0am80WlJsb1FSTHJ4RkVtUDJXREQyeHdYQTQ0akhqM1ZmZjZORDQ4ODdDakNyNVZnaVFCRGkvT05HUnNxQ3dsYkV1b2xhdlQ3SHFqbUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJTZUlvcW9saHNieXNaK3NPZEIzT3VaNWw3WGZ0N2FNWlJYaW5iR1oyYUI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRUlREOHNIb1NjbUkwUlIxVVhiUG1nIiwicGhvbmVJZCI6ImE3NTdmMDhlLWZlYzAtNGJlNi05ZDM0LTU2YzI5Y2EyZjdjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bjdJeVNFYzArNHYybzh5THUwT3kzVmlUTDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGJVeDlJUk9XbklaMldTMGdmVlp2Q1VkRjhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY2OFRQWkJKIiwibWUiOnsiaWQiOiI5NDc3NDM5MTU2MDo2MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVIFAgbCBvIGEgZCBlIHIgIDogKSIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjYwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0h2eStjRkVNWHo3Y0lHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiekFCYjd1QkYxd2lLQWhGMnlMMEd5NHZlRkZhVHR3TnFuOE9kb284MkV5az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSko0TUFqajdRMThUczRNRVVJN2Jla3F6b0x0R0NqT2VzaHE1eUxaOGxuTVUwNzRrMzh6OThFdFd5WDk0bit4ZXZON2d2MWV2UDV6bTNOeVVnN0hNREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNKZ0MxajNZUVE1RGpCbFE1dGJ0Ly9DbVFjK2Fhd0VDc1JXNndNeWkwcXdwbXQ0NTRKTnE1aXBnazhvSk9ROXNZd1N0RUhLK3R4NkpUbDFmK0QzSERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3dBVys3Z1JkY0lpZ0lSZHNpOUJzdUwzaFJXazdjRGFwL0RuYUtQTmhNcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwODI1NDI3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUg5TyJ9",
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
