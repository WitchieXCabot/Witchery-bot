const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../settings/config');
const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {

    let serverIn = client.guilds.cache.size;
    console.log(`Witchery successfully logged in! 
    Servers: ${serverIn}`);

    var promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
        client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
    ];
    return Promise.all(promises)
    .then(results => {
        var totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

        console.log(`${bot.user.username} is available now!`)

        var activities = [ `1,080+ servers`, `Does Magick`, 'Shards: 2', 'Whelp' ], i = 0;
        setInterval(() => bot.user.setActivity(`Whelp | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),9000)
    }) 
};
