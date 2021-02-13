const Discord = require('discord.js');

module.exports = {

    name: 'moon',
    description: "this is a next moon",
    execute(message, args) {
        message.channel.send(`The nex new moon is on;
      🌑February 11th New Moon`)
    }
}
