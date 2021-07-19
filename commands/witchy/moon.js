module.exports = {
config: {
    name: 'moon',
    category: "witchy",
    aliases: ['moo'],
    description: "this is a next moon",
},
run: async (bot, message, args) => {
    message.channel.send(`The next new moon is on;
        :new_moon: June 10 (in Gemini) SOLAR ECLIPSE!`)
    }
}
