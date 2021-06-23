const Discord = require('discord.js');

module.exports = {

    name: 'moon',
    description: "this is a next moon",
    execute(message, args) {
        message.channel.send(`The next full moon is on;
        :full_moon: June 24 (Strawberry Moon in Capricorn)`)
    }
}
