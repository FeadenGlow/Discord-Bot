const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile) => {
    let uid = message.author.id;
    let u = profile[uid];
    if(args[0] == "принять"){
        u.ready = true;
        let embed = new MessageEmbed()
        .setTitle("Fight.org")
        .setColor(0xb40000)
        .setDescription("Вы подтвердили битву!");
        return message.channel.send(embed);
    }
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let filter = m => m.author.id === message.author.id;
    let pu = profile[pUser.id];
    if (u.hp == undefined || pu.hp == undefined) {
        if (pu.hp == undefined) {
            pu.hp = 100
        }
        else {
            u.hp = 100;
        }
    }
    if (u.atk == undefined || pu.atk == undefined) {
        if (pu.atk == undefined) {
            pu.atk = 20
        }
        else {
            u.atk = 20;
        }
    }
    /*collected.first().content ==*/
    let embed0 = new MessageEmbed()
        .setTitle("Fight.org")
        .setColor(0xb40000)
        .setDescription("Вы отправили приглашение на поединок игроку, дождитесь его ответа");
    message.channel.send(embed0);
    setTimeout(function () {
        if (pu.ready) {
            pu.ready = false;
            let embed = new MessageEmbed()
                .setTitle("Fight.org")
                .setColor(0xb40000)
                .setDescription("Поединок начался!");
            message.channel.send(embed);
            pu.check = true;
            u.check = true;
            fight();
            function fight() {
                let accept1 = false;
                let accept2 = false;
                let embed = new MessageEmbed()
                    .setTitle("Fight.org")
                    .setColor(0xb40000)
                    .setDescription("Игрок 1, выберете действие: атака, у вас 15 секунд");
                message.channel.send(embed);
                setTimeout(function () {
                    if (u.typeattack == "атака") {
                        u.typeattack = "не выбрано"
                        let dmg = Math.round(Math.random() * (u.atk - 1) + 1);
                        pu.hp -= dmg;
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 1 наносит " + dmg + " урона по Игроку 2.\nУ Игрока 2 - " + pu.hp+" ❤️");
                        message.channel.send(embed);
                        accept1 = true;
                    }
                    else {
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 1 пропускает ход");
                        message.channel.send(embed);
                        pu.hp = 100;
                        u.hp = 100;
                        pu.check = false;
                        u.check = false;
                        let embed1 = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 2 победил, Игрок 1 струсил и проиграл.");
                        return message.channel.send(embed1);
                    }
                }, 1000 * 15)
                setTimeout(function () {
                    if (accept1) {
                        let embed2 = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 2, выберете действие: атака, у вас 15 секунд");
                        message.channel.send(embed2);
                        setTimeout(function () {
                            if (pu.typeattack == "атака") {
                                pu.typeattack = "не выбрано";
                                let dmg = Math.round(Math.random() * (pu.atk - 1) + 1);
                                u.hp -= dmg;
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription("Игрок 2 наносит " + dmg + " урона по Игроку 1.\nУ Игрока 1 - " + u.hp+" ❤️");
                                message.channel.send(embed);
                                accept2 = true;
                            }
                            else {
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription("Игрок 2 пропускает ход");
                                message.channel.send(embed);
                                        pu.hp = 100;
                                        u.hp = 100;
                                let embed1 = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription("Игрок 1 победил, Игрок 2 струсил и проиграл.");
                                    pu.check = false;
                                    u.check = false;
                                return message.channel.send(embed1);
                            }
                        }, 1000 * 15)
                    }
                }, 1000 * 15)
                setTimeout(function () {
                    if (accept1 && accept2) {
                        if (u.hp <= 0 || pu.hp <= 0) {
                            u.hp = 100;
                            pu.hp = 100;
                            pu.check = false;
                            u.check = false;
                            if (pu.hp <= 0) {
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription("Игрок 2 победил");
                                return message.channel.send(embed);
                            }
                            let embed = new MessageEmbed()
                                .setTitle("Fight.org")
                                .setColor(0xb40000)
                                .setDescription("Игрок 1 победил");
                            return message.channel.send(embed);
                        }
                        return fight();
                    }
                    else{
                        pu.check = false;
                        u.check = false;
                        u.hp = 100;
                        pu.hp = 100;
                    }
                }, 1000 * 45)
            }
        }
        else {
        let embed = new MessageEmbed()
            .setTitle("Fight.org")
            .setColor(0xb40000)
            .setDescription("Игрок не принял ваш запрос.");
        return message.channel.send(embed);
        }
    }, 1000 * 15)
};
module.exports.help = {
    name: "поединок"
}