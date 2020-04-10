const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    const embed = new MessageEmbed()
    .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription("У вас на счёту: "+u.mcoin+" <:mc:694314339980804166>-ов\n\t"+u.acoin+"<:loxovskoi_mc:609154702533197845>-ов");
      message.channel.send(embed);
};
module.exports.help = {
    name: "бал"
}