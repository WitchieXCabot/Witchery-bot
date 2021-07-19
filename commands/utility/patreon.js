const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../settings/config')

module.exports = {
config: {
    name: "patreon",
    description: "Patreon link and other info.",
    usage: `${PREFIX}patreon`,
    aliases: ['patron', 'support', 'supporter']
},
run: async (bot, message, args) => {
    var embed = new MessageEmbed()
    .setTitle("Patreon")
    .setURL("https://www.patreon.com/WitcheryBot")
    .setAuthor(`${message.guild.me.displayName} Patreon`, message.guild.iconURL())
    .setColor("#D21F3C")
    .addField(`Tiers:`, `**Witchery's Mates**\nMates will have access to Support server benefits, special role, and minor secret/test command access as well as early announcements/changes.`)
    .addField(`Witchery's Master`, `Witchery's Master's get everything in first tier plus added special commands, Name added to Witchery website and bot as donator.`)
    .addField(`Witchery's VIP Master`, `Get all previous tier features plus a web feature as Witchery's VIP Master/Witchery's Hoster.
    (costs about 7+ dollars monthy to keep just hosted)`)
    .addField(`links`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv) | [Patreon](https://www.patreon.com/WitcheryBot)`)
    .setFooter(`Includes Discord benefits`, `https://toppng.com/public/uploads/preview/discord-logo-01-discord-logo-11562849833clsolz2mbc.png`)
    message.channel.send(embed);

}
}
