const Discord = require("discord.js");
const ownerid = ["690007479404331076"];
const ownerid2 = ["777305780503314442"];
const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
    name: "forcemessage",
    aliases: ["forcemsg"],
    category: "owner",
    description: "",
    usage: " ",
    accessableby: "Owner"
  },
  run: async (bot, message, args) => {
    if (message.author.id == ownerid || ownerid2) {
      message.delete();
          let channel = message.mentions.channels.first()
    if(!channel) {
        return message.channel.send(`mention channel please!`);
    }

    var args = message.content.split(' ').slice(2).join(' ');
 if(!args) {
     return message.channel.send(`you must spefic the message u want to send!`)
 }
    const embed = new MessageEmbed()
        .setColor("#D21F3C")
        .setTitle("Message From Bot Owner!")
        .setDescription(args)
        .setTimestamp()
        .setFooter('© Witchery Bot Owner');
channel.send(embed)
    }
  }
};