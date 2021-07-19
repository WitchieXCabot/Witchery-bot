const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'shadow',
    category: "witchy",
    description: "this is a shadow embed",
},
    run: async (bot, message, args) => {
        if (message.guild.id === `793162542729134120`) {
            var shadow = new MessageEmbed()
            .setTitle(' Shadow work ')
            .setColor("#D21F3C")
            .setDescription(``)
            .addField(`Regecting Your shadow`, `Rejecting, suppressing, denying, or disowning your Shadow, whether consciously or unconsciously, is a dangerous thing. The thing about the Shadow Self is that it seeks to be known. It wants to be understood, explored, and integrated. The longer the Shadow stays buried and locked in its jail cell deep within the unconscious, the more it will find opportunities to make you aware of its existence.
             Issues that arise when we reject our Shadow side can include:
            
            Hypocrisy
            Lies
            Uncontrollable bursts of rage/anger
            Emotional and mental manipulation of others
            Greed and addictions
            Phobias and obsessive compulsions
            ||Racist, sexist, homophobic, and other offensive behavior||
            Intense anxiety
            Chronic psychosomatic illness
            ||Depression (which can turn into suicidal tendencies)||
            ||Sexual perversion||
            Narcissistically inflated ego
            Chaotic relationships with others
            Self-absorption
            Self-sabotage`)
            .addField(`Benefits of shadow work`, `Deeper love and acceptance of yourself
            Better relationships with others, including your partner and children
            More confidence to be your authentic self
            More mental, emotional, and spiritual clarity
            Increased compassion and understanding for others, particularly those you dislike
            Enhanced creativity
            Discovery of hidden gifts and talents
            Deepened understanding of your passions and ultimate life purpose
            Improved physical and mental health
            More courage to face the unknown and truly live life
            Access to your Soul or Higher Self
            A feeling of Wholeness
            \`It’s important to remember that there are no quick fixes in Shadow Work, so these life-changing benefits don’t just happen overnight\``)
            .setFooter('Remember to do your own extensive research!')

            message.channel.send(shadow);
        }
        else{
            var shadow = new MessageEmbed()
            .setTitle(' Shadow work ')
            .setColor("#D21F3C")
            .addField(`————What is is————`, `~•Shadow work is the process of exploring your inner shadow self or darkness.
            ~•Shadow work uncovers every part of you that you've concealed, rejected or disowned and it's a path to enlightenment. It helps us heal and it's uncovers things Ex. If you have anxiety it's will  show you how/where/when it started. It uncovers trauma to heal it, acknowledging and healing the not to good parts about us.`)
            .setFooter('Remember to do your own extensive research!')

            message.channel.send(shadow);
        }
    }
}