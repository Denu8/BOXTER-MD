const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/7dba97d58df2326c32374.jpg' },
    { key: 'ALIVE_MSG', value: '||```HEY DEAR I AM ALIVE NOW...💀❗``` || \n\n`🪄🛠️OUR WHATSAPP CHANEL ;`\n\n_https://chat.whatsapp.com/D398VyzwKiIKFakN5XnCzT 🤖🇱🇰_\n\n`|| *🪄🛠️OUR YOUTUBE CHANEL ;`\n\n_https://www.youtube.com/@White_Devil_Programer 🤖🇱🇰_ \n\n`||🪄🛠️BOT OWNER NUMBER ;`\n\n+94705209559 🤖🇱🇰\n\n || `°°Powered By PODI WHITE DEVIL°°`' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
