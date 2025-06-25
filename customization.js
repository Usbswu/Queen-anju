const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
> *🪝 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*🪝

*╭────── ❖ SYSTEM INFO ❖ ──────╮*
 *❘ 📅 Date Today :* ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
 *❘ ⌚ Time Now :* ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
 *❘ 🍭 Bot Name : KAVI-MD V${packageJson.version}*
 *❘ 👾 Prefix : ${config.PREFIX}*
 *❘ 📚 Version : ${packageJson.version}*
 *❘ 📝 Platform : ${os.platform()}*
 *❘ 🤴 Owner : Kavidu Rasanga*
 *❘ 🔮 Mode : ${config.MODE}*
 *❘ 🍁 Uptime : ${runtime(process.uptime())}*
 *❘ ✨ Mem : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*╰─────────────────────────╯*    
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "./src/media/LOGOS/alive.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🫧 𝐊𝐀𝐕𝐈-𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🫧

🔮 *I'm Alive Now. . . !*

┏━━━━❮ 🔮 𝙏𝙊𝘿𝘼𝙔 🔮 ❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮✨ *_STATUS DETAILS_* ✨❯━━━
┃ 🍭 *Bot Name :* *KAVI-MD V${packageJson.version}*
┃ 👾 *Prefix :* *${config.PREFIX}*
┃ 📚 *Version :* *${packageJson.version}*
┃ 📝 *Platform :* *${os.platform()}*
┃ 🤴 *Owner :* *Kavidu Rasanga*
┃ 🔮 *Mode :* *${config.MODE}*
┃ 🍁 *Uptime :* *${runtime(process.uptime())}*
┃ ✨ *Mem :* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${movieData.title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* 𝘾𝙝𝙚𝙘𝙠 𝙞𝙩 𝙤𝙪𝙩 → ${title}
       
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

📺 *𝚃𝚅 𝚂𝚑𝚘𝚠:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝙴𝚙𝚒𝚜𝚘𝚍𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝙳𝚊𝚝𝚎:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.releaseDate}
🌐 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿  
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿  

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
};
