let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://restapi-production-a62b.up.railway.app/api/nsfw/gifs?apikey=APIKEY`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '© AhmdLui', 'GET DOSA', `${usedPrefix + command}`, m)
}
handler.help = ['hentaigif']
handler.tags = ['hentai']

handler.command = /^(hentaigif)$/i
handler.limit = true

module.exports = handler
