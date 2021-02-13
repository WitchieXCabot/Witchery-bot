const Discord = require('discord.js');

module.exports = {

    name: 'ms',
    description: "this is to get ms of bot",
    execute(message, args) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}