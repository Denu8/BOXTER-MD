const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_406.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello ${pushname} I'm Online Now...😎💚 | Get ( .menu ) For Commands 👀📜*\n\n> Join Our Support Chanel = https://whatsapp.com/channel/0029VaePgYXBqbr6Vkg75n1j 🙌,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
