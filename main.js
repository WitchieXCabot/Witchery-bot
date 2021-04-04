const Discord = require('discord.js');

const client = new Discord.Client();

const fetch = require('node-fetch');

const querystring = require('querystring');

const prefix = 'W';

const fs = require('fs');

client.commands = new Discord.Collection();

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

//////////////////////////////////////////////

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    try {
      let serverIn = client.guilds.size;
      console.log(`${client.user.tag} successfully logged in!`);
      
      function pickStatus() {
        let status = ['Use Whelp for help!', 'witcherybot.xyz', 'Witchery 0.3.1!!!', 'Our prefix is W', `${client.guilds.cache.size} servers`];
        let Status = Math.floor(Math.random() * status.length);
  
        client.user.setActivity(status[Status], {
          type: "WATCHING"
        });
      };
      setInterval(pickStatus, 9000);
    } catch (err) {
      console.log(err);
    }
});
  


const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzgwMzQxMzU0Mzc5MDgzNzk3.X7trhA.iVuTbhwlRt1jagKgb_d61NGnk5E' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();





client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help'){
        client.commands.get('help').execute(message, args);

    } else if (command === 'protection'){
        client.commands.get('protection').execute(message, args);

    } else if (command === 'cleansing'){
        client.commands.get('cleansing').execute(message, args);

    } else if (command === 'shadow'){
        client.commands.get('shadow').execute(message, args);

    } else if (command === 'herbs'){
        client.commands.get('herbs').execute(message, args);

    } else if (command === 'salt'){
        client.commands.get('salt').execute(message, args);

    } else if (command === 'events'){
        client.commands.get('events').execute(message, args);

    } else if (command === 'fullmoon'){
        client.commands.get('fullmoon').execute(message, args);

    } else if (command === 'newmoon'){
        client.commands.get('newmoon').execute(message, args);

    } else if (command === 'moon'){
        client.commands.get('moon').execute(message, args);

    } else if (command === 'eightball'){
        client.commands.get('eightball').execute(message, args);

    } else if (command === 'fact'){
        client.commands.get('fact').execute(message, args);

    } else if (command === 'invite'){
        client.commands.get('invite').execute(message, args);

    } else if (command === 'coin'){
        client.commands.get('coin').execute(message, args);

    } else if (command === 'dadjoke'){
        client.commands.get('dadjoke').execute(message, args);

    } else if (command ===  'ms'){
        client.commands.get('ms').execute(message, args);

    } else if (command === 'animal'){
        client.commands.get('animal').execute(message, args);
    
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        
    } else if (command ===  'rps'){
        client.commands.get('rps').execute(message, args);

    } else if (message.content === `${prefix}pfp`) {
        const image = new Discord.MessageAttachment('./witcheryWonders PFP.png');
        message.channel.send('this is the bots pfp',image);

    } else if (command === 'uptime'){
        client.commands.get('uptime').execute(message, args);

    } else if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
       
    } else if(command === 'update'){
        client.commands.get('update').execute(message, args);

    } else if (command === 'color'){
        client.commands.get('color').execute(message, args);

    } else if (command === 'rune'){
        client.commands.get('rune').execute(message, args);
        
    }
    
});



client.on("message", async message => {
    if(message.content.startsWith(`Wtarot`)) {
      var rando = Math.floor(Math.random() * 12)

        if (rando == 1){
            let embed = new Discord.MessageEmbed()
              .setTitle('The Sun')
              .setDescription(`Meaning: joy, success, celebration, positivity`)
              .addField(`Deck`,`Court Games Tarot`)
              .setColor("#D21F3C")
              .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13914.jpg')
              .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 2){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Magician')
             .setDescription(`Meaning: willpower, desire, creation, manifestation`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13910.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 3){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Tower')
             .setDescription(`Meaning: sudden upheaval, broken pride, disaster`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13913.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 4){
            let embed = new Discord.MessageEmbed()
             .setTitle('Temprance')
             .setDescription(`Meaning: middle path, patience, finding meaning`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13912.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 5){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Hierophant')
             .setDescription(`Meaning: tradition, conformity, morality, ethics`)
             .addField(`Deck`, `Animal Totem tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/animal-totem-tarot-13887.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 6){
            let embed = new Discord.MessageEmbed()
             .setTitle('Seven of pentacles')
             .setDescription(`Meaning: hard work, perseverance, diligence`)
             .addField( `Deck`, `Animal Totme tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/animal-totem-tarot-13892.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 7){
            let embed = new Discord.MessageEmbed()
             .setTitle('Strength')
             .setDescription(`Meaning: inner strength, bravery, compassion, focus`)
             .addField(`Deck`, `Forest of enchantment tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/forest-of-enchantment-tarot-15247.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 8){
            let embed = new Discord.MessageEmbed()
             .setTitle('The High Priestess')
             .setDescription(`Meaning: intuitive, unconscious, inner voice`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02565.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 9){
            let embed = new Discord.MessageEmbed()
             .setTitle('Death')
             .setDescription(`Meaning: end of cycle, beginnings, change, metamorphosis`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02566.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 10){
            let embed = new Discord.MessageEmbed()
             .setTitle('Four of Wands')
             .setDescription(`Meaning: community, home, celebration`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02568.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 11){
            let embed = new Discord.MessageEmbed()
             .setTitle('Ace of Swords')
             .setDescription(`Meaning: breakthrough, clarity, sharp mind`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02567.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 12){
            let embed = new Discord.MessageEmbed()
             .setTitle('Hermit')
             .setDescription(`Meaning: contemplation, search for truth, inner guidance`)
             .addField(`Deck`, `Rider Waite Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/rider-waite-03678.jpg')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else{
            let embed = new Discord.MessageEmbed()
             .setTitle('Judgment')
             .setDescription(`Meaning: reflection, reckoning, awakening`)
             .addField(`Deck`, `Jess Mac`)
             .setColor("#D21F3C")
             .setImage('https://media0.giphy.com/media/l49JCKQnEUqS0hxy8/giphy.gif?cid=ecf05e47gvl071qrozhn2x8cvpro10tf648i5tklvir5vkhe&rid=giphy.gif')
             .setFooter('Judge Judy :)')
             .setTimestamp()
            await message.channel.send(embed);
        }
    }
})






client.on('message', message => {
	if (message.content === 'Winsect') {
		message.channel.send('BUGGGGG').then( sent => {sent.Message.react('🐛','🐞', '🐜', '🦗', '🦟')});
	}
});













client.login(process.env.token);