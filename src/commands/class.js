const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(args[0] == 1){
        
    }
    if(u.class == "Вы не выбрали класс" || u.class == undefined) {
        let embed = new MessageEmbed()
        .setTitle("ChooseWhoAreU.net")
        .setColor(0x67009c)
        .setDescription("Вы не выбрали класс, вот все доступные:\n1.Волшебник\n2.Паладин\n3.Мечник\n4.Лучник")
        .setFooter("Внимание! Выберайте класс с умом, только после смерти вашего персонажа вы сможите его поменять! Больше информации в комманде .гайд");
  return message.channel.send(embed);
    }//67009c
};
module.exports.help = {
    name: "класс"
}