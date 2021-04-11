const Discord = require('discord.js');

module.exports = {

    name: 'herbs',
    description: "this is a herbs embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let herbs = new Discord.MessageEmbed()
        .setTitle(' Herbs and there Correspondences ')
        .setURL('https://discord.gg/wD3Yq8e')
        .setColor("#D21F3C")
        .setTimestamp()
        .addField(`————Herbs————`, `~•Allspice- prosperity, luck, healing, energy
        ~•Basil - love, banishing, wealth, success, sympathy, protection; dispelling confusion, fears, and weaknesses
        ~•Bay Leaf - wishes, protection, good fortune, success, purification, strength, healing, inducing prophetic dreams, enhanced psychic ability
        ~•Black Pepper - protection, banishing, cursing
        ~•Chili Powder - love, fidelity, cursing, removing curses or negating spells
        ~•Chives - love, protection, divination, hex breaking
        ~•Cinnamon - success, healing, protection, power, love, luck, strength, prosperity
        ~•Garlic Powder & Garlic Salt - healing, protection, banishing, cleansing, purification
        ~•Ginger - sensuality, sexuality, personal confidence, prosperity, success, health, protection, new experiences and adventures
        ~•Lavender - peace, calm, sleep
        ~•Mint - wealth, healing, luck`)
        .addField(` ————Want more?———— `, `to get the full list join our server by clicking on **Herbs and there Correspondences**`)
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(herbs);
    }
}