const Discord = require('discord.js');

module.exports = {

    name: 'invite',
    description: "this is to invite us to your server",
    execute: async (message, args) => {

        let err = new Discord.MessageEmbed()
        .setTitle('Error')
        .setColor("#D21F3C")
        .setDescription('\n`\`\`diff\n-WARNING: Something went wrong!\`\`\`')

        let links = new Discord.MessageEmbed()
        .setDescription(' My invite URL is:  \`\`\` https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217 \`\`\` ')
        .addField(`\u200B`,`[Invite me](https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=4027055217) | [Vote](https://top.gg/bot/780341354379083797) | [Website](http://www.witcherybot.xyz/) | [Support Server](https://discord.gg/SR8JanRqsv)`)
        .setColor("#D21F3C")



        try{
           await message.channel.send(links);
        } catch(error) {
            message.reply(err)
        }

    }
}