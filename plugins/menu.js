const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "😎",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
logo: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `*👋 Hello ${pushname} 👋*

*⬇️DOWNLOAD COMMANDS⬇️*

${menu.download}

*✨MAIN COMMANDS✨*

${menu.main}

*🌟GROUP COMMANDS🌟*

${menu.group}

*💚OWNER COMMANDS💚*

${menu.owner}

*🔁CONVERT COMMANDS🔁*

${menu.convert}

*💥SEARCH COMMANDS💥*

${menu.search}

_Join Our Support Chanel 👋💚_ = *👉 https://whatsapp.com/channel/0029ValmRUuIN9ivgXD4k12t 👈*

©𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝘼𝙎𝙎𝘼 𝙈𝘿
`
await conn.sendMessage(from,{image:{url:https://unitedcamps.in/Images/file_2135.jpg},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
