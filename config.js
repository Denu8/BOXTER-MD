const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_406.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "||```HEY DEAR I AM ALIVE NOW...💀❗``` || \n\n`🪄🛠️OUR WHATSAPP CHANEL ;`\n\n_https://whatsapp.com/channel/0029VaePgYXBqbr6Vkg75n1j 🤖🇱🇰_\n\n`|| *🪄🛠️OUR YOUTUBE CHANEL ;`\n\n_http://www.youtube.com/@Denuwa_Editz90 🤖🇱🇰_ \n\n`||🪄🛠️BOT OWNER NUMBER ;`\n\n+94722336454 🤖🇱🇰\n\n || `°°Powered By BOXTER MD°°`",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
