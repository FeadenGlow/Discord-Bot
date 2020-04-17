const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    let messageArray = message.content.split(" ");
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    

    if(!u){

    const embed = new MessageEmbed()
    .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription("У вас нету <:mc:694314339980804166>-ов или <:loxovskoi_mc:609154702533197845>-ов");
      return message.channel.send(embed);
    }

    if(!profile[pUser.id]){
        profile[pUser.id] = {
          battles:0,
          xp:0,
          lvl:0,
          mcoin:0,
          acoin:0
        }
    }

    if(messageArray[3] == "м"){
      let pMcoins = profile[pUser.id].mcoin;
       let sMcoins = u.mcoin;

       // Если М-коины меньше чем указано то: 
       if(sMcoins < messageArray[2]) {
        const embed2 = new MessageEmbed()
           .setTitle("MaxCoins.ly")
           .setColor(0xff0000)
           .setDescription("У вас недостаточно <:mc:694314339980804166>-ов");
        return message.channel.send(embed2);
      }

      // Если М-коинов отправленно 0 или меньше то:
      if(sMcoins < 1 || messageArray[2] < 1){
        const embed4 = new MessageEmbed()
         .setTitle("MaxCoins.ly")
         .setColor(0xff0000)
         .setDescription("Вы не можете отправить 0 <:mc:694314339980804166>-ов");
        return message.channel.send(embed4);
      }

      // Если пользователь отправляет М-коины себе же то:
      if(profile[pUser.id] == u){
        const embed22 = new MessageEmbed()
         .setTitle("MaxCoins.ly")
         .setColor(0xff0000)
         .setDescription("Вы не можете отправить <:mc:694314339980804166>-ны себе");
        return message.channel.send(embed22);
      }

      //Переобразование текста в цифры
      let index = parseInt(messageArray[2]);

      //Если М-Коины == NaN то:
      if(isNaN(sMcoins) || isNaN(messageArray[2]) || isNaN(index)){
      const embed0 = new MessageEmbed()
       .setTitle("MaxCoins.ly")
       .setColor(0xff0000)
       .setDescription("ОШИБКА , одни из параметров = NaN");
      return message.channel.send(embed0);
      }

      //Удаление м-коинов у отправщика
      u.mcoin = sMcoins - index;

      //Прибавление м-коинов у получателя
      profile[pUser.id].mcoin = pMcoins + index;
  
      //Вывод информации
      const embed3 = new MessageEmbed()
        .setTitle("MaxCoins.ly")
        .setColor(0xff0000)
        .setDescription('Деньги были успешно отправлены, кол-во: '+messageArray[2]+'<:mc:694314339980804166>-ов');
        return message.channel.send(embed3);
  }
  if(messageArray[3] == "нм"){
    let sAcoins = u.acoin;
    let pAcoins = profile[pUser.id].acoin;


    if(sAcoins < messageArray[2]) { 
      const embed2 = new MessageEmbed()
         .setTitle("MaxCoins.ly")
         .setColor(0xff0000)
         .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов");
      return message.channel.send(embed2);
    }


    if(sAcoins < 1 || messageArray[2] < 1){
      const embed4 = new MessageEmbed()
       .setTitle("MaxCoins.ly")
       .setColor(0xff0000)
       .setDescription("Вы не можете отправить 0 <:loxovskoi_mc:609154702533197845>-ов");
      return message.channel.send(embed4);
    }


    if(profile[pUser.id] == u){
      const embed22 = new MessageEmbed()
       .setTitle("MaxCoins.ly")
       .setColor(0xff0000)
       .setDescription("Вы не можете отправить <:loxovskoi_mc:609154702533197845>-ны себе");
      return message.channel.send(embed22);
    }


    let index = parseInt(messageArray[2]);

    
    if(isNaN(sAcoins) || isNaN(messageArray[2]) || isNaN(index)){
      const embed0 = new MessageEmbed()
       .setTitle("MaxCoins.ly")
       .setColor(0xff0000)
       .setDescription("ОШИБКА , одни из параметров = NaN");
      return message.channel.send(embed0);
    }


    u.acoin = sAcoins - index;

    profile[pUser.id].acoin = pAcoins + index;


    const embed3 = new MessageEmbed()
    .setTitle("MaxCoins.ly")
    .setColor(0xff0000)
    .setDescription('Деньги были успешно отправлены, кол-во: '+messageArray[2]+'<:loxovskoi_mc:609154702533197845>-ов');
    return message.channel.send(embed3);

  }
    //{"412548945261363200":{"battles":0,"xp":57,"lvl":6,"mcoin":136,"acoin":20,"note1":"маииисммммм"},"412533058122809345":{"battles":0,"xp":40,"lvl":6,"mcoin":12,"acoin":20,"note1":"ты пень?"},"431834529075036162":{"battles":0,"xp":32,"lvl":4,"acoin":20,"mcoin":2},"427901091674325012":{"battles":0,"xp":0,"lvl":0,"acoin":20,"mcoin":2}
};
module.exports.help = {
    name: "зап"
}