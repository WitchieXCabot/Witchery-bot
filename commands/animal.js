const Discord = require('Discord.js');

module.exports = {

    name: 'animal',
    description: "this is send you a random animal with a pic!",
    execute(message, args) {
        var animals = [
            "Panda",
            "dog",
            "bird",
            "cat",
            "bear",
            "worm",
            "zebra",
        ]
        message.channel.send("Animal: " + (animals[Math.floor(Math.random()* animals.length)]));
    }
}
