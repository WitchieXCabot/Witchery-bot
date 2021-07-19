const Discord = require('discord.js');
const emoji = require('../../settings/emojis.json');
const config = require('../../settings/config');

module.exports = {
config: {
    name: "roll",
    aliases: ["dice"],
    category: "Fun",
    description: "Roll a die for you !!",
    example: `${config.PREFIX}roll`,
},
run: async (bot, message, args) => {
let limit = args[0];
if (!limit) limit = 6;

const result = Math.floor(Math.random() * limit + 1);

const embed = new Discord.MessageEmbed()
    .setTitle(`Dice Roll`)
    .setDescription(`${message.member} (\`${message.member.user.tag}\`) You rolled a die and you got **${result}** !!`)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("#D21F3C");
    message.channel.send(embed);
    }
}