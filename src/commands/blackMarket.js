const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.area != "В доме"){
        let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Для того чтобы воспользоваться чёрным рынком или продать что-либо вы должны быть дома");
        return message.channel.send(embed);
    }
    if(args[0] == "кристаллы" || args[0] == "жемчуг"){
        if(args[2] == "жемчуг" || args[0] == "жемчуг"){
            if(u.pearls == 0){
            let embed = new MessageEmbed()
             .setTitle("BlackMarket.org")
             .setDescription("У вас нету <:a_sfera_nasishenosti2:573817442711896074>-ов");
            return message.channel.send(embed);
            }
            if(args[0] == "жемчуг"){
            let howManyPearls = (u.pearls * 500) - 100;
            u.acoin += howManyPearls;
            let embed = new MessageEmbed()
             .setTitle("BlackMarket.org")
             .setDescription("Вы продали "+u.pearls+"<:a_sfera_nasishenosti2:573817442711896074>-ов за "+howManyPearls+"<:loxovskoi_mc:609154702533197845>-ов.(100<:loxovskoi_mc:609154702533197845>-ов стоит проход на чёрный рынок)");
            u.pearls = 0;
            return message.channel.send(embed);
            }
            let howManyPearls = (u.pearls * 500);
            u.acoin += howManyPearls;
            let embed = new MessageEmbed()
             .setTitle("BlackMarket.org")
             .setDescription("Вы продали "+u.pearls+"<:a_sfera_nasishenosti2:573817442711896074>-ов за "+howManyPearls+"<:loxovskoi_mc:609154702533197845>-ов.");
            u.pearls = 0;
            message.channel.send(embed);

        }
        let sold = (100 * u.crystalls) - 100;
        u.acoin += sold;
        if(u.crystalls == 0){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас нету <:cristall_boga:695684747879514232>-ов");
        return message.channel.send(embed);
        }
        u.crystalls = 0;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы продали <:cristall_boga:695684747879514232>-ы и получили за них: "+sold+"<:loxovskoi_mc:609154702533197845>-ов.(100<:loxovskoi_mc:609154702533197845>-ов стоит проход на чёрный рынок)");
        return message.channel.send(embed);
    }

    if(args[0] == "кирка"){
        if(u.activeItem == "Хлипкая кирка"){
        u.activeItem = "У вас нету активного предмета";
        u.acoin += 25;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали предмет.");
        return message.channel.send(embed);

        }
        let embed = new MessageEmbed()
        .setTitle("BlackMarket.org")
        .setDescription("У вас нету такого предмета.");
    return message.channel.send(embed);
    }


    if(args[0] == "бур"){
        if(u.activeItem == "Хлипкий бур"){

            u.activeItem = "У вас нету активного предмета";
            u.acoin += 125;
            let embed = new MessageEmbed()
                .setTitle("BlackMarket.org")
                .setDescription("Вы успешно продали предмет.");
            return message.channel.send(embed);
        }

        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас нету такого предмета.");
        return message.channel.send(embed);
    }


    //РЕСУРСЫ

    if(args[0] == "камень"){
        let price = args[1]*10;
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.stone >= price){
        u.stone -= price;
        u.acoin += priceItem;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали камни");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно камня");
        return message.channel.send(embed);
    }


    if(args[0] == "дерево"){
        let price = args[1]*10;
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.wood >= price){
        u.wood -= price;
        u.acoin += priceItem * 5;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали дерево");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно дерева");
        return message.channel.send(embed);
    }


    if(args[0] == "жруда"){
        let price = args[1];
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.iron_ore >= priceItem){
        u.iron_ore -= priceItem;
        u.acoin += priceItem * 2;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали железную руду");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно железной руды");
        return message.channel.send(embed);
    }


    if(args[0] == "железо"){
        let price = args[1]*10;
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.iron_plate >= priceItem){
        u.iron_plate -= priceItem;
        u.acoin += priceItem * 15;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали железные плиты");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно железных плит");
        return message.channel.send(embed);
    }


    if(args[0] == "зруда"){
        let price = args[1]*10;
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.gold_ore >= priceItem){
        u.gold_ore -= priceItem;
        u.acoin += priceItem * 5;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали золотую руду");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно золотой руды");
        return message.channel.send(embed);
    }


    if(args[0] == "золото"){
        let price = args[1]*10;
        let priceItem = parseInt(args[1]);
        if(isNaN(price) || isNaN(priceItem)){
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Произошла ошибка в обчислении, пожалуйста повторите попытку ещё раз");
        return message.channel.send(embed);
        }
        if(u.gold_plate >= priceItem){
        u.gold_plate -= priceItem;
        u.acoin += priceItem * 30;
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("Вы успешно продали золотую плиту");
        return message.channel.send(embed);
        }
        let embed = new MessageEmbed()
            .setTitle("BlackMarket.org")
            .setDescription("У вас недостаточно золотых плит");
        return message.channel.send(embed);
    }

};
module.exports.help = {
    name: "прод"
}