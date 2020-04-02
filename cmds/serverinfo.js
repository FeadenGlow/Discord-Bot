const Discord = module.require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    const embed = new MessageEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Бот присоеденился к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    message.channel.send(embed);

};
module.exports.help = {
    name: "инфа"
};