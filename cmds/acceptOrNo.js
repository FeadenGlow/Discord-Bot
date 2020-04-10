const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    let enter = false;
    let prop = false;
if(args[0] == "принять"){
    u.ready = true;
    let embed = new MessageEmbed()
        .setTitle("Exchange.ly")
        .setColor(0xffffff)
        .setDescription("Вы подтвердили обмен, вскоре ваши вещи будут доставлены.");
    return message.channel.send(embed);
}
if(args[0] == "подтвердить"){
    u.ready = true;
    let embed = new MessageEmbed()
    .setTitle("Fight.org")
    .setColor(0xb40000)
    .setDescription("Вы подтвердили битву!");
    return message.channel.send(embed);
}
if(args[0] == "зайти"){
    if(u.tunnel == true && u.area == "Замкнутая пещерка"){
    let embed = new MessageEmbed()
        .setTitle("MysteryCave.ly")
        .setColor(0xffffff)
        .setDescription("Вы решились зайти внутрь. Тут какая-то неприятная атмосфера, просто вытягивающая из вас жизненные силы.\nВы осмелились подойти к трупу. Он весь в нарядной одежде, да как-то к вам в голову пробилось, что он богоискатель.\nУ него в руке место под жемчужину. Положить её в его ладонь?");
    prop = true;
    return message.channel.send(embed);
    }
}
if(args[0] == "положить"){
    if(prop == true){
        prop = false;
        u.tunnel = false;
    if(u.pearls >= 1){
        u.pearls -= 1;
        u.corpse = true;
    let embed = new MessageEmbed()
        .setTitle("MysteryCave.ly")
        .setColor(0xffffff)
        .setDescription("Вы положили жемчужину. Вдруг его тело поднялось, да начало молится. Та-же самая сила заставила вас подумать о том, что он ждёт дары для высших.");
    return message.channel.send(embed);
    }
    else{
    let embed = new MessageEmbed()
        .setTitle("MysteryCave.ly")
        .setColor(0xffffff)
        .setDescription("У вас её не оказалось, что навеяло вам грусть, да сильную печаль. Вы, в удивление себе подумали о ней, да узрев перед собою таинственный мешок. Без раздумий, вы побежали домой.");
    return message.channel.send(embed);
    }   
    }
}

if(args[0] == "не"){
    if(prop == true){
        prop = false;
        u.tunnel = false;
    if(u.pearls >= 1){
        u.pearls -= 1;
        u.corpse = true;
    let embed = new MessageEmbed()
        .setTitle("MysteryCave.ly")
        .setColor(0xffffff)
        .setDescription("Вы не смогли отказаться вставить её. Вдруг его тело поднялось, да начало молится. Та-же самая сила заставила вас подумать о том, что он ждёт дары для высших.");
    return message.channel.send(embed);
    }
    else{
        u.area = "В доме";
        let embed = new MessageEmbed()
            .setTitle("MysteryCave.ly")
            .setColor(0xffffff)
            .setDescription("У вас её не оказалось, что навеяло вам грусть, да сильную печаль. Вы, в удивление себе подумали о ней, да узрев перед собою таинственный мешок. Без раздумий, вы побежали домой.");
        return message.channel.send(embed);
    } 
}
}
else if(args[0] == "отклонить"){
    u.ready = false;
    let embed = new MessageEmbed()
        .setTitle("Exchange.ly")
        .setColor(0xffffff)
        .setDescription("Вы отказались от обмена");
    return message.channel.send(embed);
}
};
module.exports.help = {
    name: "под"
}