const Discord = require('discord.js');
const config = require('../../settings/config');

module.exports = {
config: {
    name: 'colorfind',
    description: "this is a help embed",
    aliases: ["color", "findcolor"],
    example: `${config.PREFIX}color red`,
    category: "Divination"
},
run: async (bot, message, args) => {
    let white = new Discord.MessageEmbed()
        .setTitle('White')
        .setDescription('White is a color for both male and female. It is the unity of all colors. White is the color of godliness, cleanliness, purity, potential, protection, the moon, virginity, snow and ice. In magick, white is compatible with all colors. White is used in magick for achieving high spirituality, divination, seeking the truth, increasing psychic powers, protection, healing, peace and purification. White can be used in any spell or ritual as an enhancer.')
        .setThumbnail('http://telemediabroadcasting.com/wp-content/uploads/2016/03/WhiteBackground.jpg')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air', inline: true},
            { name: 'DIRECTION', value: 'East', inline: true},
            { name: 'PLANET', value: 'Moon/Mutable', inline: true},
            { name: 'DAY', value: 'Monday/Mutable', inline: true},
            { name: 'PLANT/HERB', value: 'Rosemary, Woodruff, Mugwort, Marigold, Mustard, Rue, Sage, Tansy, St. Johns Wort, Betony, Burdock, Mint, Fern, Elder Flower, Heather, Lilac, Lily, Mint, Dahlia, Gladiola', inline: false},
            { name: 'TAROT', value: 'The Fool', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let red = new Discord.MessageEmbed()
        .setTitle('Red')
        .setDescription('Red is a male color. Red is the color of fire, stimulation, intensity,action, passion, life and birth. When used in magick, it can be wild and unpredictable. Reds uses in magick are primarily for blood purifying, protection from fire, sexual dysfunctions, will, rashes and inflammations, violence, energy and stimulation, passion in love, change, transformation, loyalty, courage, marriages, lust, power, destroying, freedom, force, sexuality and marriage.')
        .setThumbnail('https://fabricville.com/media/catalog/product/cache/1/image/450x450/9df78eab33525d08d6e5fb8d27136e95/y/y/yy032-red.jpg')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Fire', inline: true},
            { name: 'DIRECTION', value: 'South', inline: true},
            { name: 'PLANET', value: 'Mars', inline: true},
            { name: 'DAY', value: 'Tuesday', inline: true},
            { name: 'PLANT/HERB', value: 'Sunflower, Nettles, Holy Thistle, Crowfoot, Hops, Wormwood (poisonous!), Cranesbill, Chili Pepper, Chives, Spikenard, Onion, Cornflower, Rose, Mustard, Garlic, Rosemary, Dill, Hibiscus, Woodruff, Tobacco, Pepperwort, Heather and Yew (poisonous).', inline: false},
            { name: 'TAROT', value: ' The Magi, Suit of Cups, the four Fives.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let yellow = new Discord.MessageEmbed()
        .setTitle('Yellow')
        .setDescription('Yellow is also a male color. Yellow is the color of intellect, thought, analysis, mental clarity, reason, optimism, movement, confidence, power of thought, logic, memory, creativity, sunlight, spiritual progress, faith and constancy. Yellows uses in magic include movement, aid in astral projection, increasing knowledge and understanding, telepathy, and direct contact with spirits, easy exchange of thoughts, harmonizing of will/emotions and protection.')
        .setThumbnail('https://kimscrane.com/shop/2270-thickbox_default/150-mm-40-sh-origami-paper-yellow-color-bulk.jpg')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air', inline: true},
            { name: 'DIRECTION', value: 'East', inline: true},
            { name: 'PLANET', value: 'Sun', inline: true},
            { name: 'DAY', value: 'Sunday- Mental Action \ Wednesday - Physical Actiony', inline: false},
            { name: 'PLANT/HERB', value: 'Laurel, Vine, Ash, Rue Marigold, St. Johns Wort, Centaury, Chamomile, Mistletoe, Saffron, Begonia, Geranium, Morning Glory, Snapdragon, Daffodil, Rosemary, Sunflower and Daisy.', inline: false},
            { name: 'TAROT', value: 'The four Knights and the four Sixes.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let blue = new Discord.MessageEmbed()
        .setTitle('Blue')
        .setDescription('Blue is a neutral color and applies equally to female and male. Blue promotes calming, tranquility, written and oral skills, sleep peace, loyalty, good will, purifying, protection, hope, sincerity, mature love and commitment, truth, patience, sleep, guidance and freedom. In magick blue is utilized for achieving equilibrium, peace and patience, communications, honor, health, friendships, dreams, sleep, inspiration, harmony in the home and meditations.')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Blue_Square.svg/999px-Blue_Square.svg.png')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Water', inline: true},
            { name: 'DIRECTION', value: 'West', inline: true},
            { name: 'PLANET', value: 'Neptune and Mercury', inline: true},
            { name: 'DAY', value: 'Monday/Moon = Lt Blues - peace, patience. Wednesday/Mercury= Blues - friendships, creativity, dreams. Thursday/Jupiter = Royal Blue - honor, happiness. Saturday/Saturn = Dark Blues - communication', inline: false},
            { name: 'PLANT/HERB', value: 'Carnation, Honeysuckle, Orange Heather, Cypress, Hazel, Oak Moss, Mallow, Aloe Vera Buttercup(communication), Daffodil and Babys Breath.', inline: false},
            { name: 'TAROT', value: 'The Heirophant and the Suit of Cups', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let black = new Discord.MessageEmbed()
        .setTitle('Black')
        .setDescription('Black is a male color. Black has the aspects of all elements, also, being void of all colors, it has the unique ability to absorb. Black is the color of quiet power, self-control, restriction, depression, sickness, changes, rebirth, wisdom, resilience and discipline. In magick, black is primarily used for uncrossing, binding negative forces, removing confusion from contact with spirits, banishing negative thoughts and situations, reversing, releasing and truth.')
        .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.7oiPI20TtX4JJM923laOBAD6D6&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air', inline: true},
            { name: 'DIRECTION', value: 'East', inline: true},
            { name: 'PLANET', value: 'Saturn', inline: true},
            { name: 'DAY', value: 'Saturday', inline: true},
            { name: 'PLANT/HERB', value: 'Oak, Yew, Beech, Elm, Comfrey, Holly, Ivy, Horsetail, Reeds, Solomons Seal, Mullein, Cedar, Clove, Cypress, Rue, Betony, Elder, Fern, Yarrow, Cayenne, Dragons Blood, Mandrake, Flax.', inline: false},
            { name: 'TAROT', value: 'the four Queens and the four Threes.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let green = new Discord.MessageEmbed()
        .setTitle('Green')
        .setDescription('Green is a neutral color and therefore applies to both male and female. Green promotes, and can be used in magick for, success, growth, prosperity, money, luck, fertility, wisdom, harmony, attitude changes, rejuvenation, teachings, resurrection, abundance, love and jealousy.')
        .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.A1Jz6056Zq7HZmoka8sHYQHaHa&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Earth', inline: true},
            { name: 'DIRECTION', value: 'North', inline: true},
            { name: 'PLANET', value: 'Venus, Jupiter and Mars', inline: true},
            { name: 'DAY', value: 'Friday/Venus - love, friendship \
            Wednesday/Mercury - business transactions \
            Thursday/Jupiter - Luck, prosperity', inline: false},
            { name: 'PLANT/HERB', value: 'Birch, Catnip, Blackberry Coltsfoot, Foxglove, Thyme, Yarrow, Feverfew, Burdock, Pennyroyal, Plaintain, Briar, Verbena, Elder, Basil, Cedarwood, Sage, Dill, Clove and Mugwort.', inline: false},
            { name: 'TAROT', value: 'The Emperor and the four Sevens again. Sometimes the Aces!', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let gold = new Discord.MessageEmbed()
        .setTitle('Gold')
        .setDescription('Gold is a male color. Gold channels the power of the Sun. It is the color of fortune, power, promotion, understanding and strength. In magick, gold is used for increasing understanding and knowledge, for harmonizing wills and emotions, for hope, fortune, money, healing, strength and success.')
        .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.RZxGGhDG8S8IWT760YMAFwHaEo&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Fire', inline: true},
            { name: 'DIRECTION', value: 'South', inline: true},
            { name: 'PLANET', value: 'Sun', inline: true},
            { name: 'DAY', value: 'Sunday- Mental/Physical Action \
            Monday - Mental Actions \
            Wednesday - Physical Actions', inline: false},
            { name: 'PLANT/HERB', value: 'Sunflower, Marigold, Buttercup, St. Johns Wort, Chamomile, Mistletoe, Saffron, Begonia, Geranium, Morning Glory, Snapdragon, Daffodil, Rosemary, and Daisy.', inline: false},
            { name: 'TAROT', value: 'None attributed', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let pink = new Discord.MessageEmbed()
        .setTitle('Pink')
        .setDescription('Pink is a female color. Pink is the color of heart-felt emotions. It is associated with the arts, inspiration, creativity, marriage, raise energies, new relationships, friendship, beauty, compassion, openness, intuition, warmth and self-love. Its uses in the practice of magick are primarily for attracting new loves, physical beauty, some skin disorders, asthma, bronchitis, bruises, fevers, nervousness, friendships, partnerships, romance, attraction, subtle sexual vibrations, inner harmony, calming and relaxing.')
        .setThumbnail('https://tse4.mm.bing.net/th?id=OIP.TJ7y_fItyuiofMb1ofhVBgHaFj&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Fire', inline: true},
            { name: 'DIRECTION', value: 'South', inline: true},
            { name: 'PLANET', value: 'Venus', inline: true},
            { name: 'DAY', value: 'Friday', inline: true},
            { name: 'PLANT/HERB', value: 'Aztec Lily, Beans, Bishops Weed, Violets, Winter Cherry, Dropwort, Feverfew, Cotton Rose, Basil, Coriander, Crocus, Avocado, Ginseng, Kava-Kava, Ladies Mantle, Yarrow, Yerba Santa, Maidenhair, Allspice, Pennyroyal.', inline: false},
            { name: 'TAROT', value: 'the four Sevens.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let orange = new Discord.MessageEmbed()
        .setTitle('Orange')
        .setDescription('Orange is another male color. Orange is the color of mental agility, eloquence and speech, health, ambition, personal creativity, balancing business, legal problems, memory and sharing. Orange combines the intellect of yellow with the vitality of red. Oranges uses in magic are for breaking spells, promoting personal creativity, increasing memory, healing nervous disorders, controlling runaway emotions, career, legal issues, balance and neutrality, organization, travel, writing, business transactions and obtaining information.')
        .setThumbnail('https://tse4.mm.bing.net/th?id=OIP.KovSwuYj--y1Vi2d3Cd1nAHaHa&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air/Fire', inline: true},
            { name: 'DIRECTION', value: 'East/South', inline: true},
            { name: 'PLANET', value: 'Mercury/Mars', inline: true},
            { name: 'DAY', value: 'Tuesday-Physical Action \
            Wednesday - Mental Action \
            Sunday - Both Actions', inline: false},
            { name: 'PLANT/HERB', value: 'Fern, Lily of the Valley, Marjoram Savory, Valerian, Vervain, Alstonia, Buckwheat, Calamint, Snapdragon, Flax, Senna, Wandering Jew, Mugwort, Rue, the same as the Red and Yellow for enhancements, Fenugreek, Gardenia.', inline: false},
            { name: 'TAROT', value: 'The four Eights.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let brown = new Discord.MessageEmbed()
        .setTitle('Brown')
        .setDescription('Brown is a female color. It is the color of the Earths energy, grounding, exercise, organization, solidity, the soil, practicality, solitude and honesty. Brown combines the prosperity of green with the intellect of yellow. Brown is used in magick primarily for centering, grounding, building, study, house and home, the accumulation of money and material things, healing plants and animals, finding lost items, gardening and decision-making.')
        .setThumbnail('https://tse1.explicit.bing.net/th?id=OIP.eYqQlfyxk0I7Kk5GVbGfFQHaE6&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Earth', inline: true},
            { name: 'DIRECTION', value: 'North', inline: true},
            { name: 'PLANET', value: 'Earth', inline: true},
            { name: 'DAY', value: 'Moon/Mondays - Tan Browns \
            Friday/Venus - All Browns \
            Saturday/Saturn - Dark Browns', inline: false},
            { name: 'PLANT/HERB', value: 'Corn, Tansy, Ginseng, Willow, Lily, Ivy, Grains, Oats, Mushrooms, Orange Tree, Almond, Begonia, Daisy, Brown includes all of the aspects of yellow and green.', inline: false},
            { name: 'TAROT', value: 'the four Pages and the four Tens', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let purple = new Discord.MessageEmbed()
        .setTitle('Purple')
        .setDescription('Purple is a male color. Purple is the color of royalty, charm, meditation, idealism, divination, progress, justice, mysticism, devotion, clairvoyance, luck, accomplishment and religion. In magick, purple is employed for protection, power, legal matters, divination, progress, the breaking of bad luck, the access of higher realms, driving away evil, to stop gossip or lies, material wealth, spirit contact and to enhance spiritual and psychic powers.')
        .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.FqXbNYzuUorJ-k3xf0_gnAHaFj&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air', inline: true},
            { name: 'DIRECTION', value: 'East', inline: true},
            { name: 'PLANET', value: 'Jupiter', inline: true},
            { name: 'DAY', value: 'Thursday', inline: true},
            { name: 'PLANT/HERB', value: 'Mimosa, Wisteria, Mugwort Hazel, Eyebright, Rowan, Elder, Rue, Shamrock, Clover, Oak, Dandelion, Betony, Meadowsweet, Begonia, Cactus, Dahlia, Iris, Violet.', inline: false},
            { name: 'TAROT', value: 'The Chariot and the four Fours.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let gray = new Discord.MessageEmbed()
        .setTitle('gray')
        .setDescription('Gray is both a male and female color. Gray is a color of darkness tempered by light, a color of neutrality, complexity, peace, a balancer of positive and negative. Gray is used in magick to achieve balance, for attuning to the spirit world, to learn peace and patience, veiling, invisibility, vision quests, theft and dreams.')
        .setThumbnail('https://tse3.mm.bing.net/th?id=OIP.nueUSftf4o59NaXufmwYAQHaHa&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Water', inline: true},
            { name: 'DIRECTION', value: 'West', inline: true},
            { name: 'PLANET', value: 'Moon', inline: true},
            { name: 'DAY', value: 'Monday', inline: true},
            { name: 'PLANT/HERB', value: 'Clove, Hyssop, Oak Moss, St. Johns Wort, Rosemary, Yew, Cumin, Birch, Blackthorn, Feverfew.', inline: false},
            { name: 'TAROT', value: 'The Hanged Man, the four Threes', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()

        let silver = new Discord.MessageEmbed()
        .setTitle('Silver')
        .setDescription('Silver is a female color. Silver has similar qualities to white and is the color for purity, protection, ice, stars, potential and fame. Silvers uses in magick include divination, clairvoyance, energy, inspiration, defense and repelling spells.')
        .setThumbnail('https://tse1.explicit.bing.net/th?id=OIP.3JZ12HY8MVZl842tPLxdzgHaEK&pid=Api')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ELEMENT', value: 'Air', inline: true},
            { name: 'DIRECTION', value: 'East', inline: true},
            { name: 'PLANET', value: 'Moon/Mutable', inline: true},
            { name: 'DAY', value: 'Monday/Mutable', inline: true},
            { name: 'PLANT/HERB', value: 'Rosemary, Woodruff, Mugwort, Marigold, Mustard, Rue, Sage, Tansy, St. Johns Wort, Betony, Burdock, Mint, Fern, Elder Flower, Heather, Lilac, Lily, Mint, Dahlia, Gladiola.', inline: false},
            { name: 'TAROT', value: 'None attributed.', inline: true}
        )
            .setColor("#D21F3C")
            .setTimestamp()


        
        if (!args.length) {
			return message.channel.send(`You didn't provide any color, ${message.author}!`);
		} else if (args[0] === 'white') {
			return message.channel.send(white);
		} else if (args[0] === 'red') {
			return message.channel.send(red);
		} else if (args[0] === 'black') {
			return message.channel.send(black);
		} else if (args[0] === 'yellow') {
			return message.channel.send(yellow);
		} else if (args[0] === 'blue') {
			return message.channel.send(blue);
		} else if (args[0] === 'green') {
			return message.channel.send(green);
		} else if (args[0] === 'gold') {
			return message.channel.send(gold);
		} else if (args[0] === 'pink') {
			return message.channel.send(pink);
		} else if (args[0] === 'orange') {
			return message.channel.send(orange);
		} else if (args[0] === 'brown') {
			return message.channel.send(brown);
		} else if (args[0] === 'purple') {
			return message.channel.send(purple);
		} else if (args[0] === 'grey') {
			return message.channel.send(grey);
		} else if (args[0] === 'silver') {
			return message.channel.send(silver);
		}
    }
};