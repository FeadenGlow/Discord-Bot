const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile) => {
    let uid = message.author.id;
    let u = profile[uid];
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
            fight();
            function fight() {
                let accept1 = false;
                let accept2 = false;
                let embed = new MessageEmbed()
                    .setTitle("Fight.org")
                    .setColor(0xb40000)
                    .setDescription("Игрок 1, выберете действие: атака, у вас 10 секунд");
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
                        accept1 = true
                    }
                    else {
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 1 пропускает ход");
                        message.channel.send(embed);
                    }
                }, 1000 * 10)
                setTimeout(function () {
                    if (accept1) {
                        let embed2 = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Игрок 2, выберете действие: атака, у вас 10 секунд");
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
                            }
                        }, 1000 * 10)
                    }
                }, 1000 * 10)
                setTimeout(function () {
                    if (accept1 && accept2) {
                        if (u.hp <= 0 || pu.hp <= 0) {
                            u.hp = 100;
                            pu.hp = 100;
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
                    else {
                        pu.hp = 100;
                        u.hp = 100;
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription("Поединок оборвался, кто-то из учасников походил не вовремя");
                        message.channel.send(embed);
                    }
                }, 1000 * 20)
            }
        }
        else {
            message.channel.send("lox")
        }
    }, 1000 * 15)
};
module.exports.help = {
    name: "поединок"
}