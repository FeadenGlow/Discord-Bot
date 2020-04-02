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
      .setDescription("У вас нету <:mc:694314339980804166>-ов");
      return message.channel.send(embed);
    }

    if(!profile[pUser.id]){
        profile[pUser.id] = {
          battles:0,
          xp:0,
          lvl:0,
          mcoin:0,
        }
    }

    let pMcoins = profile[pUser.id].mcoin;
    let sMcoins = u.mcoin;
    if(sMcoins < messageArray[2]) { 
    const embed2 = new MessageEmbed()
      .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription("У вас недостаточно <:mc:694314339980804166>-ов");
      return message.channel.send(embed2);
    }
    if(sMcoins < 1 || pMcoins < 1 || messageArray[2] < 1){
        const embed4 = new MessageEmbed()
      .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription("Вы не можете отправить 0 <:mc:694314339980804166>-ов");
      return message.channel.send(embed4);
    }

    if(/*args[1] == null || args[0] == null ||*/ pMcoins == NaN || sMcoins == NaN || messageArray[2] == NaN){
        const embed0 = new MessageEmbed()
      .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription("ОШИБКА , одни из параметров = NaN");
      return message.channel.send(embed0);
    }
    let index = parseInt(messageArray[2]);
    
    u.mcoin = sMcoins - index;

    profile[pUser.id].mcoin = pMcoins + index;


    const embed3 = new MessageEmbed()
      .setTitle("MaxCoins.ly")
      .setColor(0xff0000)
      .setDescription('Деньги были успешно отправлены, кол-во: '+messageArray[2]+'<:mc:694314339980804166>-ов');
      return message.channel.send(embed3);
    //{"412548945261363200":{"battles":0,"xp":0,"lvl":0,"mcoin":147},"412533058122809345":{"battles":0,"xp":0,"lvl":0,"mcoin":3}}
};
module.exports.help = {
    name: "зап"
}