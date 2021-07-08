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
    
    let serverIn = client.guilds.cache.size;
    console.log(`${client.user.tag} successfully logged in! 
    Servers: ${serverIn}`);
    

    var activities = [ `${client.guilds.cache.size} servers`, `Does magick`, `witcherybot.xyz`], i = 0;
    setInterval(() => client.user.setActivity(`${prefix}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),8000)   
    
});
  





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

    } else if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
       
    } else if(command === 'update'){
        client.commands.get('update').execute(message, args);

    } else if (command === 'color'){
        client.commands.get('color').execute(message, args);

    } else if (command === 'rune'){
        client.commands.get('rune').execute(message, args);
        
    } else if (command === 'oracle'){
        client.commands.get('oracle').execute(message, args);

    } else if (command === 'oracle-info'){
        client.commands.get('oracle-info').execute(message, args);
        
    } else if (command === 'gemini'){
        client.commands.get('gemini').execute(message, args);

    } else if (command === 'aquarius'){
        client.commands.get('aquarius').execute(message, args);

    } else if (command === 'pisces'){
        client.commands.get('pisces').execute(message, args);

    } else if (command === 'aries'){
        client.commands.get('aries').execute(message, args);

    } else if (command === 'taurus'){
        client.commands.get('taurus').execute(message, args);

    } else if (command === 'cancer'){
        client.commands.get('cancer').execute(message, args);

    } else if (command === 'leo'){
        client.commands.get('leo').execute(message, args);
    
    } else if (command === 'virgo'){
        client.commands.get('virgo').execute(message, args);

    } else if (command === 'libra'){
        client.commands.get('libra').execute(message, args);

    } else if (command === 'scorpio'){
        client.commands.get('scorpio').execute(message, args);

    } else if (command === 'sagittarius'){
        client.commands.get('sagittarius').execute(message, args);
        
    } else if (command === 'capricorn'){
        client.commands.get('capricorn').execute(message, args);
        
    } else if (command === 'horoscope'){
        client.commands.get('horoscope').execute(message, args);
        
    } else if (command === 'tarot'){
        client.commands.get('tarot').execute(message, args);
        
    } else if (command === 'herbfind'){
        client.commands.get('herbfind').execute(message, args);
        
    } else if (command === 'servers'){
        client.commands.get('servers').execute(message, args);
        
    }
    
});



client.on('message', message => {
    if (message.content === 'Winsect') {
            let bug = new Discord.MessageEmbed()
            .setTitle('INSECT')
            .setDescription(`BUGGGGGG`)
            .setColor("#D21F3C")
    message.channel.send(bug).then(sent => {
        sent.react('🐛')
        sent.react('🐞')
        sent.react('🐜')
        sent.react('🦗')
        sent.react('🦟')
        sent.react('🪳')});
    }
});




client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	var args = message.content.slice(prefix.length).trim().split(/ +/);
	var command = args.shift().toLowerCase();

	if (command === 'stats') {
		const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		];

		return Promise.all(promises)
			.then(results => {
				const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
				const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
				return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
			})
			.catch(console.error);
	}
});





client.login(process.env.token);