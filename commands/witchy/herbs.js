const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'herbs',
    category: "witchy",
    description: "this is a herbs embed",
},
run: async (bot, message, args) => {
        if (message.guild.id === `793162542729134120`) {

            
            var commandArray = `__Allspice__ - \`prosperity, luck, healing, energy\`
            __Basil__ - \`love, banishing, wealth, success, sympathy, protection; dispelling confusion, fears, and weaknesses\`
            __Bay Leaf__ - \`wishes, protection, good fortune, success, purification, strength, healing, inducing prophetic dreams, enhanced psychic ability\`
            __Black Pepper__ - \`protection, banishing, cursing\`
            __Chili Powder__ - \`love, fidelity, cursing, removing curses or negating spells\`
            __Chives__ - \`love, protection, divination, hex breaking\`
            __Cinnamon__ - \`success, healing, protection, power, love, luck, strength, prosperity\`
            __Clove__ - \`protection, love, prosperity, banishing, friendship, stopping gossip\`
            __Dill__ - \`prosperity, protection, luck, lust\`
            __Garlic Powder & Garlic Salt__ - \`healing, protection, banishing, cleansing, purification\`
            __Ginger__ - \`sensuality, sexuality, personal confidence, prosperity, success, health, protection, new experiences and adventures\`
            __Lavender__ - \`peace, calm, sleep\``
            var commandA2 = `__Mint__ - \`wealth, healing, luck\`
            __Mustard Seed__ - \`courage, endurance, preventing physical injury, luck, success\`
            __Nutmeg__ - \`prosperity, luck, protection, intellect, removing curses\`
            __Onion Powder & Onion Salt__ - \`prosperity, stability, endurance, protection, breaking bad habits, cleansing\`
            __Oregano__ - \`happiness, strength, energy, vitality\`
            __Paprika__ - \`energy\`
            __Red Pepper__ - \`energy, banishing, cursing\`
            __Rosemary__ - \`healing, love, lust, improved memory, dispelling negative energy, cleansing, warding off nightmares\`
            __Sage__ - \`cleansing, purification, wisdom, healing, dispelling negative energy, wishes, overcoming grief and loss\`
            __Sea Salt__ - \`cleansing, purification, banishing, protection\`
            __Sesame Seed__ - \`prosperity, lust, passion\`
            __Thyme__ - \`loyalty, affection, strength, courage, banishing, cleansing, healing, luck, prosperity, restful sleep, warding off nightmares\`
            __Turmeric__ - \`cleansing, purification\``
            
            pageN1 = "**\n Herbs: Page 1 \n**" + commandArray + "";
            pageN2 = "**\n Herbs: Page 2 \n**" + commandA2 + "";
            
            let pages = [pageN1, pageN2]
            let page = 1 
        
            var embed = new MessageEmbed()
                .setTitle('**Herbs and Correspondences**')
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
            var herbs = new MessageEmbed()
            .setTitle(' Herbs and there Correspondences ')
            .setURL('https://discord.gg/6huDQTNexA')
            .setColor("#D21F3C")
            .addField(`————Herbs————`, `~•Allspice- prosperity, luck, healing, energy
            ~•Basil - love, banishing, wealth, success, sympathy, protection; dispelling confusion, fears, and weaknesses
            ~•Bay Leaf - wishes, protection, good fortune, success, purification, strength, healing, inducing prophetic dreams, enhanced psychic ability
            ~•Black Pepper - protection, banishing, cursing
            ~•Chili Powder - love, fidelity, cursing, removing curses or negating spells
            ~•Chives - love, protection, divination, hex breaking
            ~•Cinnamon - success, healing, protection, power, love, luck, strength, prosperity
            ~•Garlic Powder & Garlic Salt - healing, protection, banishing, cleansing, purification
            ~•Ginger - sensuality, sexuality, personal confidence, prosperity, success, health, protection, new experiences and adventures
            ~•Lavender - peace, calm, sleep
            ~•Mint - wealth, healing, luck`)
            .addField(` ————Want more?———— `, `to get the full list join our server by clicking on **Herbs and there Correspondences**`)
            message.channel.send(herbs);
        }
    }
}