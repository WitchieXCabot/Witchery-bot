const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
config:  {
      name: 'fortune',
      aliases: ['fortune-cookie', 'cookie'],
      group: 'divination',
      memberName: 'fortune',
      description: 'Replies with a fortune cookie tip!',
      throttling: {
        usages: 2,
        duration: 10
      }
},

  run: async (bot, message, args) => {
    try {
      const res = await fetch('http://yerkee.com/api/fortune');
      const json = await res.json();
      const embed = new MessageEmbed()
        .setColor('#D21F3C')
        .setAuthor(
          'Fortune Cookie',
          'https://i.imgur.com/58wIjK0.png',
          'https://yerkee.com'
        )
        .setDescription(` ${json.fortune} `)
        .setTimestamp()
        .addField("\u200B", "Powered by [yerkee.com](http://yerkee.com/)")
      message.channel.send(embed);
      return;
    } catch (e) {
      message.reply(':x: Could not obtain a fortune cookie!');
      return console.error(e);
    }
  }
};