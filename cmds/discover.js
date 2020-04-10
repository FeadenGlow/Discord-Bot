const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.used4){
        if(u.courage == true){
            let embed1 = new MessageEmbed()
            .setTitle("DiscoverYourLand.free")
            .setColor(0xffff00)
            .setDescription("Вы не можете передвигаться так быстро! Отдохните 20 секунд");
      return message.channel.send(embed1);
        }
        let embed1 = new MessageEmbed()
              .setTitle("DiscoverYourLand.free")
              .setColor(0xffff00)
              .setDescription("Вы не можете передвигаться так быстро! Отдохните 1 минуту");
        return message.channel.send(embed1);
    }
    else{
    u.used4 = true;
    let timeout = 60;
    if(u.courage == true){
        timeout = 20;
    }
    setTimeout(function(){
        u.used4 = false;
    },1000*1*timeout)
    if(args[0] == "лес"){
        u.area = "Лес";
        let rand = Math.round(Math.random() * (20 - 1) + 1);
        if(rand == 20){
            let embed = new MessageEmbed()
                .setTitle("DiscoverYourLand.free")
                .setColor(0x025e0a)
                .setDescription("Зайдя в лес, да пройдя по нему вы наткнулись на скопление надгробий.\nИздалека это очень похоже на кладбище. Ваше желание зайти туда не описать.\nВсё-же войти туда?");
            message.channel.send(embed);
            let filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages(filter, {max:1}).then(collected => {
                if(collected.first().content == "да" || "Да"){
                    u.area = "Кладбище";
                    let embed = new MessageEmbed()
                        .setTitle("DiscoverYourLand.free")
                        .setColor(0x025e0a)
                        .setDescription("Это без спору маштабное захоронение, так ещё и земля везде мягкая.\nВроде и делать тут нечего, а вроде и есть что.");
                    return message.channel.send(embed);
                }
                else if(collected.first().content == "нет" || "Нет"){
                    u.area = "Лес";
                    let embed = new MessageEmbed()
                        .setTitle("DiscoverYourLand.free")
                        .setColor(0x025e0a)
                        .setDescription("Вы не решились заходить туда, продолжив исследовать лес.");
                    return message.channel.send(embed);
                }
            })
        }
        let embed = new MessageEmbed()
        .setTitle("DiscoverYourLand.free")
        .setColor(0x025e0a)
        .setDescription("Вы пошли в лес. Теперь вы можете использовать ваш топор, да нарубить дров.");
       return message.channel.send(embed);
    }
    if(args[0] == "пещера"){
        u.area = "Пещера";
        let embed = new MessageEmbed()
        .setTitle("DiscoverYourLand.free")
        .setColor(0xffff00)
        .setDescription("Вы отправились в пещеру, без страха зануривая во тьму. Она оказалась довольно глубокой, да с признаком то-ли кристаллических образований, то-ли чего более дорогого ещё глубже. Явно стоит проверить.");
       return message.channel.send(embed);
    }
    if(args[0] == "шахта" || args[0] == "шахту"){
        u.area = "Шахта";
        let embed = new MessageEmbed()
        .setTitle("DiscoverYourLand.free")
        .setColor(0xffff00)
        .setDescription("Вы зарылись в шахту. Теперь вы можете копать");
       return message.channel.send(embed);
    }
    if(args[0] == "дом"){
        u.area = "В доме";
        let embed = new MessageEmbed()
        .setTitle("DiscoverYourLand.free")
        .setColor(0xffff00)
        .setDescription("Вы добрались к своему дому.");
       return message.channel.send(embed);
    }
}
};
module.exports.help = {
    name: "исследовать"
}