const Discord = require('discord.js');

module.exports = {

    name: 'fact',
    description: "this is fun fact command",
    execute(message, args) {
        var facts = [
            "Rosemary can be substituted for any herb!",
            "Witchcraft is practiced by both women and men.",
            "Countless men and women have been persecuted throughout history in suspicion of practicing witchcraft.",
            "There is a nearly 600-year-old legal book on witchcraft.",
            "The last time someone was convicted of witchcraft was in 1944",
            "Wiccan witches don't believe in the Devil.",
            "A witch's spellbook is called a Book of Shadows or a grimoire",
            "The Salem Witch Trials of 1692-1693 made it a mission to try and execute perceived witches",
            "154 prosecutions took place, 19 were executed – 13 women and 6 men - Salem Witch Trails",
            "Not all the trials occurred in Salem, Massachusetts, but the majority of them did. 42 out of 154 of the 1692 prosecutions were in Salem.",
            "When foraging, do not forget to thank for what you took. Thanks the gods, the fae, the earth, or whomever you worship, but do not just take.",
            "When trying to meditate, you are not actually doing anything wrong by being unable to “clear your mind.” The goal is not actually to have a blank mind, but an open and receptive one",
            "Wisdom is the combination of emotion and logic. To make a wise decision, validate the emotion and why it is being felt, look at the logic and the facts, and combine the information for the answer.",
            "Intent is the most powerful ingredient you have.",
            "You can practice both black and white magick at the same time.",
            "Never stop researching. You will never know everything.",
            "Deciding that you want to start to practicing witchcraft does NOT mean you have do denounce any previous beliefs.",
            "Orange peel bits can be used in spells for happiness, energy, and prosperity! It's also useful for teas.",
            "Sprinkle a watered down lavender spray on your blankets/pillows at night for relaxation and rest",
            "Meditate. even if its the only magick you can do! try energy work!!",
            "White Candles, Clear Quartz, Rosemary and Roses can be a substitute for anything",
            "Do research on your Deities and Divine beings so you don’t accidentally offend them!!!!",
            "Clockwise is for positive things, such as summonings, and Counter-clockwise is for negative things, such as banishings",
            "Never doubt your own power, you are more powerful than you realize, so be careful!",
            "Always, always, always do your research. Make sure that whatever you’re putting in your body or on your body (or your pets body) is safe.",
            "If you can’t get a lot of candles to seal your spell jars, melt crayons and use them! They’re wax as well and believe you me, it works.",
            "Warding doesn’t have to be complex- tape up sigils around your space, draw an evil eye talisman, sprinkle around some salt, whatever.",
            "don't make moon water in a glass jar when it's below freezing outside",
            "Rosemary: \ Helps alleviate muscle pain, improves memory & concentration, boosts the immune & circulatory system and aids digestion.",
            "Consider the mundane stores for most staple goods such as candles or herbs. ",
            "Thrift stores are amazing. Just sayin’. Be sure to cleanse whatever you do buy from there, though. ",
            "If you use Florida Water, there are recipes out there to make your own at home. You simply need alcohol, some herbs, and some flowers. ",
            "Essential oils and incense can give your room a nice scent, and can be used to cleanse your space.",
            "For those who can’t have a physical grimoire/book of shadows/spell book, Google drive, tumblr, and Pinterest are all good options.",
            "Runes can be painted/written onto coins, stones, or even bits of paper if you’re in a tight spot. ",
            "ANY notebook can hold a grimoire or book of spells!.",
            "Clay: \ Make statues and candle holders of your own, and even offering bowls to dietys!",
            "Tea/coffee magick every morning before school/work",
            "colour coordinate your outifit with your intent for the day",
            "if you struggle with getting to bed early, i’ve found meditating for like ten minutes before bed really helps",
            "Write out your plans for the day with intent to have things work out in the way you would like",
            "writing a protective sigil inside your door to avoid bad energies to enter your room",
            "white candles can replace any candle when doing candle magick",
            "clear quartz can replace any crystal",
            "write an affirmation in a bay leaf and burn it to manifest it",
            "always keep iron on you for protection",
            "put an amethyst under your pillow to sleep better and to recall your dreams",
            "drink mugwort tea for lucid dreaming/astral projection (don’t drink it if you are pregnant!!)",
            "Put your moisturiser on in the shape of a sigil before massaging it in",
            "Duck tape can be used for Energy, Binding and Cursing!",
            "Find something to be grateful for every day, whether it’s a big event or simply watching a bird landing on a tree outside of your window. "
             ];
                let RANDOM = new Discord.MessageEmbed()
        .setDescription(facts[Math.floor(Math.random() * facts.length)])
          
        .setTitle(' Here is your witchy Fact/Tip! ')
          
        .setColor("#D21F3C")
          
        .setTimestamp()
        
        .setFooter(`This is true!`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
          
        message.channel.send(RANDOM);
             
        
    }
}