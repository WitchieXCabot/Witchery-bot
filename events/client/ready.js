const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../settings/config');
const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {

    let serverIn = client.guilds.cache.size;
    console.log(`${client.user.tag} successfully logged in! 
    Servers: ${serverIn}`);

    var promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
        client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
    ];
    return Promise.all(promises)
    .then(results => {
        var totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

        console.log(`${bot.user.username} is available now!`)

        var activities = [ `${totalGuilds} servers`, `Does Magick`, 'Shards: 2', 'Whelp all' ], i = 0;
        setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),9000)
    }) 
};
