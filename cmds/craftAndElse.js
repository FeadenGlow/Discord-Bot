const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.area != "В доме"){
        let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Для того чтобы воспользоваться крафтингом вы должны быть дома");
        return message.channel.send(embed);
    }
    if(args[0] == "верстак"){
        if(u.workbench == true){
            if(args[1] == "печь"){
                if(u.stone >= 60 && u.iron_plate >= 10){
                    u.stone -= 60;
                    u.iron_plate -= 10;
                    u.furnace = true;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы успешно создали печьку");
                return message.channel.send(embed);
                }
                else{
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас нету необходимых предметов, для создания требуется 60 камня и 10 <:iron_plate:695761073185488898>");
                return message.channel.send(embed);
                }
            }

            else if(args[1] == "железные"){
                if(u.wood >= 5 && u.iron_plate >= 2){
                    u.wood -= 5;
                    u.iron_plate -= 2;
                    u.tools += 3;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы успешно создали 3х железных инструментов");
                return message.channel.send(embed);
                }
                else{
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас нету необходимых предметов, для создания требуется 5 дерева и 2 <:iron_plate:695761073185488898>");
                return message.channel.send(embed);
                }
            }

            else if(u.tools < 1){
                if(u.etools == true){}
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас недостаточно инструментов");
                return message.channel.send(embed);
            }
            else{
                if(u.etools == true){
                    u.tools += 1;
                }
                u.tools -= 1; 
            }

            
            if(args[1] == "электронные"){
                if(u.steel >= 6&& u.gold_plate >= 4 && u.iron_plate >= 4 && u.crystalls >= 1){
                    u.gold_plate -= 4;
                    u.iron_plate -= 4;
                    u.steel -= 6;
                    u.crystalls -= 1;
                    u.etools = true;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы успешно создали 3х железных инструментов");
                return message.channel.send(embed);
                }
                else{
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас нету необходимых предметов, для создания требуется 5 дерева и 2 <:iron_plate:695761073185488898>");
                return message.channel.send(embed);
                }
            }

            if(args[1] == "хлипкая"){
                if(u.stone >= 100 && u.wood >= 5){
                    u.stone -= 100;
                    u.wood -= 5;
                    u.activeItem = "Хлипкая кирка";
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали хлипкую кирку");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 100 камня и 5 дерева");
                    return message.channel.send(embed);
                }
            }

            if(args[1] == "железная"){
                if(u.iron_plate >= 2 && u.wood >= 20){
                    u.iron_plate -= 2;
                    u.wood -= 20;
                    u.activeItem = "Железная кирка";
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали железную кирку");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 2 <:iron_plate:695761073185488898> и 20 дерева");
                    return message.channel.send(embed);
                }
            }

            if(args[1] == "топор"){
                if(u.iron_plate >= 3 && u.wood >= 10){
                    u.iron_plate -= 3;
                    u.wood -= 10;
                    u.activeItem = "Железный топор";
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали железный топор");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 3 <:iron_plate:695761073185488898> и 10 дерева");
                    return message.channel.send(embed);
                }
            }
            if(args[1] == "принтер"){
                if(u.steel >= 10 && u.gold_plate >= 2 && u.crystalls >= 6){
                    u.steel -= 10;
                    u.gold_plate -= 2;
                    u.crystalls -= 6;
                    u.printer = true;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали принтер");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 10 <:steel:697162647589748816> , 2 <:golden_plate:695787056038936606> и 6 <:crystal:695684747879514232>");
                    return message.channel.send(embed);
                }
            }


            if(args[1] == "слесарский"){
                if(u.iron_plate >= 8 && u.wood >= 60 && u.stump >= 20){
                    u.iron_plate -= 8;
                    u.wood -= 60;
                    u.stump -= 20;
                    u.locksmith = true;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали слесарский станок");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 8 <:iron_plate:695761073185488898> , 20 <:literally_a_stump:695773481270378556> и 60 дерева");
                    return message.channel.send(embed);
                }
            }
        }
        else{
        let embed = new MessageEmbed()
            .setTitle("CraftEveryDay.org")
            .setColor(0xb9b970)
            .setDescription("У вас нету рабочего стола");
        return message.channel.send(embed);
        }
    }

    if(args[0] == "пьедестал"){
        if(u.stand == true){
            if(args[1] == "благословение"){
                if(u.crystalls >= 5 && u.pearls >= 1 && u.respect >= 3){
                    u.crystalls -= 5;
                    u.pearls -= 1;
                    u.respect -= 3;
                    u.blessing = true;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали благословление кирки");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 1 <:huge_pearl:573817442711896074> , 5 <:crystal:695684747879514232>-ов и 3 божьих уважения");
                    return message.channel.send(embed);
                }
            }

            if(args[1] == "заклятие"){
                if(u.gold_plate >= 15 && u.crystalls >= 24 && u.pearls >= 1 && u.respect >= 5){
                    u.crystalls -= 24;
                    u.pearls -= 1;
                    u.gold_plate -= 15;
                    u.respect -= 5;
                    u.courage = true;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали заклятие неустанности");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 1 <:huge_pearl:573817442711896074> , 15 <:golden_plate:695787056038936606>, 24 <:crystal:695684747879514232>-ов и 3 божьих уважения");
                    return message.channel.send(embed);
                }
            }
        }
        else{
            let embed1 = new MessageEmbed()
                .setTitle("CraftEveryDay.org")
                .setColor(0xb9b970)
                .setDescription("Вы не открыли пьедестал");
            return message.channel.send(embed1);
        }
    }

    if(args[0] == "принтер"){
        if(u.printer == true){
            if(u.etools == false){
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас нету электронных инструментов");
                return message.channel.send(embed);
            }
            if(args[1] == "стальной"){
                if(u.steel >= 2 && u.iron_plate >= 2 && u.crystalls >= 1){
                    u.iron_plate -= 5;
                    u.wood -= 100;
                    u.stump -= 20;
                    u.activeItem = "Стальной бур";
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно стальной бур");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 2 <:steel:697162647589748816> , 2 <:iron_plate:695761073185488898> и 1 <:crystal:695684747879514232>");
                    return message.channel.send(embed);
                }
            }
        }
        else{
            let embed = new MessageEmbed()
            .setTitle("CraftEveryDay.org")
            .setColor(0xb9b970)
            .setDescription("У вас нету 3-д принтера");
        return message.channel.send(embed);
        }
    }

    if(args[0] == "сстанок"){
        if(u.locksmith == true){
            if(args[1] == "сундук"){
                if(u.iron_plate >= 4 && u.wood >= 20 && u.planks >= 10){
                    u.iron_plate -= 5;
                    u.wood -= 100;
                    u.stump -= 20;
                    u.chest = true;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы успешно создали сундук");
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("У вас нету необходимых предметов, для создания требуется 4 <:iron_plate:695761073185488898> , 20 дерева и 10 досок");
                    return message.channel.send(embed);
                }
            }
            if(args[1] == "доски"){
                let value = parseInt(args[2]);
                if(isNaN(value) || value < 1){
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Произошла ошибка, повторите попытку!");
                return message.channel.send(embed);
                }
                if(u.wood >= value*5){
                    u.wood -= value *5;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Ваши доски будут готовы через "+ value*10+" секунд");
                    message.channel.send(embed);
                    setTimeout(function(){
                    let embed1 = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Ваши доски были сделаны");
                    u.planks += value;
                    return message.channel.send(embed1);
                    },1000*10*value)
                }
            }
        }
        else{
        let embed1 = new MessageEmbed()
            .setTitle("CraftEveryDay.org")
            .setColor(0xb9b970)
            .setDescription("У вас нету слесарского станка");
        return message.channel.send(embed1);
        }
    }
    
    if(args[0] == "печь"){
        if(u.furnace == true){
            if(args[1] == "железо"){
                if(u.iron_ore < 2){
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас <:iron_ore:695770290445090856> меньше чем возможно переплавить");
                return message.channel.send(embed);
                }
                if(u.wood >= 5){
                if(u.iron_ore % 2 != 0  && u.iron_ore !=2){
                    let iron = u.iron_ore - 1;
                    u.iron_ore -= iron;
                    u.iron_plate += iron / 2;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы потратили 5 брёвен и переплавили "+ iron + " <:iron_ore:695770290445090856> в "+iron/2+" <:iron_plate:695761073185488898>");
                u.wood -=5;
                return message.channel.send(embed);
                }
                u.iron_plate += u.iron_ore / 2;
                u.iron_ore -= u.iron_ore;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы потратили 5 брёвен и переплавили всю свою <:iron_ore:695770290445090856> в  <:iron_plate:695761073185488898>");
                u.wood -=5;
                return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас недостаточно дерева");
                return message.channel.send(embed);
                }
            }


            if(args[1] == "золото"){
                if(u.gold_ore < 2){
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас <:gold_ore:695792535049601094> меньше чем возможно переплавить");
                return message.channel.send(embed);
                }
                if(u.wood >= 5){
                if(u.gold_ore % 2 != 0 && u.gold_ore != 2){
                    let gold = u.gold_ore - 1;
                    u.gold_ore -= gold;
                    u.gold_plate += gold / 2;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы потратили 5 брёвен и переплавили "+ gold + " <:gold_ore:695792535049601094> в "+gold/2+" <:golden_plate:695787056038936606>");
                u.wood -=5;
                return message.channel.send(embed);
                }
                u.gold_plate += u.gold_ore / 2;
                u.gold_ore -= u.gold_ore;
                let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Вы потратили 5 брёвен и переплавили всю свою <:gold_ore:695792535049601094> в <:golden_plate:695787056038936606>");
                u.wood -=5;
                return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("У вас недостаточно дерева");
                return message.channel.send(embed);
                }
            }

            if(args[1] == "сталь"){
                let value = parseInt(args[2]);
                if(isNaN(value) || value < 1 || u.stump < value*10){
                    let embed = new MessageEmbed()
                    .setTitle("CraftEveryDay.org")
                    .setColor(0xb9b970)
                    .setDescription("Произошла ошибка, повторите попытку!");
                return message.channel.send(embed);
                }
                if(u.iron_plate >= value*2){
                    u.iron_plate -= value *2;
                    u.stump -= value * 10;
                    let embed = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Вы закинули в печь "+ value*10 +"<:literally_a_stump:695773481270378556>, <:steel:697162647589748816> переплавится через "+ value*30+" секунд");
                    message.channel.send(embed);
                    setTimeout(function(){
                    let embed1 = new MessageEmbed()
                        .setTitle("CraftEveryDay.org")
                        .setColor(0xb9b970)
                        .setDescription("Ваша <:steel:697162647589748816> готова");
                    u.steel += value;
                    return message.channel.send(embed1);
                    },1000*30*value)
                }
            }
        }
        else{
            let embed1 = new MessageEmbed()
                .setTitle("CraftEveryDay.org")
                .setColor(0xb9b970)
                .setDescription("У вас нету печи");
            return message.channel.send(embed1);
        }
    }
};
module.exports.help = {
    name: "крафт"
}