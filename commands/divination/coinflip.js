const Discord = require('discord.js');
const emoji = require('../../settings/emojis.json');
const config = require('../../settings/config');

module.exports = {
config: {
    name: "coinflip",
    aliases: ["flip", "toss"],
    category: "Fun",
    description: "Flip a coin for you !!",
    example: `${config.PREFIX}coinflip`,
},
run: async (bot, message, args) => {

    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'Heads';
    else result = 'Tails';
    const embed = new Discord.MessageEmbed()
        .setTitle(`${emoji.Coin} Coinflip ${emoji.Coin}`)
        .setDescription(`${message.member} (\`${message.member.user.tag}\`) Flipped a coin you got **\`${result}\`**!`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#D21F3C");
    message.channel.send(embed);
    }
}