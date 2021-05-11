const Discord = require('discord.js');

module.exports = {

    name: 'moon',
    description: "this is a next moon",
    execute(message, args) {
        message.channel.send(`The next new moon is on;
        :new_moon: May 11 (in Taurus)`)
    }
}
