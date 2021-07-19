const Discord = require('discord.js');
const config = require('../../settings/config');
const ascii = require('ascii-table');


let Table = new ascii("ServerList");
Table.setHeading(" Guild Name ", " Guild ID ", " Member Count ", " Owner ");

module.exports = {
config: {
    name: "serverlist",
    aliases: ["sl"],
    category: "Staff",
    description: "Gives all the list of servers that I'm in inside the console log !!",
    example: `${config.PREFIX}serverlist`,
},
run: async (bot, message, args) => {

    if (message.author.id !== config.OWNER_ID && message.author.id != "777305780503314442") {
        return;
    }

    const servers = bot.guilds.cache.array().map(guild => {
        Table.addRow( guild.name, guild.id , ` ${guild.memberCount} Users `, ` ${guild.ownerID} `);
    });

    console.log(Table.toString());
    await message.channel.send(`All the servers and details are been posted on my console log !!`)
    }
}