const { MessageEmbed } = require('discord.js');
const config = require('../../settings/config');


module.exports = {
config: {
    name: "credits",
    description: "Patreon link and other info.",
    usage: `${config.PREFIX}patreon`,
    aliases: ['creds', 'hosters', 'supporters']
},
run: async (bot, message, args) => {
    const Developer = bot.users.cache.get(config.OWNER_ID)

    var embed = new MessageEmbed()
    .setTitle("Credits")
    .setAuthor(`${message.guild.me.displayName} By ${Developer.tag}`, message.guild.iconURL())
    .setColor("#D21F3C")
    .addField(`Info:`, `**Prefix: **\`${config.PREFIX}\`\n**Used By: **\`${bot.guilds.cache.size} servers\``)
    .addField(`Special Thanks:`, `**API's:** \`Ohmanda\` & \`Yerkee\`\n**Users:** \`chee#3091\` - Chee's Pixel Tarot\n**Bots:** \`Kitsunetsuki\` & \`Helios\` - For Inspo`)
    .addField(`Patreons:`, `404 - No Patreons found :(`)
    .addField(`links`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv) | [Patreon](https://www.patreon.com/WitcheryBot)`)
    .setFooter(`Thank you everyone!`)
    message.channel.send(embed);

}
}