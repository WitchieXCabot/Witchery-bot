const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'rune',
    category: "divination",
    description: "Rune spread x 1 Rune",
},
run: async (bot, message, args) => {
    
    var rando = Math.floor(Math.random() * 23)
    
            if (rando == 1){
                let Fehu = new MessageEmbed()
                .setTitle('Fehu "cattle"')
                .setDescription(`Meaning: wealth`)
                .addField(`Phoneme`,`F`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Fehu.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Fehu);
            }
            else if (rando == 2){
                let Uruz = new MessageEmbed()
                .setTitle('Uruz "aurochs"')
                .setDescription(`Meaning: strength of will`)
                .addField(`Phoneme`, `U (long and/or short)`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Uruz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Uruz);
            }
            else if (rando == 3){
                let Thurisaz = new MessageEmbed()
                .setTitle('Thurisaz "Giant"')
                .setDescription(`Meaning: Danger, Suffering`)
                .addField(`Phoneme`, `Th (Both soft and hard)`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Thurisaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Thurisaz);
            }
            else if (rando == 4){
                let Ansuz = new MessageEmbed()
                .setTitle('Ansuz "an Aesir god"')
                .setDescription(`Meaning: Prosperity, Vitality`)
                .addField(`Phoneme`, `A (Long and/or short)`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Ansuz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Ansuz);
            }
            else if (rando == 5){
                let Raidho = new MessageEmbed()
                .setTitle('Raidho "journey on horseback"')
                .setDescription(`Meaning: movement, work, growth`)
                .addField(`Phoneme`, `R`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Raidho.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Raidho);
            }
            else if (rando == 6){
                let Kaunan = new MessageEmbed()
                .setTitle('Kaunan "ulcer"')
                .setDescription(`Meaning: mortality, pain`)
                .addField(`Phoneme`, `K`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Kaunan.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Kaunan);
            }
            else if (rando == 7){
                let Gebo = new MessageEmbed()
                .setTitle('Gebo "gift"')
                .setDescription(`Meaning: generosity`)
                .addField(`Phoneme`, `K`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Gebo.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Gebo);
            }
            else if (rando == 8){
                let Wunjo = new MessageEmbed()
                .setTitle('Wunjo "joy"')
                .setDescription(`Meaning: Joy, ecstacy`)
                .addField(`Phoneme`, `W`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Wunjo.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Wunjo);
            }
            else if (rando == 9){
                let Hagalaz = new MessageEmbed()
                .setTitle('Hagalaz "Hail"')
                .setDescription(`Meaning: destruction, chaos`)
                .addField(`Phoneme`, `H`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Hagalaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Hagalaz);
            }
            else if (rando == 10){
                let Naudhiz = new MessageEmbed()
                .setTitle('Naudhiz "need"')
                .setDescription(`Meaning: need, unfulfilled desire`)
                .addField(`Phoneme`, `N`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Naudhiz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Naudhiz);
            }
            else if (rando == 11){
                let Isaz = new MessageEmbed()
                .setTitle('Isaz "ice"')
                .setDescription(`Meaning: unknown (the rune poems are ambiguous and contradictory)`)
                .addField(`Phoneme`, `I (long and/or short)`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Isaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Isaz);
            }
            else if (rando == 12){
                let Jera = new MessageEmbed()
                .setTitle('Jera "Year"')
                .setDescription(`Meaning: harvest, reward`)
                .addField(`Phoneme`, `Germanic J, modern English Y`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Jera.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Jera);
            }
            else if (rando == 13){
                let Eihwaz = new MessageEmbed()
                .setTitle('Eihwaz "yew"')
                .setDescription(`Meaning: strength, stability`)
                .addField(`Phoneme`, `I (pronounced like “Eye”)`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Eihwaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Eihwaz);
            }
            else if (rando == 14){
                let unknown = new MessageEmbed()
                .setTitle('Unknown')
                .setDescription(`Meaning: protection from enemies, defense of that which one loves`)
                .addField(`Phoneme`, `Z`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Algiz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(unknown);
            }
            else if (rando == 15){
                let Sowilo = new MessageEmbed()
                .setTitle('Sowilo "sun"')
                .setDescription(`Meaning: success, solace`)
                .addField(`Phoneme`, `S`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Sowilo.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Sowilo);
            }
            else if (rando == 16){
                let Tiwaz = new MessageEmbed()
                .setTitle('Tiwaz "The god Tiwaz"')
                .setDescription(`Meaning: victory, honor`)
                .addField(`Phoneme`, `T`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Tiwaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Tiwaz);
            }
            else if (rando == 17){
                let Berkanan = new MessageEmbed()
                .setTitle('Berkanan "Birch"')
                .setDescription(`Meaning: fertility, growth, sustenance`)
                .addField(`Phoneme`, `B`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Berkanan.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Berkanan);
            }
            else if (rando == 18){
                let Ehwaz = new MessageEmbed()
                .setTitle('Ehwaz "Horse"')
                .setDescription(`Meaning: trust, faith, companionship`)
                .addField(`Phoneme`, `E`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Ehwaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Ehwaz);
            }
            else if (rando == 19){
                let Mannaz = new MessageEmbed()
                .setTitle('Mannaz "Man"')
                .setDescription(`Meaning: augmentation, support`)
                .addField(`Phoneme`, `M`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Mannaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Mannaz);
            }
            else if (rando == 20){
                let Laguz = new MessageEmbed()
                .setTitle('Laguz')
                .setDescription(`Meaning: formlessness, chaos, potentiality, the unknown`)
                .addField(`Phoneme`, `L`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Laguz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Laguz);
            }
            else if (rando == 21){
                let Ingwaz = new MessageEmbed()
                .setTitle('Ingwaz "the god Ingwaz"')
                .setDescription(`Meaning: fertilization, the beginning of something, the actualization of potential`)
                .addField(`Phoneme`, `Ng`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Ingwaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Ingwaz);
            }
            else if (rando == 22){
                let Othalan = new MessageEmbed()
                .setTitle('Othalan "inheritance"')
                .setDescription(`Meaning: inheritance, heritage, tradition, nobility`)
                .addField(`Phoneme`, `O`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Othala.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Othalan);
            }
            else{
                let Dagaz = new MessageEmbed()
                .setTitle('Dagaz "day"')
                .setDescription(`Meaning: hope, happiness`)
                .addField(`Phoneme`, `D`)
                .setColor("#D21F3C")
                .setThumbnail('http://norse-mythology.org/wp-content/uploads/2012/11/Dagaz.png')
                .setFooter('These are all possible meanings!')
                .setTimestamp()
                await message.channel.send(Dagaz);
            }
        }
};