var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../settings/config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: `1) ${PREFIX}help \n2) ${PREFIX}help [module name]\n3) ${PREFIX}help [command (name or alias)]`,
    example: `1) ${PREFIX}help\n2) ${PREFIX}help utility\n3) ${PREFIX}help 8ball`,
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setTitle("**Help Menu: Main**")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setColor(`#D21F3C`)
    .addField(`**Witchy**`, `[ \`${prefix}help witchy\` ]`, true)
    .addField(`**Divination**`, `[ \`${prefix}help divination\` ]`, true)
    .addField(`All commands?`, `Use [ \`${prefix}help all\` ]`, true)
    .addField(`\u200B`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv) | [Patreon](https://www.patreon.com/WitcheryBot)`)

message.channel.send(log);
} 

else if(args[0].toLowerCase() === "util") {
    var embed = new Discord.MessageEmbed()
    .setTitle('**Help Menu: [Utility]**')
    .setColor("#D21F3C") // Set the color
    .setDescription(`1) **Prefix** \`[${prefix}help prefix for more info]\`\n2) **Help** \`[${prefix}help for more info]\`\n3) **Invite** \`[${prefix}invite -  invite the bot to your server]\``)
    message.channel.send(embed);
}

else if(args[0].toLowerCase() === "witchy") {
    var embed = new Discord.MessageEmbed()
    .setTitle('**Help Menu: [Witchy]**')
    .setColor("#D21F3C") // Set the color
    .setDescription(`1) **Cleansing** \`[${prefix}cleansing - Cleansing info]\`\n2) **Events** \`[${prefix}events - Celestial events info]\`\n3) **Facts** \`[${prefix}facts - random Witchcraft facts]\`\n4) **Full moon** \`[${prefix}fullmoon - list if years full moons]\`\n5) **Herbs** \`[${prefix}herbs - List of protection herbs]\`\n6) **Moon** \`[${prefix}moon - send Up-coming new/full moon]\`\n7) **New Moon** \`[${prefix}newmoon - Sends lif of years new moons]\`\n8) **Oracle Info** \`[${prefix}oracle-info - Oracle info lol]\`\n9) **Protection** \`[${prefix}protection - herbs and other correspondences]\`\n10) **Salt** \`[${prefix}salt - salts info]\`\n11) **Shadow** \`[${prefix}shadow - shadow work info]\``)
    message.channel.send(embed);
}

else if(args[0].toLowerCase() === "divination") {
    var embed = new Discord.MessageEmbed()
    .setTitle('**Help Menu: [Divination]**')
    .setColor("#D21F3C") // Set the color
    .setDescription(`1) **8ball** \`[${prefix}8ball - Rolls an 8ball]\`\n2) **Coin Flip** \`[${prefix}coinflip - flips a magickal coin]\`\n3) **Fortune** \`[${prefix}fortune - Sends a fortune cookie]\`\n4) **Oracle** \`[${prefix}oracle - Pick out a oracle card]\`\n5) **Roll** \`[${prefix}roll - Rolls a magickal die]\`\n6) **Rune** \`[${prefix}rune - Does a single rune reading]\``)
    message.channel.send(embed);
}

else if(args[0].toLowerCase() === "all") {
    var embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.displayAvatarURL())
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setTitle('**Help Menu: [all]**')
    .setColor("#D21F3C") // Set the color
    .addField(`**Witchy**`, `1) **Cleansing** \`[${prefix}cleansing - Cleansing info]\`\n2) **Events** \`[${prefix}events - Celestial events info]\`\n3) **Facts** \`[${prefix}facts - random Witchcraft facts]\`\n4) **Full moon** \`[${prefix}fullmoon - list if years full moons]\`\n5) **Herbs** \`[${prefix}herbs - List of protection herbs]\`\n6) **Moon** \`[${prefix}moon - send Up-coming new/full moon]\`\n7) **New Moon** \`[${prefix}newmoon - Sends lif of years new moons]\`\n8) **Oracle Info** \`[${prefix}oracle-info - Oracle info lol]\`\n9) **Protection** \`[${prefix}protection - herbs and other correspondences]\`\n10) **Salt** \`[${prefix}salt - salts info]\`\n11) **Shadow** \`[${prefix}shadow - shadow work info]\``)
    .addField(`**Divination**`, `1) **8ball** \`[${prefix}8ball - Rolls an 8ball]\`\n2) **Coin Flip** \`[${prefix}coinflip - flips a magickal coin]\`\n3) **Fortune** \`[${prefix}fortune - Sends a fortune cookie]\`\n4) **Oracle** \`[${prefix}oracle - Pick out a oracle card]\`\n5) **Roll** \`[${prefix}roll - Rolls a magickal die]\`\n6) **Rune** \`[${prefix}rune - Does a single rune reading]\`\n7) **Tarot** \`[${prefix}t <simple,img,burnt> -  one card tarot reading]\`\n8) **Herb Find** \`[${prefix}find <herb/plant/flower> - Embed with detailed Herbal info]\``)
    .addField(`**Misc**`, `1) **Feedback** \`[${prefix}feedback - Send devs feedback]\`\n2) **Report** \`[${prefix}report - Send a bug or user report to devs]\`\n3) **Suggest** \`[${prefix}suggest - Sends a suggestion to dev]\``)
    .addField(`**util**`, `1) **Prefix** \`[${prefix}help prefix - for more info]\`\n2) **Help** \`[${prefix}help - for more info]\`\n3) **invite** \`[${prefix}invite - Invite the bot to your server]\`\n3) **Bot Info** \`[${prefix}botinfo - Gives you bot info]\`\n4) **Credits** \`[${prefix}credits - Credits to users/API's & more]\`\n5) **Patreon** \`[${prefix}patreon - Patreon tier info]`)
    .addField(`\u200B`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv) | [Patreon](https://www.patreon.com/WitcheryBot)`)
    message.channel.send(embed);
}

else {
    const embed = new Discord.MessageEmbed()
    .setColor("#D21F3C")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setThumbnail(bot.user.displayAvatarURL())

    let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
    if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
    command = command.config

    embed.setDescription(stripIndents`
    ** Command -** [    \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`   ]\n
    ** Description -** [    \`${command.description || "No Description provided."}\`   ]\n
    ** Usage -** [   \`${command.usage ? `\`${command.usage}\`` : "No Usage"}\`   ]\n
    ** Examples -** [   \`${command.example ? `\`${command.example}\`` : "No Examples Found"}\`   ]\n
    ** Aliases -** [   \`${command.aliases ? command.aliases.join(" , ") : "None."}\`   ]`)
    embed.setFooter(message.guild.name, message.guild.iconURL())

    return message.channel.send(embed)
}

    

}

}