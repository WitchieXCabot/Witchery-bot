const Discord = require('discord.js');
const config = require('../../settings/config');
const answers = [
    'Oh hell yeah',
    'Hello no',
    'Yes I guess ?',
    'Probably wrong', 
    'You never know',
    'I guess ?',
    'Well tbh I don\'t know',
    'Umm maybe ?',
    'Nah',
    'Yup',
    'I have a doubt',
    'Cannot predict now',
    'I can see it',
    'How should i know'
]

module.exports = {
config: {
    name: "8ball",
    category: "divination",
    description: "Ask a question to bot the will answer",
    example: `${config.PREFIX}8ball are you a cool bot ?`,
},
run: async (bot, message, args) => {
    const question = args.join(' ');
    if (!question) 
    return message.reply('Please provide a question to ask');
    

    const embed = new Discord.MessageEmbed()
        .setTitle('8-Ball')
        .setColor("#D21F3C")
        .addField('Question', `\`\`\`${question}\`\`\``)
        .addField('Answer', `\`\`\`${answers[Math.floor(Math.random() * answers.length)]}\`\`\``)
        .setFooter(`Asked by ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
    message.channel.send(embed);
}
}