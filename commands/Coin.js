const Discord = require('Discord.js');

module.exports = {

    name: 'coin',
    description: "this flips a coin",
    execute(message, args) {
        var hd = [
            "Heads",
            "Tails"
          ]
          message.channel.send(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random()* hd.length)]));
    }
}
