const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(args[0] == "хлипкая"){
        if(u.activeItem == "Хлипкая кирка"){
            if(u.area != "Шахта"){
                let embed = new MessageEmbed()
                    .setTitle("OneStorage.org")
                    .setColor(0x000000)
                    .setDescription("Вы не можете воспользоваться хлипкой киркой в этом месте!");
                return message.channel.send(embed);
                
            }
        
        u.activeItem = "У вас нету активного предмета";
        let global = Math.round(Math.random() * (3 - 1) + 1);
        let global2 = Math.round(Math.random() * (2 - 1) + 1);
        let global3 = Math.round(Math.random() * (5 - 1) + 1);

      if(global == 3 && global3 != 5 ){
            let chance = Math.round(Math.random() * (6 - 1) + 1);
            u.iron_ore += chance;
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:iron_ore:695770290445090856>");
            return message.channel.send(embed);
        }


        else if(global3 == 5 && global != 3){
            let chance = Math.round(Math.random() * (200 - 51) + 51);
            u.acoin +=chance
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:loxovskoi_mc:609154702533197845>-ов.");
            return message.channel.send(embed);
        }

        else{
            let chance = Math.round(Math.random() * (50 - 0) + 0);
            u.acoin +=chance
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:loxovskoi_mc:609154702533197845>-ов.");
            return message.channel.send(embed);
        }
        }
        else{
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("У вас нету такого предмета.");
        return message.channel.send(embed);
        }
    }

    if(args[0] == "железная"){
        if(u.activeItem == "Железная кирка"){
            if(u.area != "Шахта"){
                let embed = new MessageEmbed()
                    .setTitle("OneStorage.org")
                    .setColor(0x000000)
                    .setDescription("Вы не можете воспользоваться железной киркой в этом месте!");
                return message.channel.send(embed);
                }
            }
        let chance1 = Math.round(Math.random() * (2 - 1) + 1);
        let chance2 = Math.round(Math.random() * (2 - 1) + 1);
        let chance3 = Math.round(Math.random() * (4 - 1) + 1);
        if(chance1 == 2 && chance2 !=2){
            let chance = Math.round(Math.random() * (9 - 1) + 1)
            u.gold_ore += chance;
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:gold_ore:695792535049601094>.");
            u.activeItem = "У вас нету активного предмета"
            return message.channel.send(embed);
        }

        else if(chance2 == 2 && chance1 !=2){
            let chance = Math.round(Math.random() * (9 - 1) + 1)
            u.iron_ore += chance;
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:iron_ore:695770290445090856>.");
            u.activeItem = "У вас нету активного предмета"
            return message.channel.send(embed);
        }

        else {
            let chance = Math.round(Math.random() * (200 - 75) + 75)
            u.acoin += chance;
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно использовали предмет и получили "+chance+"<:loxovskoi_mc:609154702533197845>-ов.");
                u.activeItem = "У вас нету активного предмета"
            return message.channel.send(embed);
        }
    }
    if(args[0] == "топор"){
        if(u.activeItem == "Железный топор"){
        let countOfTry = Math.round(Math.random() * (10 - 3) + 3);
        if(u.counter> 10){
            u.counter = 0;
        }
        if(u.area != "Лес"){
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Похоже что здесь нечего рубить, отправтесь в лес чтобы стать древесным убийцей!");
        return message.channel.send(embed);
        }
        u.counter++;
        if(args[1] == "пилить"){
            if(u.tree == true){
                if(u.counter == countOfTry){
                    u.stump += countOfTry;
                    let embed = new MessageEmbed()
                        .setTitle("OneStorage.org")
                        .setColor(0x000000)
                        .setDescription("Вы успешно распилили дерево, получив "+countOfTry+" <:literally_a_stump:695773481270378556>-ов");
                    u.tree = false;
                    u.counter = 0;
                    return message.channel.send(embed);
                }
                else{
                    let embed = new MessageEmbed()
                        .setTitle("OneStorage.org")
                        .setColor(0x000000)
                        .setDescription("Продолжай пилить!");
                    return message.channel.send(embed);
                }
            }
            else{
                let embed = new MessageEmbed()
                    .setTitle("OneStorage.org")
                    .setColor(0x000000)
                    .setDescription("Вы не повалили дерево");
                return message.channel.send(embed);
            }
        }

        else if(args[1] == "рубить"){
            if(u.stump < 1){
                let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("У вас нет <:literally_a_stump:695773481270378556>-ов");
            return message.channel.send(embed);
            }
            let woodResult = u.stump * 5;
            let rand = Math.round(Math.random() * (woodResult - u.stump) + u.stump);
            u.wood += rand;
            u.activeItem = "У вас нету активного предмета";
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы раскололи "+u.stump+"<:literally_a_stump:695773481270378556> на "+ rand +" Дерева\nВы сломали свой топор.");
            u.stump = 0;
            return message.channel.send(embed);
        }


        else if(u.used2){
            let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вам нужно передохнуть 3 минуты");
        return message.channel.send(embed);
        }
        else if(u.counter == countOfTry){
            u.tree = true;
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы успешно повалили дерево, осталось его распилить");
            u.counter = 0;
            u.used2 = true;
            message.channel.send(embed);
            setTimeout(function(){
                u.used2 = false;
            },1000*3*60)
        }
        else{
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Продолжай рубить!");
            return message.channel.send(embed);
        }

    }
    }

    if(args[0] == "хлипкий"){
        if(u.activeItem == "Хлипкий бур"){
            if(u.area != "Пещера"){
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы не можете воспользоваться хлипким буром в этом месте!");
            return message.channel.send(embed);
            }
        u.activeItem = "У вас нету активного предмета";
        let chance = Math.round(Math.random() * (7 - 0) + 0);
        u.crystalls += chance;
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы успешно использовали предмет и получили "+chance+"<:cristall_boga:695684747879514232>-ов.");
        return message.channel.send(embed);
        }
        else{
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("У вас нету такого предмета.");
        return message.channel.send(embed);
        }
    }

    if(args[0] == "стальной"){
        if(u.activeItem == "Стальной бур"){
            if(u.area == "Секретный туннель"){
                u.area = "Замкнутая пещерка";
                u.tunnel = true;
            let embed = new MessageEmbed()
                .setTitle("MINECOIN.hack.com")
                .setColor(0xffff00)
                .setDescription("Вдруг перед вами осязает довольно маленькая и узкая пещерка, в конце которой лежит чей-то труп.\nРискнуть и начать исследовать, либо бросить это гиблое дело?");
            return message.channel.send(embed);
            }
            if(u.area != "Пещера"){
            let embed = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Вы не можете воспользоваться стальным буром в этом месте!");
            return message.channel.send(embed);
            }
        u.activeItem = "У вас нету активного предмета";
        let chance = Math.round(Math.random() * (10 - 0) + 0);
        let chance2 = Math.round(Math.random() * (20 - 5) + 5);
        let chance3 = Math.round(Math.random() * (60 - 30) + 30);
        u.crystalls += chance;
        u.iron_ore += chance2;
        u.stone += chance3;
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы успешно использовали предмет и получили "+chance+"<:cristall_boga:695684747879514232>-ов.");
        return message.channel.send(embed);
        }
        else{
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("У вас нету такого предмета.");
        return message.channel.send(embed);
        }
    }


    if(args[0] == "мешок"){
        if(u.activeItem == "Таинственный мешок"){
        u.activeItem = "У вас нету активного предмета";
        let global = Math.round(Math.random() * (6 - 1) + 1);
        
        if(global == 1){
        u.activeItem ="Хлипкая кирка";
            let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы получили Хлипкую кирку");
        return message.channel.send(embed);
        }

        if(global == 2){
            let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы ничего не получили");
        return message.channel.send(embed);
        }

        if(global == 3){
        let cryschance = Math.round(Math.random() * (4 - 1) + 1);
        u.crystalls += cryschance;
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы получили "+cryschance+" <:cristall_boga:695684747879514232>-а");
        return message.channel.send(embed);
        }

        if(global == 4){
        u.activeItem = "Хлипкий бур";
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы получили Хлипкий бур");
        return message.channel.send(embed);
        }

        if(global == 5){
        u.pearls++;
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы получили <:a_sfera_nasishenosti2:573817442711896074>");
        return message.channel.send(embed);   
        }
        if(global == 6){
        let coinchance = Math.round(Math.random() * (350 - 50) + 50);
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("Вы получили "+coinchance+" <:loxovskoi_mc:609154702533197845>");
        return message.channel.send(embed); 
        }
        else{
        let embed = new MessageEmbed()
            .setTitle("OneStorage.org")
            .setColor(0x000000)
            .setDescription("У вас нету такого предмета.");
        return message.channel.send(embed);
        }
        }
    }
    
};
module.exports.help = {
    name: "исп"
}