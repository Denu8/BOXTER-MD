const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦ https://github.com/Denu8/BOXTER-MD

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦  https://whatsapp.com/channel/0029VaePgYXBqbr6Vkg75n1j

*©BOXTER-MD*

`
await conn.sendMessage(from,{image:{url: `https://unitedcamps.in/Images/file_406.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
