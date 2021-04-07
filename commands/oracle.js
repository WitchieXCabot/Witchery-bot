const talkedRecently = new Set();

const Discord = require('discord.js');

module.exports = {

    name: 'oracle',
    description: "this is a help embed",
    execute: async (message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 12 hours before executing  again. - " + message.author);
    } else {


        const one = new Discord.MessageEmbed()
                        .setTitle('The protection that you need is courage')
                        .setDescription(`This is a very simple and straight forward message. Everyone feels insecure and faces trials 
                        and challenges but with bravery, courage, and valor you can overcome any challenge that you 
                        are facing. Courage is the armor that can protect you from any hardship.
                        In a love reading this card would mean that you need to act with courage to protect your 
                        emotions, your soul and also your loved ones.
                        In a career reading this card would mean that you should learn to stand for your rights and 
                        take bold steps with courage.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/dd/17/15/dd1715cc80d63cb64ba128febaa5b900.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                    
                const two = new Discord.MessageEmbed()
                        .setTitle('Determination is your strength')
                        .setDescription(`You are a determined person and you overcome any obstacle and challenge that might come 
                        your way with your strong will and determination. You should use this strength of yours with the 
                        wisdom that you have.
                        In a love spread this card would mean that you should live your love life with the 
                        determination of adding more beauty and more passion to it every day.
                        In a career spread this card would mean that you should use your strength of determination 
                        and willpower to achieve your goals.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/76/27/c2/7627c23bcc41562ad575bf1e95de8016.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const three = new Discord.MessageEmbed()
                        .setTitle('Choose Joy')
                        .setDescription(`Joy, happiness, pleasure and contentment are true colors of life. No matter how things may 
                        go, choose joy. Being happy is a choice that you make.
                        In a love reading this card would mean that make a deliberate effort to add more happiness
                        to your life and to the life of your partner. If you are single then learn to be happy in your 
                        circumstances and you will attract the right person.
                        In a career reading this card would mean that do what gives you joy. Joy and happiness will 
                        bring success to your work life.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/fb/fa/02/fbfa02883c3838be0ab92ed880605dc7.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const four = new Discord.MessageEmbed()
                        .setTitle('Open the Lines of Communication')
                        .setDescription(`Communication is the strength of any relationship, whether it is a love relationship or a 
                        work
                        If you get this card, analyze your life. Have you cut communication with someone? Is it a 
                        relative? Is it an old friend? Are you inaccessible and difficult to talk to?
                        Open the lines of communication and the universe will take care of the rest.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/1d/e5/82/1de582ddac891d342fb055e10e656374.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const five = new Discord.MessageEmbed()
                        .setTitle('Love yourself a little more')
                        .setDescription(`Self-love is the most important thing. This card gives you the message to love yourself more 
                        as you deserve it. Stop focusing on the negative aspects of yourself but enjoy and cherish what 
                        you have. Love to appreciate your body and your soul. Love the blessings that surround you. 
                        Love the beauty that you have, inside and out. Love yourself more and love will surround you.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/f4/95/93/f49593c09cca57bb23c8f3f9a3eb0a44.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const six = new Discord.MessageEmbed()
                        .setTitle('Purity of heart will make you see')
                        .setDescription(`Sometimes we get blindfolded by the hate, jealousy and negative thoughts that we hold 
                        inside. We are unable to see the true nature of the people and cannot appreciate the true light in 
                        which things should appear. It is time to purify your heart from all the negativity. Let go of all the grudges and all the hate that you had been nurturing for a long time. A clean and clear heart 
                        will make you see the true colors of your soul and others.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/c5/5b/20/c55b201679aeb6a77bb7ecc4b3f17fac.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const seven = new Discord.MessageEmbed()
                        .setTitle('You will make your own luck')
                        .setDescription(`Nothing is unchangeable, fixed or set in the stone. You have the ability and potential to make 
                        your own luck and you will make it. All you need to do is to put some effort. If this is about your 
                        love life, take the initiative and make it work. If this is your career then everything is also in your 
                        own hands.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/9b/4b/b0/9b4bb0ee304115f06cf905eb1063b184.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const eight = new Discord.MessageEmbed()
                        .setTitle('We are alive within mysteries')
                        .setDescription(`Everything is a mystery, our existence, our universe, the way we think, the way we perceive. 
                        These are the mysteries that we live in since we open our eyes. If the situation is hiding itself or 
                        the other person is not being very clear, do not fret, as we are alive within mysteries.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/4d/c7/68/4dc7689acc1c90bfc3370e22e4e61fc5.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const nine = new Discord.MessageEmbed()
                        .setTitle('Love is what you do')
                        .setDescription(`Red candle is all about love, passion, desires and relationships and no relationship can 
                        survive without love. Love shouldn’t be the thing that you should demand, or you should get. 
                        Love is something that you should do, that you can do and that you actually do. Love what you 
                        do and do what you love.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/a9/51/37/a95137a08ae8ac96c46fda1579c900cd.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const ten = new Discord.MessageEmbed()
                        .setTitle('Beauty is being in harmony with what you are')
                        .setDescription(`This pink candle is beautiful and so are you. You are beautiful because you know how to get 
                        in tune with your soul. Learn about your talents, explore your potential and learn to use your 
                        inner resources, whether it is creativity, wisdom, or purity of heart. Bring your positives to the 
                        surface, polish your talents and bring beauty to your life.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/33/f6/c5/33f6c545d6ff28179e71f1043042413b.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const eleven = new Discord.MessageEmbed()
                        .setTitle('Creativity is just connecting things')
                        .setDescription(`But how good are you at it? Do you need to connect the dots in a past situation or do you 
                        need to connect some new dots? It is time to connect the things and let your creative energies 
                        flow, whether it is your love life or work life, be creative.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/69/db/9f/69db9fb95acf8c58ddadf6f4e9364add.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twelve = new Discord.MessageEmbed()
                        .setTitle('Healing is in control now')
                        .setDescription(`If you were ill or facing a challenge, now you have to be sure that healing is in control. It is 
                        time to revive and revitalize. Just give charge to healing and enjoy the bounty of health and wellbeing`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/61/54/d2/6154d232c8e6f3c237370c67598587d0.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const thirteen = new Discord.MessageEmbed()
                        .setTitle('Be true to your friend')
                        .setDescription(`We cannot survive living this life alone. All of us need company and a companion.
                        You have to be true to that one person who cares. This friend can be anyone, your parents, 
                        your kids, your spouse or literally a friend. Just be true to them. Vent out in front of them if you 
                        need to. You need this support and they will give you that.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/e5/22/69/e522697b056ca702085587e04cbe7ea3.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const fourteen = new Discord.MessageEmbed()
                        .setTitle('Find stability in yourself')
                        .setDescription(`Brown is the color of steadiness and stability. If you are seeking stability now, you need to 
                        look no further. The stability is within you.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/e6/92/15/e692155f6cf6440fd3975aa2998c8a11.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const fifteen = new Discord.MessageEmbed()
                        .setTitle(' Gratitude builds a bridge to abundance                        ')
                        .setDescription(`If you want to bring abundance to your life, start with being thankful for what you already 
                        have. Tell the universe that you deserve all that you already have and you are worthy of more. 
                        Enjoy the blessings with a thankful heart whether it is love, money or health and abundance of 
                        all these pleasures will be there.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/85/f9/f7/85f9f77b0439f3df79d0ff3e25a8c34e.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const sixteen = new Discord.MessageEmbed()
                        .setTitle('Forgiveness is just another name of Freedom')
                        .setDescription(`If you want to live a free life, start with forgiveness. Forgive others but first of all, forgive 
                        yourself. All of us are fighting a battle here and we do not know what we are doing. Just forgive 
                        and forget. Set them free and more importantly, set yourself free.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/10/49/0f/10490faadabc6596c84f7a3612ceb5a2.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const seventeen = new Discord.MessageEmbed()
                        .setTitle('Fortune favors the Brave')
                        .setDescription(`Take bold steps and act bravely. Truth and bravery are two most important traits. When you 
                        are brave, no one would be able to take what is yours. Remember that fortune favors the brave.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/d6/f3/e9/d6f3e9ef1a366f159c7dec24cf50f8da.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const eightteen = new Discord.MessageEmbed()
                        .setTitle('Life depends on change and renewal')
                        .setDescription(`When an old thing is gone, it makes room for a new thing. Life depends on change and 
                        renewal. If you get this card, learn to accept this reality. Do not mourn about what is gone but 
                        get ready for a change. This card also tells you to DE clutter your home and your life. Make room 
                        for changes and be open and flexible.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/7d/e2/81/7de28176508a62ee93f37e1af86165dc.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const nineteen = new Discord.MessageEmbed()
                        .setTitle('Vibrate good energy, attract good energy')
                        .setDescription(`Life is all about Karma. You get what you give so vibrate good energy, spread love, greet 
                        others with kindness and universe will return all this to you.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/0d/21/0b/0d210bdeb9eac2ce6e660e7d9f24f37a.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twenty = new Discord.MessageEmbed()
                        .setTitle('You are worthy of the trip')
                        .setDescription(`Take it in the literal meaning, travel, enjoy life and also trust yourself. You are beautiful 
                        inside and out and full of qualities. You are totally worthy of the trip.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/e0/d4/54/e0d45498ac031a79dc49d84900340be7.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentyone = new Discord.MessageEmbed()
                        .setTitle('You are a Soul, you have a body')
                        .setDescription(`We always thing that we are a body and we have soul, but the reality is totally different. You 
                        are a soul and you have a body, so learn to get connected to your soul. Make a connection with 
                        the spiritual world. There is much more to life than what is visible.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/5b/d2/18/5bd2184424a68c8f6042e2acadce89dc.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentytwo = new Discord.MessageEmbed()
                        .setTitle('Focus on what excites you')
                        .setDescription(`Living life to the fullest is about joy, happiness and excitement. It is not necessary if one 
                        thing excites a person; it excites the other as well. Focus on what excites you. This is the key to 
                        happiness.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/e1/49/7f/e1497f02f658483b6e21c0820b657366.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentythree = new Discord.MessageEmbed()
                        .setTitle('You should be real, not perfect')
                        .setDescription(`The standards of perfection, set by others are not necessarily right for you. Everyone has 
                        their own purpose and their own reality. Being real is all that matters as perfection doesn’t have
                        a set standard.
                        `)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/f1/4b/c7/f14bc75eb85acf0158338f8b2f26fc5f.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentyfour = new Discord.MessageEmbed()
                        .setTitle('When it hurts, observe')
                        .setDescription(`Wisdom comes from learning from your experiences. What is done is done but you shouldn’t 
                        repeat this mistake again. If it hurts, observe and introspect the situation. You will learn a lot for 
                        the future. Also if this card appears in a relationship, try to understand that what is hurting the 
                        other person so they hurt you. Just observe and you will understand much deeper wisdom.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/58/40/da/5840da178052a169fffef63a3580ad4d.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentyfive = new Discord.MessageEmbed()
                        .setTitle('Admit it, say it')
                        .setDescription(`Being quiet is sometimes good but in some cases admitting your true feelings and expressing 
                        those helps more. So just admit it and say it.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/35/2b/f4/352bf472fa15f303a54924b0fd17e66a.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentysix = new Discord.MessageEmbed()
                        .setTitle('Be neutral if you cannot take stand')
                        .setDescription(`There are many situations when we cannot take stand for someone and also not for 
                        ourselves. In such cases, just be neutral; do not turn against the weak.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/de/eb/74/deeb742c653d49397f1bd67d225c289a.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()
                const twentyseven = new Discord.MessageEmbed()
                        .setTitle('Trust but verify')
                        .setDescription(`Trust the other person, trust your guts, trust the situation but be careful. Verify first.`)
                        .setColor("#D21F3C")
                        .setImage('https://i.pinimg.com/originals/62/ca/43/62ca43d1e9a776c5b9d0fbd6286d5fbf.png')
                        .setFooter('**This is a daily command!**')
                        .setTimestamp()



            var embedArr = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eightteen, nineteen, twenty, twentyone, twentytwo, twentytwo, twentyfour,twentyfour, twentysix, twentyseven];
            let randomEmbed = embedArr[Math.floor(Math.random() * embedArr.length)];
            message.channel.send(randomEmbed);

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 43200000);
    }

    }
}