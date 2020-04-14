const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile) => {
    let uid = message.author.id;
    let u = profile[uid];
    let nmOrM;
    let coin = parseInt(args[1]);
    if (args[0] == "принять") {
        u.ready = true;
        let embed = new MessageEmbed()
            .setTitle("Fight.org")
            .setColor(0xb40000)
            .setDescription("Вы подтвердили битву!");
        return message.channel.send(embed);
    }
    if(message.guild.member(message.mentions.users.first()) == null){
        let embed = new MessageEmbed()
            .setTitle("Fight.org")
            .setColor(0xb40000)
            .setDescription("Вы неправильно указали имя пользователя!");
        return message.channel.send(embed);
    }
    if(args[2] == "нм"){
        nmOrM = 1;
        if(isNaN(coin)){
            let embed = new MessageEmbed()
                .setTitle("Fight.org")
                .setColor(0xb40000)
                .setDescription("Вы неправильно указали число ставки!");
            return message.channel.send(embed);
        }
        if(coin <= 0){
            let embed = new MessageEmbed()
                .setTitle("Fight.org")
                .setColor(0xb40000)
                .setDescription("Нужно указать число больше чем 0!");
            return message.channel.send(embed);
        }
    }
    if(args[2] == "м"){
        nmOrM = 0;
        if(isNaN(coin)){
            let embed = new MessageEmbed()
                .setTitle("Fight.org")
                .setColor(0xb40000)
                .setDescription("Вы неправильно указали число ставки!");
            return message.channel.send(embed);
        }
        if(coin <= 0){
            let embed = new MessageEmbed()
                .setTitle("Fight.org")
                .setColor(0xb40000)
                .setDescription("Нужно указать число больше чем 0!");
            return message.channel.send(embed);
        }
    }
    let pUser = message.guild.member(message.mentions.users.first());// || message.guild.members.get(args[0]);
    let filter = m => m.author.id === message.author.id;
    let filter2 = m => m.author.id === pUser.id;
    let pu = profile[pUser.id];
    if (u.hp == undefined || pu.hp == undefined) {
        if (pu.hp == undefined) {
            pu.hp = 5
        }
        else {
            u.hp = 5;
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
    if (u.showHp == undefined || pu.showHp == undefined) {
        if (pu.showHp == undefined) {
            pu.showHp = "Здоров";
        }
        else {
            u.showHp = "Здоров";
        }
    }
    if (u.pointsMovement == undefined || pu.pointsMovement == undefined) {
        if (pu.pointsMovement == undefined) {
            pu.pointsMovement = 3;
        }
        else {
            u.pointsMovement = 3;
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
                if(u.used == true){
                    let embed = new MessageEmbed()
                        .setTitle("Fight.org")
                        .setColor(0xb40000)
                        .setDescription(`${message.author.username}, ваш ход. Напишите цифру от 1 до 3 что-бы атаковать. Вы ${u.showHp}, У вас ${u.pointsMovement} очков действий.`);
                    message.channel.send(embed);
                }
                else{
                let embed = new MessageEmbed()
                    .setTitle("Fight.org")
                    .setColor(0xb40000)
                    .setDescription(`${message.author.username}, ваш ход. Напишите цифру от 1 до 6 что-бы атаковать. Вы ${u.showHp}, У вас ${u.pointsMovement} очков действий.`);
                message.channel.send(embed);
                }
                message.channel.awaitMessages(filter, { max: 1 }).then(collected => {
                    let num = parseInt(collected.first().content);
                    let number1 = 6;
                    let number2 = 1;
                    /*if(collected.first().content == "действие"){
                        u.used = true;
                        u.pointsMovement -= 1;
                        number1 = 3;
                        number2 = 1;
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription(`Вы использовали действие. Потратив 1 очко действия`);
                        message.channel.send(embed);
                    }
                    else */if (isNaN(num) || num > number1 || num < number2) {
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription(`Вы неправильно записали число. Битва окончена,${pUser} победил.`);
                        if(nmOrM == 1){
                            pu.acoin += coin;
                            u.acoin -= coin;
                        }
                        if(nmOrM == 0){
                            pu.mcoin += coin;
                            u.mcoin -= coin;
                        }
                        pu.hp = 5;
                        u.hp = 5;
                        pu.showHp = "Здоров";
                        u.showHp = "Здоров";
                        pu.pointsMovement = 3;
                        u.pointsMovement = 3;
                        return message.channel.send(embed);
                    }
                    else {
                        let waste = 6 - num;
                        let random = Math.round(Math.random() * (6 - 1) + 1);
                        if(u.used == true){
                            u.used = false;
                            number1 = 6;
                            number2 = 1;
                            waste = 3-num;
                            random = Math.round(Math.random() * (3 - 1) + 1);
                        }
                            if (waste > u.pointsMovement) {
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription(`Вы перестарались`);
                                message.channel.send(embed);
                            }
                            else if (num <= random) {
                                if (num == random) {
                                    pu.hp -= 2;
                                }
                                else {
                                    pu.hp--;
                                }
                                let attackInfo;
                                if (pu.hp == 4) {
                                    attackInfo = `потрепали ${pUser}`;
                                    pu.showHp = "Потрёпан";
                                }
                                if (pu.hp == 3) {
                                    attackInfo = `ранили ${pUser}`;
                                    pu.showHp = "Ранен";
                                }
                                if (pu.hp == 2) {
                                    attackInfo = `истерзали ${pUser}`;
                                    pu.showHp = "Истерзан";
                                }
                                if (pu.hp == 1) {
                                    attackInfo = `почти довели ${pUser} до смерти`;
                                    pu.showHp = "Присмерти";
                                }
                                if (pu.hp <= 0) {
                                    pu.hp = 5;
                                    u.hp = 5;
                                    pu.showHp = "Здоров";
                                    u.showHp = "Здоров";
                                    pu.pointsMovement = 3;
                                    u.pointsMovement = 3;
                                    if(nmOrM == 1){
                                        pu.acoin -= coin;
                                        u.acoin += coin;
                                    }
                                    if(nmOrM == 0){
                                        pu.mcoin -= coin;
                                        u.mcoin += coin;
                                    }
                                    let embed = new MessageEmbed()
                                        .setTitle("Fight.org")
                                        .setColor(0xb40000)
                                        .setDescription(`Вам выпало ${random}, вы свергли ${pUser} и победили`);
                                    return message.channel.send(embed);
                                }
                                u.pointsMovement -= waste;
                                u.pointsMovement += num;
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription(`Вам выпало ${random}, вы ${attackInfo} , у вас ${u.pointsMovement} очков действий`);
                                message.channel.send(embed);
                            }
                        else {
                            u.pointsMovement -= waste;
                            u.pointsMovement += random;
                            let embed = new MessageEmbed()
                                .setTitle("Fight.org")
                                .setColor(0xb40000)
                                .setDescription(`Вам выпало ${random}, вы потратили свой ход в никуда, и при этом у вас ${u.pointsMovement} очков действий`);
                            message.channel.send(embed);
                        }
                        //ХОД ИГРОКА 2
                        if(u.used == true){
                            let embed = new MessageEmbed()
                                .setTitle("Fight.org")
                                .setColor(0xb40000)
                                .setDescription(`${message.author.username}, ваш ход. Напишите цифру от 1 до 3 что-бы атаковать. Вы ${u.showHp}, У вас ${u.pointsMovement} очков действий.`);
                            message.channel.send(embed);
                        }
                        else{
                        let embed = new MessageEmbed()
                            .setTitle("Fight.org")
                            .setColor(0xb40000)
                            .setDescription(`${pUser}, ваш ход. Напишите цифру от 1 до 6 что-бы атаковать. Вы ${pu.showHp}, У вас ${pu.pointsMovement} очков действий.`);
                        message.channel.send(embed);
                        }

                        message.channel.awaitMessages(filter2, { max: 1 }).then(collected => {
                            let num = parseInt(collected.first().content);
                            let number1 = 6;
                            let number2 = 1;
                            /*if(collected.first().content == "действие"){
                                u.used = true;
                                u.pointsMovement -= 1;
                                number1 = 3;
                                number2 = 1;
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription(`Вы использовали действие. Потратив 1 очко действия`);
                                message.channel.send(embed);
                            }*/
                            if (isNaN(num) || num > number1 || num < number2) {
                                let embed = new MessageEmbed()
                                    .setTitle("Fight.org")
                                    .setColor(0xb40000)
                                    .setDescription(`Вы неправильно записали число. Битва окончена,${message.author.username} победил.`);
                                pu.hp = 5;
                                u.hp = 5;
                                pu.showHp = "Здоров";
                                u.showHp = "Здоров";
                                pu.pointsMovement = 3;
                                u.pointsMovement = 3;
                                if(nmOrM == 1){
                                    pu.acoin -= coin;
                                    u.acoin += coin;
                                }
                                if(nmOrM == 0){
                                    pu.mcoin -= coin;
                                    u.mcoin += coin;
                                }
                                return message.channel.send(embed);
                            }
                            else {
                                let waste = 6 - num;
                                let random = Math.round(Math.random() * (6 - 1) + 1);
                                if(u.used == true){
                                    u.used = false;
                                    number1 = 6;
                                    number2 = 1;
                                    waste = 3-num;
                                    random = Math.round(Math.random() * (3 - 1) + 1);
                                }
                                if (waste > pu.pointsMovement) {
                                    let embed = new MessageEmbed()
                                        .setTitle("Fight.org")
                                        .setColor(0xb40000)
                                        .setDescription(`Вы перестарались`);
                                    message.channel.send(embed);
                                }
                                else if (num <= random) {
                                    if (num == random) {
                                        u.hp -= 2;
                                    }
                                    else {
                                        u.hp--;
                                    }
                                    let attackInfo;
                                    if (u.hp == 4) {
                                        attackInfo = "потрёпали " + message.author.username;
                                        u.showHp = "Потрёпан";
                                    }
                                    if (u.hp == 3) {
                                        attackInfo = "ранили " + message.author.username;
                                        u.showHp = "Ранен";
                                    }
                                    if (u.hp == 2) {
                                        attackInfo = "истерзали " + message.author.username;
                                        u.showHp = "Истерзан";
                                    }
                                    if (u.hp == 1) {
                                        attackInfo = "почти довели " + message.author.username + " до смерти";
                                        u.showHp = "Присмерти";
                                    }
                                    if (u.hp <= 0) {
                                        pu.hp = 5;
                                        u.hp = 5;
                                        pu.showHp = "Здоров";
                                        u.showHp = "Здоров";
                                        pu.pointsMovement = 3;
                                        u.pointsMovement = 3;
                                        if(nmOrM == 1){
                                            pu.acoin += coin;
                                            u.acoin -= coin;
                                        }
                                        if(nmOrM == 0){
                                            pu.mcoin += coin;
                                            u.mcoin -= coin;
                                        }
                                        let embed = new MessageEmbed()
                                            .setTitle("Fight.org")
                                            .setColor(0xb40000)
                                            .setDescription(`Вам выпало ${random}, вы свергли ${message.author.username} и победили`);
                                        return message.channel.send(embed);
                                    }
                                    pu.pointsMovement -= waste;
                                    pu.pointsMovement += num;
                                    let embed = new MessageEmbed()
                                        .setTitle("Fight.org")
                                        .setColor(0xb40000)
                                        .setDescription(`Вам выпало ${random}, вы ${attackInfo} , у вас ${pu.pointsMovement} очков действий`);
                                    message.channel.send(embed);
                                }
                                else {
                                    pu.pointsMovement -= waste;
                                    pu.pointsMovement += random;
                                    let embed = new MessageEmbed()
                                        .setTitle("Fight.org")
                                        .setColor(0xb40000)
                                        .setDescription(`Вам выпало ${random}, вы потратили свой ход в никуда, и при этом у вас ${pu.pointsMovement} очков действий`);
                                    message.channel.send(embed);
                                }


                                return fight();

                            }
                        })

                    }
                })
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