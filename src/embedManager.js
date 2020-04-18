const { MessageEmbed } = require('discord.js');

module.exports.getEmbedMessage = (body, title = 'Embed.js', color = '#286cbd') => (
    new MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(body)
);
