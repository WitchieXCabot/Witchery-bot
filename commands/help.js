const Discord = require('discord.js');


module.exports = {

    name: 'help',
    description: "this is a help embed",
    execute: async (message, args) => {
                
        let help = new Discord.MessageEmbed()
        .setTitle('Help; heres a list of my commands!')
        .setDescription(`our bot has very simple comands heres the list`)
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setColor("#D21F3C")
        .setTimestamp()
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '<:hh7_WitchHat:841517821593649162> Witchy Commands <:hh7_WitchHat:841517821593649162>', value: `\`Wcleansing\`- All the cleansing information you need 
            \`Wevents\`- Gives you a full list of 2021 celestial events 
            \`Wfact\`- Gives you random facts and tips on witchcraft! 
            \`Wfullmoon\`- Gives you a list of 2021 Full moons with the dates, names and horoscope 
            \`Wherbs\`- Get a list of herbs and there correspondences 
            \`Wmoon\`- Sends you when the next full/New moon is 
            \`Wnewmoon\`- Gives you a list of 2021 New moons with the dates and horoscope 
            \`Wprotection\`- Get a full list of herbs and plants for protection 
            \`Wsalt\`- Gives you a small list of salts and there properties 
            \`Wshadow\`- Get information on shadow work 
            \`Woracle-info\`- Gives info on oracles
            \`Winvite\`- sends you my invite link!`, inline: false },
            { name: '<a:sscrystal_pink:841517749557657620> Divination Commands <a:sscrystal_pink:841517749557657620>', value: `\`Wcoin\`- flips a coin 
            \`Weightball\`- Rolls a eight ball 
            \`Wcolor\`- Gives you a color and its corrispondences 
            \`Wrune\`- Get a rune and meaning 
            \`Woracle\` - get a oracle reading every 12 hours! 
            \`Whoroscope\` - send you your daily horoscope`, inline: false },
            { name: ':rofl: Fun Commands :rofl:', value: `\`Wdadjoke\`- we all need a dad joke to make us laugh once and a while
             \`Wrps {rock/paper/scissors}\`- Play RPS with the bot`, inline: true})
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));



        let support = new Discord.MessageEmbed()
        .setTitle('Join the support server!')
        .setURL(`https://discord.gg/SR8JanRqsv`)
        .setDescription(`Need help? Something not working? want to support? Have a suggestion?
        Well join our support server!!

        *We are looking for staff and helpers!!*
        
        **Server link:** https://discord.gg/SR8JanRqsv `)
        .setFooter(`check out ouf website! - http://www.witcherybot.xyz/ `)
        .setColor("#D21F3C")
        message.react('<a:Check:841139955958808596> ');        
       await message.author.send(help)
       await message.author.send(support);
    
    }
}