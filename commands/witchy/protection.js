const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'protection',
    category: "witchy",
    description: "Herbs for protection",
},
    run: async (bot, message, args) => {
        if (message.guild.id === `793162542729134120`) {

            
            var commandArray = `Agrimony
            Aloe
            Angelica
            Anise
            Asafoetida
            Basil
            Bay Leaf
            Benzoin
            Black Berry
            Black Pepper
            Blessed Thistle
            Caraway
            Carnation
            Catnip
            Cayenne
            Cedar
            Chamomile
            Cinnamon
            Clove
            Coriander
            Dandelion
            Dragons Blood
            Fennel
            Frankincense
            Garlic
            Hawthorn
            High John
            Holly
            Juniper
            Lavender
            Lilac
            Mistletoe
            Mugwort
            Mullein
            Myrrh
            Nettle
            Onion
            Parsley
            Pennyroyal
            Peppermint
            Rose petals + thorns
            Rosemary
            Sage
            Sandalwood
            St. John’s Wort
            Thyme
            Vervain
            Witch Hazel`
            var commandA2 = `Agate
            Amber
            Amethyst
            Black Onyx
            Black Tourmaline 
            Carnelian
            Citrine
            Clear Quartz
            Garnet
            Jade
            Jasper
            Jet
            Lapis Lazuli
            Malachite
            Obsidian
            Opal
            Smokey Quartz
            Sodalite
            Sunstone
            Tiger’s Eye
            Turquoise`
            var commandA3 = `Cedar
            Cinnamon
            Clove
            Copal
            Dragon’s Blood
            Frankincense
            Gum Arabic
            Juniper
            Myrrh
            Pine
            Rosemary
            Sandalwood
            Sage`
            var commandA4 = `__Salts:__
            Rock Salt- return to sender, deflects negativity.
            Table Salt- All-purpose, blocks negative energy and dark spirits/servitors.
            Red Salt- Heavy protection, blocks all dark energy, great for home protection, repels the fae, ghosts, and most zombie spirits.
            Black Salt- Deflects all negativity.
            __Protection Flowers:__
            Baby’s Breath
            Lilac- Banishes bad energy, keeps those with malicious intent out along with malevolent spirits and ghosts.
            Morning Glories- Keeps malevolent faeries at bay.
            Rose Petals
            Rosemary
            __Protective types of Water:__
            Moon Water
            Sun water
            Storm Water
            __Protection Powders:__
            Eggshell powder `
            
            pageN1 = "**\n Protection Plants & Herbs: Page 1 \n**" + commandArray + "";
            pageN2 = "**\n Protection Crystals: Page 2 \n**" + commandA2 + "";
            pageN3 = "**\n Protection Incense: Page 3 \n**" + commandA3 + "";
            pageN4 = "**\n Other Protection: Page 4 \n**" + commandA4 + "";


            
            let pages = [pageN1, pageN2, pageN3, pageN4]
            let page = 1 
        
            var embed = new MessageEmbed()
                .setTitle('**Protection**')
                .setURL('https://discord.gg/6huDQTNexA')
                .setColor("#D21F3C") // Set the color
                .setFooter(`Page ${page} of ${pages.length}`)
                .setDescription(pages[page-1])
        
                message.channel.send({embed}).then(msg => {
                    msg.react('⬅').then( r => {
                    msg.react('➡')
                    
                    // Filters
                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id
                    
                    const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000})
                    const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000})
                    
                    backwards.on('collect', (r, u) => {
                        if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                        page--
                        embed.setDescription(pages[page-1])
                        embed.setFooter(`Page ${page} of ${pages.length}`)
                        msg.edit(embed)
                        r.users.remove(r.users.cache.filter(u => u === message.author).first())
                    })
                    
                    forwards.on('collect', (r, u) => {
                        if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                        page++
                        embed.setDescription(pages[page-1])
                        embed.setFooter(`Page ${page} of ${pages.length}`)
                        msg.edit(embed)
                        r.users.remove(r.users.cache.filter(u => u === message.author).first())
                    })
                    
                    
                    })
                    })
        }
        else {
            var protection = new MessageEmbed()
            .setTitle(' Protection herbs and plants')
            .setColor("#D21F3C")
            .addField(`♡*✧•`, `Agrimony
            Aloe
            Angelica
            Anise
            Asafoetida
            Basil
            Bay Leaf
            Benzoin
            Black Berry
            Black Pepper
            Blessed Thistle
            Caraway
            Carnation
            Catnip
            Cayenne
            Cedar
            Chamomile
            Cinnamon
            Clove
            Coriander
            Dandelion
            Dragons Blood
            Fennel
            Frankincense
            Garlic
            Hawthorn
            High John
            Holly
            Juniper
            Lavender
            Lilac
            Mistletoe
            Mugwort
            Mullein
            Myrrh
            Nettle
            Onion
            Parsley
            Pennyroyal
            Peppermint
            Rose petals + thorns
            Rosemary
            Sage
            Sandalwood
            St. John’s Wort
            Thyme
            Vervain
            Witch Hazel`)
            .setFooter('Remember to do your own extensive research!')
            message.channel.send(protection);
        }
    }
}