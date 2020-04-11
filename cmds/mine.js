const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
let ms = require("ms");
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.area == "Кладбище"){
        let rand = Math.round(Math.random() * (5 - 1) + 1);
        
        if(rand == 5){
            u.stand = true;
            let embed = new MessageEmbed()
                .setTitle("DiscoverYourLand.free")
                .setColor(0x025e0a)
                .setDescription("Ваша лопата наткнулась на что-то твёрдое. Яростно продолжив копать, вы откопали какой-то пъедестал.\nЕго предназначение вам полностью неизвестно");
            return message.channel.send(embed);
        }
        else{
            let embed = new MessageEmbed()
                .setTitle("DiscoverYourLand.free")
                .setColor(0x025e0a)
                .setDescription("Ничего, кроме сгнившего трупа");
            return message.channel.send(embed);
        }
    }
    if(u.area != "Шахта"){
        let embed0 = new MessageEmbed()
            .setTitle("MINECOIN.hack.com")
            .setColor(0xffff00)
            .setDescription("Здесь нечего копать, отправляйтесь в шахту");
        return message.channel.send(embed0);
    } 
    u.counter++;
    if(u.counter > 3){
        u.counter = 0;
    }
    if(u.counter == 3){
        u.area = "В доме";
        let chanceGoldOre = Math.round(Math.random() * (10 - 1) + 1);
        let chanceMaxCoins = Math.round(Math.random() * (2 - 1) + 1);
        let resourse1;
        let resourse2;
        if(u.activeItem =="Железная кирка"){
            chanceGoldOre = Math.round(Math.random() * (10 - 9) + 9);
        }
        if(chanceGoldOre == 10){
            let value = 1;
            if(u.blessing == true){
                value = 2;
            }
            if(u.activeItem == "Железная кирка"){
                let value2 = Math.round(Math.random() * (3 - 1) + 1);
                if(value2 == 1){
                    value = Math.round(Math.random() * (3 - 1) + 1);
                }
                else{
                    value= Math.round(Math.random() * (5 - 3) + 3);
                }
            }
            u.gold_ore += value;
            resourse1 = value+" <:gold_ore:695792535049601094>"
        }
        else{
            let value = Math.round(Math.random() * (3 - 1) + 1);
            if(u.blessing == true){
                value = Math.round(Math.random() * (5 - 1) + 1);
            }
            if(u.activeItem == "Железная кирка"){
                let value2 = Math.round(Math.random() * (2 - 1) + 1);
                if(value2 == 1){
                    value = Math.round(Math.random() * (4 - 1) + 1);
                }
                else{
                    value= Math.round(Math.random() * (6 - 4) + 4);
                }
            }
            u.iron_ore += value;
            resourse1 = value +" <:iron_ore:695770290445090856>"
        }
        if(chanceMaxCoins == 2){
            let value = Math.round(Math.random() * (30 - 1) + 1);
            if(u.activeItem == "Железная кирка"){
                value = Math.round(Math.random() * (50 - 20) + 20);
            }
            u.acoin += value;
            resourse2 = value + " минералов ,которые вы сразу же продали за "+ value +" <:loxovskoi_mc:609154702533197845>-ов";
        }
        else {
            let value = Math.round(Math.random() * (30 - 1) + 1);
            if(u.activeItem == "Железная кирка"){
                value = Math.round(Math.random() * (30 - 8) + 8);
            }
            u.stone += value;
            resourse2 = value + " камней";
        }
        if(u.activeItem == "Железная кирка"){
            let broke = Math.round(Math.random() * (20 - 1) + 1);
            if(broke == 20){
                u.activeItem = "У вас нету активного предмета"
            let embed = new MessageEmbed()
                .setTitle("MINECOIN.hack.com")
                .setColor(0xffff00)
                .setDescription("Вы сломали свою железною кирку");
            return message.channel.send(embed);
            }
        }
        let random = Math.round(Math.random() * (20 - 1) + 1);
        if(random == 20){
            u.area = "Секретный туннель";
            let embed = new MessageEmbed()
                .setTitle("MINECOIN.hack.com")
                .setColor(0xffff00)
                .setDescription("Вы продолжаете махать лопатой, как вдруг вы упёрлись ею во что-то твёрдое. Это явно не залеж.\nВы стали ещё яростнее махать лопатой, как вдруг вы случайно проломили стену. Перед вами оказался проход, весь в золоте! Вы богаты!");
                setTimeout(function(){
                    if(u.cave == true){
                        u.cave = false;
                        let value3 = Math.round(Math.random() * (10 - 1) + 1);
                        u.gold_ore += value3;
                        u.area = "В доме"
                        let embed2 = new MessageEmbed()
                            .setTitle("MINECOIN.hack.com")
                            .setColor(0xffff00)
                            .setDescription("Вы решили собрать всю <:gold_ore:695792535049601094> со стены и вернуться домой , вы получили "+value3+" <:gold_ore:695792535049601094>");
                        return message.channel.send(embed2);
                    }
                    else if(u.tunnel){return}
                    else {
                        u.area = "В доме"
                        let embed2 = new MessageEmbed()
                            .setTitle("MINECOIN.hack.com")
                            .setColor(0xffff00)
                            .setDescription("Вы очень долго стояли и думали что же с этим вам делать, в последствии на вашу находку свалился обвал, в разочаровании вы пошли домой.");
                        return message.channel.send(embed2);
                    }
                },1000*1*60)
            return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("MINECOIN.hack.com")
            .setColor(0xffff00)
            .setDescription("Вы слишком устали, поэтому решили вернуться обратно и отдохнуть. За свои похождения вы добыли:  "+resourse1+" и "+resourse2);
        return message.channel.send(embed);
    }
    let embed1 = new MessageEmbed()
        .setTitle("MINECOIN.hack.com")
        .setColor(0xffff00)
        .setDescription("Тут ещё осталось!");
    return message.channel.send(embed1);
};
module.exports.help = {
    name: "копать"
}