const config = require('../../settings/config');

module.exports = {
config: {
    name: "reload",
    aliases: ["load"],
    category: "Staff",
    description: "Reloades the provided command !!",
    example: `${config.PREFIX}reload Fun pp`,
},
run: async (bot, message, args) => {
    
    if (message.author.id !== config.OWNER_ID && message.author.id != "777305780503314442") {
        return;
    }

    if(!args[0]) return message.reply(`Provide the category & commands to reload !! \`${config.PREFIX}reload [Category] [Command]\``)
    if(!args[1]) return message.reply(`Provide a command to reload !! \`${config.PREFIX}reload [Category] [Command]\``)

    let category = args[0].toLowerCase()
    let command = args[1].toLowerCase()

    try {
        delete require.cache[require.resolve(`../../Commands/${category}/${command}.js`)];
        bot.commands.delete(command);

        const pull = require(`../../Commands/${category}/${command}.js`)
        bot.commands.set(command, pull)

        return message.channel.send(`Reloaded Command: **\`${command}\`**`)

    } catch (error) {
        return message.reply(`Cannot reload **\`${command}\`**\`\`\`${error}\`\`\``)
    }

    }
}
