const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
config: {
    name: 'libra',
    aliases: ["lib", "li"],
    description: "Daily libra horoscope embed",
    throttling: {
        usages: 2,
        duration: 10
      }
},
run: async (bot, message, args) => {
    message.channel.send('<a:loading:841122743050698762> Loading...')
        .then(msg => {
                      msg.delete({ timeout: 900});
                  })
        .catch(console.error);
            
        const { horoscope } = await fetch('https://ohmanda.com/api/horoscope/libra/').then(response => response.json());
        const { sign } = await fetch('https://ohmanda.com/api/horoscope/libra/').then(response => response.json());
        const { date } = await fetch('https://ohmanda.com/api/horoscope/libra/').then(response => response.json());


        let libra = new MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setFooter(date)
        message.channel.send(libra);
    }
}