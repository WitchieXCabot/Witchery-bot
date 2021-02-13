const Discord = require('discord.js');

module.exports = {

    name: 'eightball',
    description: "this is fun 8ball command",
    execute(message, args) {
        var magickball = [
            ':8ball: Absolutly.', 
            ':8ball: Absolutly not.',
            ':8ball: It is true.',
            ':8ball: Impossible.',
            ':8ball: Of course.', 
            ':8ball: I do not think so.',
            ':8ball: It is true.',
            ':8ball: It is not true.',
            ':8ball: I am very undoubtful of that.',
            ':8ball: I am very doubtful of that.',
            ':8ball: Sources point to no.',
            ':8ball: Theories prove it.',
            ':8ball: Reply hazy try again',
            ':8ball: Ask again later',
            ':8ball: Better not tell you now',
            ':8ball: Cannot predict now', 
            ':8ball: Concentrate and ask again'
            ];
            let eightball = new Discord.MessageEmbed()
     .setDescription(magickball[Math.floor(Math.random() * magickball.length)])
 
     .setColor("#D21F3C")
 
     message.channel.send(eightball);
    }
}