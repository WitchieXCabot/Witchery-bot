const Discord = require('discord.js');

module.exports = {

    name: 'herbfind',
    description: "this is a help embed",
    execute: async (message, args) => {
        if (message.guild.id !== '752356763268939876' && message.guild.id !== '790834414095040543' && message.guild.id !== '793162542729134120') return message.reply('This command can only be used in `2` server/s.')

        const color = "#D21F3C"

        let warning = new Discord.MessageEmbed()
        .setTitle('ERR!')
        .setDescription('\n`\`\`diff\n-WARNING: You didn\'t provide any herb/plant/flower! \`\`\` `\`\`diff\n+use `Wherbfind list` for a full list of herbs\`\`\`')
        .setColor(color)



        let list = new Discord.MessageEmbed()
        .setTitle('Herb list')
        .setDescription('\n`\`\`js\n 1) allspice \n2) almond \n3) aloe \n4) anise \n5) apple \n6) avocado \n7) basil \n8) bayLaurel \n9) bergamot \n10) birch \`\`\`')
        .setColor(color)
        .setTimestamp()


        let allspice = new Discord.MessageEmbed()
        .setTitle('Allspice')
        .setDescription('Money, luck, healing, obtaining treasure. Provides added determination and energy to any spells and charms. Burn crushed allspice to attract luck and money. Use in herbal baths for healing.')
        .setThumbnail('https://www.spicemountain.co.uk/wp-content/uploads/2019/10/allspice_1046861527.jpg')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Also Called:', value: 'Jamaica Pepper', inline: true},
            { name: 'Gender', value: 'Masculine', inline: true},
            { name: 'Planet', value: 'Mars', inline: true},
            { name: 'Element', value: 'Fire', inline: true},
            { name: 'Native to', value: 'the Greater Antilles, southern Mexico, and Central America', inline: true},
            { name: 'Binomial name', value: 'Pimenta dioica', inline: true},
            { name: 'Recipes', value: '```https://www.allrecipes.com/recipes/1125/ingredients/herbs-and-spices/spices/allspice/```', inline: false},
        )
            .setColor(color)
            .setTimestamp()


        let almond = new Discord.MessageEmbed()
        .setTitle('Almond')
        .setDescription('Wisdom, money, fruitfulness, and prosperity. Invokes the healing energy of the deities. Provides magickal help for overcoming dependencies & addiction. Associated with Candlemas and Beltane. Carry, wear, or use as incense to attract abundance.')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg/1280px-Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg')
        .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Also Called:', value: 'Greek Nuts, Shakad', inline: true},
                { name: 'Gender', value: 'Masculine', inline: true},
                { name: 'Planet', value: 'Mercury', inline: true},
                { name: 'Element', value: 'Air', inline: true},
                { name: 'Native to', value: 'Iran', inline: true},
                { name: 'Binomial name', value: 'Prunus dulcis', inline: true},
                { name: 'Recipes', value: '```https://www.allrecipes.com/recipes/17574/ingredients/nuts-and-seeds/almonds/```', inline: false},
        )
            .setColor(color)
            .setTimestamp()

        let aloe = new Discord.MessageEmbed()
        .setTitle('Aloe')
        .setDescription('Protection and luck. Place on the grave of a loved one to promote peaceful energy. Thought to relieve loneliness and assist with success. Hang in the home to attract luck and protection for those who live there. Grow in the home to provide protection from household accidents. Burn on the night of a full moon to bring a new lover by the new moon.')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Split_Aloe.jpg/800px-Split_Aloe.jpg')
        .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Also Called:', value: 'Burn Plant, Medicine Plant', inline: true},
                { name: 'Gender', value: 'Feminine', inline: true},
                { name: 'Planet', value: 'Moon', inline: true},
                { name: 'Element', value: 'Water', inline: true},
                { name: 'Native to', value: 'Tropical and southern Africa, Madagascar, Jordan', inline: true},
                { name: 'Binomial name', value: 'Aloe perfoliata', inline: true},
                { name: 'Recipes', value: '```https://www.allrecipes.com/recipe/236221/green-drink-with-aloe-vera-juice/```', inline: false},
        )
            .setColor(color)
            .setTimestamp()

            let anise = new Discord.MessageEmbed()
            .setTitle('Anise')
            .setDescription('Used to help ward off the evil eye, find happiness, and stimulate psychic ability. Fill a sleep pillow with anise seed to prevent disturbing dreams. Use to invoke Mercury and Apollo. Great for aromatherapy. Use in purification baths with bay leaves. A sprig of Anise hung on the bedpost will restore lost youth. Use in protection and meditation incenses.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Aniseed_plant_%28Flora_of_Sindh%29.jpg/800px-Aniseed_plant_%28Flora_of_Sindh%29.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Aniseed, Anneys, Anise Seed', inline: true},
                    { name: 'Gender', value: 'Masculine', inline: true},
                    { name: 'Planet', value: 'Moon', inline: true},
                    { name: 'Element', value: 'Air', inline: true},
                    { name: 'Native to', value: ' eastern Mediterranean region and Southwest Asia', inline: true},
                    { name: 'Binomial name', value: 'Pimpinella anisum', inline: true},
                    { name: 'Recipes', value: '```https://www.allrecipes.com/search/results/?search=anise```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            let apple = new Discord.MessageEmbed()
            .setTitle('Apple')
            .setDescription('Love, Garden Magick, Immortality, Friendship, Healing. Place seven apple seeds in a bag with Orris Root to attract sexual love. Use in rituals to give honor to gods and goddesses of fertility. Considered the food of the dead, which is why Samhain is called the `Feast of Apples`. Symbolizes the soul and is burned at Samhain in honor of those who will be reborn in the spring. When doing a house blessing, cut an apple in half -- eat half and put the other half outside of the home as an offering.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/2/22/Malus_domestica_a1.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Fruit of the Underworld, Fruit of the Gods, Silver Brough, Silver Branch, Tree of Love', inline: true},
                    { name: 'Gender', value: 'Feminine', inline: true},
                    { name: 'Planet', value: 'Venus', inline: true},
                    { name: 'Element', value: 'Water', inline: true},
                    { name: 'Native to', value: 'Central Asia', inline: true},
                    { name: 'Binomial name', value: 'Malus domestica', inline: true},
                    { name: 'Recipes', value: '```https://www.allrecipes.com/search/results/?search=apple```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            
            let avocado = new Discord.MessageEmbed()
            .setTitle('Avocado')
            .setDescription('Love, lust and beauty. Also used for ||sex|| magick.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/800px-Persea_americana_fruit_2.JPG')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Ahuacotl, Alligator Pear, Persea', inline: true},
                    { name: 'Gender', value: 'Feminine', inline: true},
                    { name: 'Planet', value: 'Venus', inline: true},
                    { name: 'Element', value: 'Water', inline: true},
                    { name: 'Native to', value: ' tropical and Mediterranean climates of many countrie', inline: true},
                    { name: 'Binomial name', value: 'Persea americana', inline: true},
                    { name: 'Recipes', value: '```https://www.allrecipes.com/search/results/?search=Avocado```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            let basil = new Discord.MessageEmbed()
            .setTitle('Basil')
            .setDescription('Love, exorcism, wealth, sympathy, and protection. Dispels confusion, fears & weakness. Drives off hostile spirits. Associated with Candlemas. Carry to move forward in a positive manner despite perilous danger. Strewn on floors to provide protection from evil. Sprinkle an infusion of basil outside of the building where you hope to be employed for luck in a job interview (be careful not to be seen!) or in your business to attract money and success. Wear or carry to aid in attracting money and prosperity.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/1280px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Common Basil, Sweet Basil, St. Josephwort, St. Joseph\'s Wort, Tulsi, Tulasi, Krishnamul, Kala Tulasi, Witches\' Herb, Alabahaca, American Dittany', inline: true},
                    { name: 'Gender', value: 'Masculine', inline: true},
                    { name: 'Planet', value: 'Mars', inline: true},
                    { name: 'Element', value: 'Fire', inline: true},
                    { name: 'Native to', value: 'central Africa to Southeast Asia', inline: true},
                    { name: 'Binomial name', value: 'Ocimum basilicum', inline: true},
                    { name: 'Recipes', value: '```https://www.allrecipes.com/search/results/?search=basil```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            let bayLaurel = new Discord.MessageEmbed()
            .setTitle('Bay Laurel')
            .setDescription('Purification, house and business blessing, and clearing confusion. Attracts romance. Keep potted plant to protect home from lightning. Place in a dream pillow for sound sleep and to induce prophetic dreams.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Starr-071024-0195-Laurus_nobilis-leaves-Enchanting_Floral_Gardens_of_Kula-Maui_%2824867859296%29.jpg/800px-Starr-071024-0195-Laurus_nobilis-leaves-Enchanting_Floral_Gardens_of_Kula-Maui_%2824867859296%29.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Bay, Sweet Laurel, Sweet Bay, True Laurel, Lorbeer, Noble Laurel, Baie, Daphne', inline: true},
                    { name: 'Gender', value: 'Masculine', inline: true},
                    { name: 'Planet', value: 'Sun', inline: true},
                    { name: 'Element', value: 'Fire', inline: true},
                    { name: 'Native to', value: 'the Mediterranean region', inline: true},
                    { name: 'Binomial name', value: 'Laurus nobilis', inline: true},
                    { name: 'Recipes', value: '```https://www.masterclass.com/articles/how-to-cook-with-bay-leaves-17-recipe-ideas-using-bay-leaves#what-are-bay-leaves```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            let bergamot = new Discord.MessageEmbed()
            .setTitle('Bergamot')
            .setDescription('Money, prosperity, protection from evil and illness, improving memory, stopping interference, and promoting restful sleep. Carry in a sachet while gambling to draw luck and money. Very powerful for attracting success. Burn at any ritual to increase its power.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/c/cc/Citrus_bergamia_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-184.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'Orange Mint', inline: true},
                    { name: 'Gender', value: 'Masculine', inline: true},
                    { name: 'Planet', value: 'Mercury', inline: true},
                    { name: 'Element', value: 'Air', inline: true},
                    { name: 'Native to', value: '`Not Found`', inline: true},
                    { name: 'Binomial name', value: 'Citrus bergamia', inline: true},
                    { name: 'Recipes', value: '```https://www.newcoventgardenmarket.com/blog/chefs-guide-bergamot```', inline: false},
            )
                .setColor(color)
                .setTimestamp()

            let birch = new Discord.MessageEmbed()
            .setTitle('Birch')
            .setDescription('Protection, exorcism and purification. A birch planted close to the home is said to protect against lightning, infertility, and the evil eye.')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Betula_pendula_001.jpg/800px-Betula_pendula_001.jpg')
            .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Also Called:', value: 'White Birch, Canoe Birch, Paper Birch, Tree of Life, Lady of the Woods', inline: true},
                    { name: 'Gender', value: 'Feminine', inline: true},
                    { name: 'Planet', value: 'Venus', inline: true},
                    { name: 'Element', value: 'Water', inline: true},
                    { name: 'Native to', value: 'the Northern Hemisphere', inline: true},
                    { name: 'Binomial name', value: 'Disambiguation', inline: true},
            )
                .setColor(color)
                .setTimestamp()
        
    


            


        if (!args.length) {
			return message.channel.send(warning);
		} else if (args[0] === 'allspice') {
			return message.channel.send(allspice);
		} else if (args[0] === 'almond') {
			return message.channel.send(almond);
		} else if (args[0] === 'aloe') {
			return message.channel.send(aloe);
		} else if (args[0] === 'anise') {
			return message.channel.send(anise);
		} else if (args[0] === 'list') {
			return message.channel.send(list);
		} else if (args[0] === 'apple') {
			return message.channel.send(apple);
		} else if (args[0] === 'avocado') {
			return message.channel.send(avocado);
		} else if (args[0] === 'basil') {
			return message.channel.send(basil);
		} else if (args[0] === 'bayLaurel') {
			return message.channel.send(bayLaurel);
		} else if (args[0] === 'bergamot') {
			return message.channel.send(bergamot);
		} else if (args[0] === 'birch') {
			return message.channel.send(birch);
		}

        
    }
};