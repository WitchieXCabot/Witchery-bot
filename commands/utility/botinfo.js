const Discord = require('discord.js');
const moment = require('moment');
const config = require('../../settings/config');

module.exports = {
config: {
    name: "botinfo",
    category: "Info",
    aliases: ["bot", "info", "stats"],
    description: "Give the information of the bot",
    example: `${config.PREFIX}botinfo`,
},
run: async (bot, message, args) => {

    let usersCount = 0;
    for (const guild of bot.guilds.cache) {
    usersCount += (await guild[1].members.fetch()).size
    }

    let Days = Math.floor(bot.uptime / 86400000);
    let Hours = Math.floor(bot.uptime / 3600000) % 24;
    let Minutes = Math.floor(bot.uptime / 60000) % 60;
    let Seconds = Math.floor(bot.uptime / 1000) % 60;    
    const RemoveUseless = (Duration) => {
    return Duration.replace("0 Day\n", "").replace("0 Hour\n", "").replace("0 Minute\n", "");
    }

    const Developer = bot.users.cache.get(config.OWNER_ID)

    let Uptime = await RemoveUseless(`${Days}${Days > 1 ? "d" : "d"} ${Hours}${Hours > 1 ? "h" : "h"} ${Minutes}${Minutes > 1 ? "m" : "m"} ${Seconds}${Seconds > 1 ? "s" : "s"}`);


    const embed = new Discord.MessageEmbed()
    
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setTitle(`Information`)
    .setThumbnail(bot.user.displayAvatarURL())
    .setDescription(`\`\`\`Grammercy so much for adding me to thy most amazing guild. Mine default prefix is (m.) and i am  fortunate  to help thou.  Execute (m. help) for mine help command.\nGrammercy again,\nVictorian\`\`\``)
    .addField(`Name | ID`, `\`\`\`${bot.user.tag} | ${bot.user.id}\`\`\``, true)
    .addField(`Used By`, `\`\`\`${bot.guilds.cache.size} Servers\`\`\``, true)
    .addField(`User Count`, `\`\`\`${usersCount} Users\`\`\``, true)
    .addField(`Channel Count`, `\`\`\`${bot.channels.cache.size} Channels\`\`\``, true)
    .addField(`Made With`, `\`\`\`Discord.js & Node.js\`\`\``, true)
    .addField(`Creation Date`, `\`\`\`${moment.utc(bot.user.createdAt).format('DD/MMM/YYYY')}\`\`\``, true)
    .addField(`Bot Ping`, `\`\`\`Latency: ${Date.now()-message.createdTimestamp} ms\nAPI Latency: ${Math.round(bot.ws.ping)} ms\`\`\``, true)
    .addField(`Command Size`, `\`\`\`${bot.commands.size} Commands\n${bot.aliases.size} Aliases\`\`\``, true)
    .addField(`Prefix`, `\`\`\`${config.PREFIX}\`\`\``, true)
    .addField(`Developer`, `\`\`\`${Developer.tag} | ${config.OWNER_ID}\`\`\``, true)
    .addField(`Uptime`, `\`\`\`${Uptime}\`\`\``, true)
    .addField(`Links`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv) | [Patreon](https://www.patreon.com/WitcheryBot)`)
    .setColor("#BDAFAF")
    .setTimestamp()

    message.channel.send(embed)
    }
}