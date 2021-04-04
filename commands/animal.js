const Discord = require('discord.js');

module.exports = {

    name: 'animal',
    description: "this is send you a random animal with a pic!",
    execute(message, args) {
        var animals = [
            "Panda '<828159156782891038>'",
            "dog '<489818863341535247>'",
            "bird",
            "cat",
            "bear",
            "worm",
            "zebra",
        ]
        message.channel.send("Animal: " + (animals[Math.floor(Math.random()* animals.length)]));
    }
}
