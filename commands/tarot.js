const { MessageEmbed } =  require("discord.js");

module.exports = {

    name: 'tarot',
    description: "this is a help embed",
    execute: async (message, args) => {

        const tarot = new MessageEmbed()
        .setTitle(`Uh oh! :/`)
        .setColor("#D21F3C")
        .setDescription(`This command is no longer avaliable!\nWe had complications but dont worry this command and more will be out in public on **07/19/2021**`)
        .setFooter(`sorry about the hold :(`)
        message.channel.send(tarot);

    }
};