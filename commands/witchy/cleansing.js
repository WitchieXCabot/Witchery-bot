const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'cleansing',
    category: "witchy",
    aliases: ['cleans', 'cleanse'],
    description: "this is a cleansing embed",
},
    run: async (bot, message, args) => {

        if (message.guild.id === `793162542729134120`) {
            var cleansing = new MessageEmbed()
            .setTitle(' Cleansing ')
            .setColor("#D21F3C")
            .addField(`————History————`, `~• Cleansing is a way or removing negative or unwanted energy, spirits and imprints from objects or a space. There are many simple rituals and actions that are done to cleanse. You can use as many or as few as you like and create you own cleansing methods/rituals.`)
            .addField(`————Yourself————`, `~• Brushing your hair in the morning
            ~• Ritual baths
            ~• Dancing
            ~• Singing
            ~• visualization
            ~• Drinking a tea with set intent`)
            .addField(`————Objects————`, `~• Bury in salt
            ~• If water compatible (not soluble, won't react poorly) let sit in salt water or moon water
            ~• Pass through: smoke, incense, rain water, mist , snow, ect.`)
            .addField(`————Discreet Methods————`, `~• brushing your hair
            ~• Opening the window, letting new air in and letting old air out
            ~• Lighting a candle 
            ~• Playing a song that's associated with cleaning
            ~• playing a high vibrational sounds
            ~• Ringing wind chimes
            ~• Wetting your hands in salt water and flicking the water in the area your cleansing
            ~•Visualise light and colors and manipulate the energy away`)
            .addField(`————Open Area Cleansing————`, `~• Ring a bell through the area 
            ~• Smoke cleansing (Not Smudging!)
            ~• Waft incense smoke around
            ~• Burn herbs like Garden sage, rosemary, bay leaves, ect.
            ~• Spritz lemon infused water or salt water 
            ~• Light a candle
            ~• Sprinkle salt or egg shell powder around windows and doors`)
            .setFooter('Remember to do your own extensive research!')

            
            message.channel.send(cleansing);
        }
        else {
            var cleansing = new MessageEmbed()
        .setTitle(' Cleansing ')
        .setURL('https://discord.gg/jAfKPFS5FW')
        .setColor("#D21F3C")
        .addField(`————History————`, `~• Cleansing is a way or removing negative or unwanted energy, spirits and imprints from objects or a space. There are many simple rituals and actions that are done to cleanse. You can use as many or as few as you like and create you own cleansing methods/rituals.`)
        .addField(`————Yourself————`, `~• Brushing your hair in the morning
        ~• Ritual baths
        ~• Dancing
        ~• Singing
        ~• visualization
        ~• Drinking a tea with set intent`)
        .addField(`————Objects————`, `~• Bury in salt
        ~• If water compatible (not soluble, won't react poorly) let sit in salt water or moon water
        ~• Pass through: smoke, incense, rain water, mist , snow, ect.`)
        .addField(`Want more?`, `click on **Cleansing** above to enter our server for full command access or vote here and get the full embed`)
        .setFooter('Remember to do your own extensive research!')
        
        message.channel.send(cleansing);
        }
    }
}