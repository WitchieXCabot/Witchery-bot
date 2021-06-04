const client = require('./main');
const MessageEmbed = require('discord.js').MessageEmbed;
const got = require('got');
const url = require('url');

exports.randomSelection = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
};

exports.randomColor = () => {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
};


const randomFooter = () => {
    return exports.randomSelection([
        'Insert witchy thing here',
        'Happy pride month!',
    ]);
};

exports.embed = (title, description = '', fields = [], options = {}) => {
    let url = options.url || '';
    let color = options.color || this.randomColor();

    if (options.inline) {
        if (fields.length % 3 === 2) {
            fields.push({ name: '\u200b', value: '\u200b' });
        }
        fields.forEach(obj => {
            obj.inline = true;
        });
    }

    return new MessageEmbed({ fields, video: options.video || url })
        .setTitle(title)
        .setColor("#D21F3C")
        .setDescription(description)
        .setURL(url)
        .setImage(options.image)
        .setTimestamp(options.timestamp ? timestampToDate(options.timestamp) : null)

  //        .setFooter(randomFooter())
      
      .setAuthor(options.author === undefined ? '' : options.author)
        .setThumbnail(options.thumbnail);
};


exports.quoteRegex = (input) => `${input}`.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');