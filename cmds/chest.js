const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.area != "В доме"){
        let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Для того чтобы воспользоваться сундуком вы должны быть дома");
        return message.channel.send(embed);
    }
    if(u.chest == true){
        if(args[0] == "положить"){
            if(args[1] == 1){
                if(u.activeItem == "У вас нету активного предмета"){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего ложить");
                    return message.channel.send(embed);
                }
                if(u.itemc1 != "<пусто>" || u.itemc1 != undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Слот занят");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы положили в 1 слот "+u.activeItem);
                u.itemc1 = u.activeItem;
                u.activeItem = "У вас нету активного предмета";
                return message.channel.send(embed);
            }


            if(args[1] == 2){
                if(u.activeItem == "У вас нету активного предмета"){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего ложить");
                    return message.channel.send(embed);
                }
                if(u.itemc2 != "<пусто>" || u.itemc2 != undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Слот занят");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы положили в 2 слот "+u.activeItem);
                u.itemc2 = u.activeItem;
                u.activeItem = "У вас нету активного предмета";
                return message.channel.send(embed);
            }


            if(args[1] == 3){
                if(u.activeItem == "У вас нету активного предмета"){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего ложить");
                    return message.channel.send(embed);
                }
                if(u.itemc3 != "<пусто>" || u.itemc3 != undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Слот занят");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы положили в 3 слот "+u.activeItem);
                u.itemc3 = u.activeItem;
                u.activeItem = "У вас нету активного предмета";
                return message.channel.send(embed);
            }
            
        }
        else if(u.used3){
            let embed = new MessageEmbed()
            .setTitle("Storage.use")
            .setColor(0x864701)
            .setDescription("Вам нужно подождать 1 минуту");
        return message.channel.send(embed);
        }
        // u.used3 = true;
        // setTimeout(function(){
        //     u.used3 = false;
        // },1000*1*60)

        if(args[0] == "взять"){
            if(u.activeItem != "У вас нету активного предмета"){
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("У вас заняты руки.");
                return message.channel.send(embed);
            }
            if(args[1] == 1){
                if(u.itemc1 == "<пусто>" || u.itemc1 == undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего брать");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы взяли со слота 1 " + u.itemc1);
                u.activeItem = u.itemc1;
                u.itemc1 = "<пусто>";
                return message.channel.send(embed);
            }


            if(args[1] == 2){
                if(u.itemc2 == "<пусто>" || u.itemc2 == undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего брать");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы взяли со слота 1 " + u.itemc2);
                u.activeItem = u.itemc2;
                u.itemc2 = "<пусто>";
                return message.channel.send(embed);
            }


            if(args[1] == 3){
                if(u.itemc3 == "<пусто>" || u.itemc3 == undefined){
                    let embed = new MessageEmbed()
                        .setTitle("Storage.use")
                        .setColor(0x864701)
                        .setDescription("Нечего брать");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("Storage.use")
                    .setColor(0x864701)
                    .setDescription("Вы взяли со слота 1 " + u.itemc3);
                u.activeItem = u.itemc1;
                u.itemc3 = "<пусто>";
                return message.channel.send(embed);
            }
        }

        let embed = new MessageEmbed()
            .setTitle("Storage.use")
            .setColor(0x864701)
            .setDescription("Вы открыли сундук, в нём лежит:\n1. "+u.itemc1+"\n2. "+u.itemc2+"\n3. "+u.itemc3);
        return message.channel.send(embed);
    }//864701
};
module.exports.help = {
    name: "сундук"
}