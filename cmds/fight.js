const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let filter = m => m.author.id === message.author.id;
    let pu = profile[pUser.id];
    if(u.hp == undefined || pu.hp == undefined){
        if(pu.hp == undefined){
            pu.hp = 100
        }
        else{
            u.hp = 100;
        }
    }
    if(u.atk == undefined || pu.atk == undefined){
        if(pu.atk == undefined){
            pu.atk = 20
        }
        else{
        u.atk = 20;
        }
    }
    /*collected.first().content ==*/
    let embed0 = new MessageEmbed()
        .setTitle("Fight.org")
        .setColor(0xb40000)
        .setDescription("Вы отправили приглашение на поединок игроку, дождитесь его ответа");
    message.channel.send(embed0);
    setTimeout(function(){
            if(pu.ready){
                let embed = new MessageEmbed()
                    .setTitle("Fight.org")
                    .setColor(0xb40000)
                    .setDescription("Поединок начался!");
                message.channel.send(embed);
                /*while(u.hp != 0 || pu.hp !=0){
                    let embed = new MessageEmbed()
                        .setTitle("Fight.org")
                        .setColor(0xb40000)
                        .setDescription("Игрок 1, выберете действие: атака");
                    message.channel.send(embed);
                    message.channel.awaitMessages(filter, {max:1}).then(collected => {
                        if(collected.first().content == "атака" || "Атака"){
                            let dmg = Math.round(Math.random() * (u.atk - 1) + 1);
                            let embed = new MessageEmbed()
                                .setTitle("Fight.org")
                                .setColor(0xb40000)
                                .setDescription("Игрок 1 наносит "+dmg+" урона по Игроку 2.\nУ Игрока 2 "+pu.hp);
                            message.channel.send(embed);
                        }
                        else{
                            let embed = new MessageEmbed()
                                .setTitle("Fight.org")
                                .setColor(0xb40000)
                                .setDescription("Игрок 1 пропускает ход");
                            message.channel.send(embed);
                        }
                    })
                
                
                    let embed2 = new MessageEmbed()
                        .setTitle("Fight.org")
                        .setColor(0xb40000)
                        .setDescription("Игрок 2, выберете действие: атака, у вас 15 секунд");
                    message.channel.send(embed2);
                    setTimeout(function(){
                    if(pu.typeattack == "атака"){
                        let dmg = Math.round(Math.random() * (pu.atk - 1) + 1);
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 2 наносит "+dmg+" урона по Игроку 1.\nУ Игрока 1 "+u.hp);
                        message.channel.send(embed);
                    }
                    else{
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 2 пропускает ход");
                        message.channel.send(embed);
                    }
                    },1000*15)
                }*/
            }
            else{
                message.channel.send("lox")
            }
        },1000*30)
};
module.exports.help = {
    name: "поединок"
}