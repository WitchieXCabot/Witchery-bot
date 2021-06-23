const { MessageEmbed, MessageAttachment } =  require("discord.js");

module.exports = {

    name: 'tarot',
    description: "this is a help embed",
    execute: async (message, args) => {
    if (message.guild.id !== '793162542729134120' && message.guild.id !== '790834414095040543' && message.guild.id !== '752356763268939876') return message.reply('This command can only be used in `2` server/s.')

    let card =  [
        {
            "name": "The Fool",
            "number": "0",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m00.jpg"
        },
        {
            "name": "The Magician",
            "number": "1",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m01.jpg"
        },
        {
            "name": "The High Priestess",
            "number": "2",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m02.jpg"
        },
        {
            "name": "The Empress",
            "number": "3",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m03.jpg"
        },
        {
            "name": "The Emperor",
            "number": "4",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m04.jpg"
        },
        {
            "name": "The Hierophant",
            "number": "5",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m05.jpg"
        },
        {
            "name": "The Lovers",
            "number": "6",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m06.jpg"
        },
        {
            "name": "The Chariot",
            "number": "7",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m07.jpg"
        },
        {
            "name": "Strength",
            "number": "8",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m08.jpg"
        },
        {
            "name": "The Hermit",
            "number": "9",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m09.jpg"
        },
        {
            "name": "Wheel of Fortune",
            "number": "10",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m10.jpg"
        },
        {
            "name": "Justice",
            "number": "11",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m11.jpg"
        },
        {
            "name": "The Hanged Man",
            "number": "12",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m12.jpg"
        },
        {
            "name": "Death",
            "number": "13",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m13.jpg"
        },
        {
            "name": "Temperance",
            "number": "14",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m14.jpg"
        },
        {
            "name": "The Devil",
            "number": "15",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m15.jpg"
        },
        {
            "name": "The Tower",
            "number": "16",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m16.jpg"
        },
        {
            "name": "The Star",
            "number": "17",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m17.jpg"
        },
        {
            "name": "The Moon",
            "number": "18",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m18.jpg"
        },
        {
            "name": "The Sun",
            "number": "19",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m19.jpg"
        },
        {
            "name": "Judgement",
            "number": "20",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m20.jpg"
        },
        {
            "name": "The World",
            "number": "21",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "cards/m21.jpg"
        },
        {
            "name": "Ace of Cups",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c01.jpg"
        },
        {
            "name": "Two of Cups",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c02.jpg"
        },
        {
            "name": "Three of Cups",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c03.jpg"
        },
        {
            "name": "Four of Cups",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c04.jpg"
        },
        {
            "name": "Five of Cups",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c05.jpg"
        },
        {
            "name": "Six of Cups",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c06.jpg"
        },
        {
            "name": "Seven of Cups",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c07.jpg"
        },
        {
            "name": "Eight of Cups",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c08.jpg"
        },
        {
            "name": "Nine of Cups",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c09.jpg"
        },
        {
            "name": "Ten of Cups",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/.jpg"
        },
        {
            "name": "Page of Cups",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c11.jpg"
        },
        {
            "name": "Knight of Cups",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c12.jpg"
        },
        {
            "name": "Queen of Cups",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c13.jpg"
        },
        {
            "name": "King of Cups",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "cards/c14.jpg"
        },
        {
            "name": "Ace of Swords",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s01.jpg"
        },
        {
            "name": "Two of Swords",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s02.jpg"
        },
        {
            "name": "Three of Swords",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s03.jpg"
        },
        {
            "name": "Four of Swords",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s04.jpg"
        },
        {
            "name": "Five of Swords",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s05.jpg"
        },
        {
            "name": "Six of Swords",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s06.jpg"
        },
        {
            "name": "Seven of Swords",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s07.jpg"
        },
        {
            "name": "Eight of Swords",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s08.jpg"
        },
        {
            "name": "Nine of Swords",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s09.jpg"
        },
        {
            "name": "Ten of Swords",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s10.jpg"
        },
        {
            "name": "Page of Swords",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s11.jpg"
        },
        {
            "name": "Knight of Swords",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s12.jpg"
        },
        {
            "name": "Queen of Swords",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s13.jpg"
        },
        {
            "name": "King of Swords",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "cards/s14.jpg"
        },
        {
            "name": "Ace of Wands",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w01.jpg"
        },
        {
            "name": "Two of Wands",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w02.jpg"
        },
        {
            "name": "Three of Wands",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w03.jpg"
        },
        {
            "name": "Four of Wands",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w04.jpg"
        },
        {
            "name": "Five of Wands",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w05.jpg"
        },
        {
            "name": "Six of Wands",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w06.jpg"
        },
        {
            "name": "Seven of Wands",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w07.jpg"
        },
        {
            "name": "Eight of Wands",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w08.jpg"
        },
        {
            "name": "Nine of Wands",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w09.jpg"
        },
        {
            "name": "Ten of Wands",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w10.jpg"
        },
        {
            "name": "Page of Wands",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w11.jpg"
        },
        {
            "name": "Knight of Wands",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w12.jpg"
        },
        {
            "name": "Queen of Wands",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w13.jpg"
        },
        {
            "name": "King of Wands",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "cards/w14.jpg"
        },
        {
            "name": "Ace of Pentacles",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p01.jpg"
        },
        {
            "name": "Two of Pentacles",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p02.jpg"
        },
        {
            "name": "Three of Pentacles",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p03.jpg"
        },
        {
            "name": "Four of Pentacles",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p04.jpg"
        },
        {
            "name": "Five of Pentacles",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p05.jpg"
        },
        {
            "name": "Six of Pentacles",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "p06.jpg"
        },
        {
            "name": "Seven of Pentacles",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p07.jpg"
        },
        {
            "name": "Eight of Pentacles",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p08.jpg"
        },
        {
            "name": "Nine of Pentacles",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "p09.jpg"
        },
        {
            "name": "Ten of Pentacles",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p10.jpg"
        },
        {
            "name": "Page of Pentacles",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "cards/p11.jpg"
        },
        {
            "name": "Knight of Pentacles",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'cards/p12.jpg'
        },
        {
            "name": "Queen of Pentacles",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'cards/p13.jpg'
        },
        {
            "name": "King of Pentacles",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": `cards/p14.jpg`
        },
    ];
        
        let c = card[Math.floor(Math.random() * card.length)];

        const a = new MessageAttachment(`${c.img}`, 'image.jpg');

        const tarot = new MessageEmbed()
        .setTitle(`${c.name}`)
        .setColor("#D21F3C")
        .setDescription(`Arcana: ${c.arcana}\nNumber: ${c.number}\nSuit: ${c.suit}`)
        .attachFiles(a)
        .setImage(`attachment://image.jpg`)
        message.channel.send(tarot);

    }
};