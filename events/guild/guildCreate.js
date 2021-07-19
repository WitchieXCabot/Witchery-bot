const Discord = require('discord.js');
const log = require('../../settings/channels.json');
const moment = require('moment');
const config = require('../../settings/config');

module.exports =  async (bot, guild, args) => {
    
    bot.user.setActivity(`${config.PREFIX}help | ${bot.guilds.cache.size} Servers`, {type: "LISTENING"}, {status: "dnd"})

    let owner = bot.users.cache.get(guild.ownerID)


    const channel = bot.channels.cache.get(log.ServerLogs);
      
    const embed = new Discord.MessageEmbed()
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024}))
    .setTitle(`Joined a Guild !!`)
    .addField('Name', `\`${guild.name}\``)
    .addField('ID', `\`${guild.id}\``)
    .addField('Member Count', `\`${guild.memberCount}\` Members`)
    .addField('Owner', `\`${guild.ownerID}\``)
    .addField('Creation Date', `\`${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}\``)
    .addField('Region', `\`${guild.region}\``)
    .addField(`${bot.user.username}'s Server Count`, `\`${bot.guilds.cache.size}\` Severs`)
    .setTimestamp()
    .setColor(`#D21F3C`)

      
    if (channel) channel.send(embed);
}