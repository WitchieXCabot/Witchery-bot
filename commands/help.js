const Discord = require('discord.js');

module.exports = {

    name: 'help',
    description: "this is a help embed",
    execute(message, args) {
        let help = new Discord.MessageEmbed()
        .setTitle('Help; heres a list of my commands!')
        .setDescription(`our bot has very simple comands heres the list`)
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setTimestamp()
        .addField(':woman_mage: Witchy Commands :mage:', `**Wcleansing**- All the cleansing information you need 
         **Wevents**- Gives you a full list of 2021 celestial events 
         **Wfact**- Gives you random facts and tips on witchcraft! 
         **Wfullmoon**- Gives you a list of 2021 Full moons with the dates, names and horoscope 
         **Wherbs**- Get a list of herbs and there correspondences 
         **Wmoon**- Sends you when the next full/New moon is 
         **Wnewmoon**- Gives you a list of 2021 New moons with the dates and horoscope 
         **Wprotection**- Get a full list of herbs and plants for protection 
         **Wsalt**- Gives you a small list of salts and there properties 
         **Wshadow**- Get information on shadow work `)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: ':crystal_ball: Divination Commands :crystal_ball:', value: '`Wcoin`- flips a coin \ `Weightball`- Rolls a eight ball \ `Wcolor`- Gives you a color and its corrispondences \ `Wrune`- Get a rune and meaning \ `Woracle` - get a oracle reading every 12 hours!', inline: false },
            { name: ':rofl: Fun Commands :rofl:', value: '`Wdadjoke`- we all need a dad joke to make us laugh once and a while \ `Wrps {rock/paper/scissors}`- Play RPS with the bot', inline: true},
            { name: ':tools: Utility Commands :tools:', value: '`Whelp`-  The commmand that brings this embed up! \ `Winvite`- Like the bot? invite it! \ `Wms`- Get the latency of the bot \ `Wping`- PONG!, Uptime', inline: true}
        )
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
       
        message.channel.send('Loading...').then(sent => {
            sent.edit(help);
        });
    }
}