const { MessageEmbed, MessageAttachment } =  require("discord.js");
 
module.exports = {
    config: {
        name: 'tarotpepe',
        category: "divination",
        aliases: ["pep", "pepe"],
        description: "Tarot card command",
    },
    run: async (bot, message, args) => {   

        let pixel =  [
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/1 - 4UB0din.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/2 - YMHLODM.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/3 - ZEtGABP.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/4 - oKAV4We.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/5 - hj9GXIj.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/6 - TXSNjSk.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/7 - RLKsDOV.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/8 - Qvk8o3u.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/9 - uDMXTf8.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/10 - ZBVootQ.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/11 - 9k6yJBA.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/12 - o79RdDw.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/13 - YhWgeVV.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/14 - MOe9dun.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/15 - y3r3H7c.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/16 - NqnzELK.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/17 - 2L6LSvO.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/18 - P3atLd7.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/19 - 8oLi7vv.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/20 - SusR7tD.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/21 - 0bNwafz.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/22 - Y2LABcM.gif",
                "deck": "Animated pepe tarot"

            }
        ];

            let c6 = pixel[Math.floor(Math.random() * pixel.length)];

            const f = new MessageAttachment(`${c6.img}`, 'image.gif');
    
            const pix = new MessageEmbed()
            .setTitle(`${c6.name}`)
            .setDescription(`Arcana: ${c6.arcana}\nNumber: ${c6.number}\nSuit: ${c6.suit}`)
            .addField("Meaning:", "Meanings added soon")
            .attachFiles(a)
            .setImage(`attachment://image.gif`)
            .setFooter("Deck: Animated Pepe Tarot")
            .setColor(`#D21F3C`)

            message.channel.send(pix);
    }
}