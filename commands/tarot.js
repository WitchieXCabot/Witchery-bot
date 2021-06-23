const { MessageEmbed, MessageAttachment } =  require("discord.js");

module.exports = {

    name: 'tarot',
    description: "this is a help embed",
    execute: async (message, args) => {
    if (message.guild.id !== '793162542729134120' && message.guild.id !== '752356763268939876' && message.guid.id !== '790834414095040543') return message.reply('This command can only be used in `2` server/s.')

    let card =  [
        {
            "name": "The Fool",
            "number": "0",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m00.jpg"
        },
        {
            "name": "The Magician",
            "number": "1",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m01.jpg"
        },
        {
            "name": "The High Priestess",
            "number": "2",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m02.jpg"
        },
        {
            "name": "The Empress",
            "number": "3",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m03.jpg"
        },
        {
            "name": "The Emperor",
            "number": "4",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m04.jpg"
        },
        {
            "name": "The Hierophant",
            "number": "5",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m05.jpg"
        },
        {
            "name": "The Lovers",
            "number": "6",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m06.jpg"
        },
        {
            "name": "The Chariot",
            "number": "7",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m07.jpg"
        },
        {
            "name": "Strength",
            "number": "8",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m08.jpg"
        },
        {
            "name": "The Hermit",
            "number": "9",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m09.jpg"
        },
        {
            "name": "Wheel of Fortune",
            "number": "10",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m10.jpg"
        },
        {
            "name": "Justice",
            "number": "11",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m11.jpg"
        },
        {
            "name": "The Hanged Man",
            "number": "12",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m12.jpg"
        },
        {
            "name": "Death",
            "number": "13",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m13.jpg"
        },
        {
            "name": "Temperance",
            "number": "14",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m14.jpg"
        },
        {
            "name": "The Devil",
            "number": "15",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m15.jpg"
        },
        {
            "name": "The Tower",
            "number": "16",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m16.jpg"
        },
        {
            "name": "The Star",
            "number": "17",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m17.jpg"
        },
        {
            "name": "The Moon",
            "number": "18",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m18.jpg"
        },
        {
            "name": "The Sun",
            "number": "19",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m19.jpg"
        },
        {
            "name": "Judgement",
            "number": "20",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m20.jpg"
        },
        {
            "name": "The World",
            "number": "21",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/m21.jpg"
        },
        {
            "name": "Ace of Cups",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c01.jpg"
        },
        {
            "name": "Two of Cups",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c02.jpg"
        },
        {
            "name": "Three of Cups",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c03.jpg"
        },
        {
            "name": "Four of Cups",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c04.jpg"
        },
        {
            "name": "Five of Cups",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c05.jpg"
        },
        {
            "name": "Six of Cups",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c06.jpg"
        },
        {
            "name": "Seven of Cups",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c07.jpg"
        },
        {
            "name": "Eight of Cups",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c08.jpg"
        },
        {
            "name": "Nine of Cups",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c09.jpg"
        },
        {
            "name": "Ten of Cups",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/.jpg"
        },
        {
            "name": "Page of Cups",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c11.jpg"
        },
        {
            "name": "Knight of Cups",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c12.jpg"
        },
        {
            "name": "Queen of Cups",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c13.jpg"
        },
        {
            "name": "King of Cups",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/c14.jpg"
        },
        {
            "name": "Ace of Swords",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s01.jpg"
        },
        {
            "name": "Two of Swords",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s02.jpg"
        },
        {
            "name": "Three of Swords",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s03.jpg"
        },
        {
            "name": "Four of Swords",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s04.jpg"
        },
        {
            "name": "Five of Swords",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s05.jpg"
        },
        {
            "name": "Six of Swords",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s06.jpg"
        },
        {
            "name": "Seven of Swords",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s07.jpg"
        },
        {
            "name": "Eight of Swords",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s08.jpg"
        },
        {
            "name": "Nine of Swords",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s09.jpg"
        },
        {
            "name": "Ten of Swords",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s10.jpg"
        },
        {
            "name": "Page of Swords",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s11.jpg"
        },
        {
            "name": "Knight of Swords",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s12.jpg"
        },
        {
            "name": "Queen of Swords",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s13.jpg"
        },
        {
            "name": "King of Swords",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/s14.jpg"
        },
        {
            "name": "Ace of Wands",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w01.jpg"
        },
        {
            "name": "Two of Wands",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w02.jpg"
        },
        {
            "name": "Three of Wands",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w03.jpg"
        },
        {
            "name": "Four of Wands",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w04.jpg"
        },
        {
            "name": "Five of Wands",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w05.jpg"
        },
        {
            "name": "Six of Wands",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w06.jpg"
        },
        {
            "name": "Seven of Wands",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w07.jpg"
        },
        {
            "name": "Eight of Wands",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w08.jpg"
        },
        {
            "name": "Nine of Wands",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w09.jpg"
        },
        {
            "name": "Ten of Wands",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w10.jpg"
        },
        {
            "name": "Page of Wands",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w11.jpg"
        },
        {
            "name": "Knight of Wands",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w12.jpg"
        },
        {
            "name": "Queen of Wands",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w13.jpg"
        },
        {
            "name": "King of Wands",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/w14.jpg"
        },
        {
            "name": "Ace of Pentacles",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p01.jpg"
        },
        {
            "name": "Two of Pentacles",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p02.jpg"
        },
        {
            "name": "Three of Pentacles",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p03.jpg"
        },
        {
            "name": "Four of Pentacles",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p04.jpg"
        },
        {
            "name": "Five of Pentacles",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p05.jpg"
        },
        {
            "name": "Six of Pentacles",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p06.jpg"
        },
        {
            "name": "Seven of Pentacles",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p07.jpg"
        },
        {
            "name": "Eight of Pentacles",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p08.jpg"
        },
        {
            "name": "Nine of Pentacles",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p09.jpg"
        },
        {
            "name": "Ten of Pentacles",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p10.jpg"
        },
        {
            "name": "Page of Pentacles",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p11.jpg"
        },
        {
            "name": "Knight of Pentacles",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p12.jpg'
        },
        {
            "name": "Queen of Pentacles",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p13.jpg'
        },
        {
            "name": "King of Pentacles",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": `C:/Users/josej/Documents/GitHub/WItchery-0.3.0/cards/p14.jpg`
        },
    ];
        
        let c = card[Math.floor(Math.random() * card.length)];

        const a = new MessageAttachment(`${c.img}`, 'image.jpg');

        const tarot = new MessageEmbed()
        .setTitle(`${c.name}`)
        .setDescription(`Arcana: ${c.arcana}\nNumber: ${c.number}\nSuit: ${c.suit}`)
        .attachFiles(a)
        .setImage(`attachment://image.jpg`)
        message.channel.send(tarot);

    }
};