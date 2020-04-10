const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.area != "В доме"){
        let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Для того чтобы воспользоваться магазином вы должны быть дома");
        return message.channel.send(embed);
    }
    if(args[0] == "куп"){
        if(args[1] == "инструменты"){

        if(args[2] == "1"){
            if(u.acoin < 50){
                const embed3 = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed3);
            }
            u.acoin -= 50;
            u.activeItem = "Хлипкая кирка";
            const embed4 = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили предмет.");
            return message.channel.send(embed4);
        }

        if(args[2] == "2"){
            if(u.acoin < 250){
                const embed5 = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed5);
            }
            u.acoin -= 250;
            u.activeItem = "Хлипкий бур";
            const embed6 = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили предмет.");
            return message.channel.send(embed6);
        }
        if(args[2] == "3"){
            if(u.acoin < 180){
                const embed7 = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed7);
            }
            u.acoin -= 180;
            u.activeItem = "Таинственный мешок";
            const embed8 = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили предмет.");
            return message.channel.send(embed8);
        }
        if(args[2] == "4"){
            if(u.acoin < 10){
                const embed7 = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed7);
            }
            u.acoin -= 10;
            u.tools += 1;
            const embed8 = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили предмет.");
            return message.channel.send(embed8);
        }
    }
    if(args[1] == "ресурсы"){
        let index = parseInt(args[3]);
        if(isNaN(index)){
        let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы неправильно ввели количество ресурсов");
        return message.channel.send(embed);
            }
        if(args[2] == "1"){
            if(u.acoin < index * 3){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 3;
            u.stone += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" камня");
            return message.channel.send(embed);
        }


        if(args[2] == "2"){
            if(u.acoin < index * 10){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 10;
            u.wood += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" дерева");
            return message.channel.send(embed);
        }


        if(args[2] == "3"){
            if(u.acoin < index * 20){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 20;
            u.iron_ore += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:iron_ore:695770290445090856>");
            return message.channel.send(embed);
        }


        if(args[2] == "4"){
            if(u.acoin < index * 60){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 60;
            u.iron_plate += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:iron_plate:695761073185488898>");
            return message.channel.send(embed);
        }


        if(args[2] == "5"){
            if(u.acoin < index * 20){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 20;
            u.gold_ore += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:gold_ore:695792535049601094>");
            return message.channel.send(embed);
        }


        if(args[2] == "6"){
            if(u.acoin < index * 60){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 60;
            u.gold_plate += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:golden_plate:695787056038936606>");
            return message.channel.send(embed);
        }


        if(args[2] == "7"){
            if(u.acoin < index * 150){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 150;
            u.crystalls += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:cristall_boga:695684747879514232>-ов");
            return message.channel.send(embed);
        }


        /*if(args[2] == "8"){
            if(u.acoin < index * 1000){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= index * 1000;
            u.pearls += index;
            let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("Вы успешно купили "+index+" <:a_sfera_nasishenosti2:573817442711896074>");
            return message.channel.send(embed);
        }*/
    }
    if(args[1] == "столы"){
        if(args[2] == "1"){
            if(u.acoin < 500){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= 500;
            u.furnace = true;
            let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили печь.");
            return message.channel.send(embed);
        }


        if(args[2] == "2"){
            if(u.acoin < 250){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= 250;
            u.workbench = true;
            let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили стол.");
            return message.channel.send(embed);
        }


        if(args[2] == "3"){
            if(u.acoin < 3000){
                let embed = new MessageEmbed()
                .setTitle("MaxShop.ly")
                .setDescription("У вас недостаточно <:loxovskoi_mc:609154702533197845>-ов.");
                return message.channel.send(embed);
            }
            u.acoin -= 3000;
            u.printer = true;
            let embed = new MessageEmbed()
            .setTitle("MaxShop.ly")
            .setDescription("Вы успешно купили принтер.");
            return message.channel.send(embed);
        }
    }
    }
    if(args[0] == "инструменты"){
    let embed = new MessageEmbed()
    .setTitle("MaxShop.ly")
    .addFields(
          {name: '1. Хлипкая кирка', value: 'Пытает удачу держащего, позволяя моментально добыть от 0 до 100 <:loxovskoi_mc:609154702533197845>, после чего безвозвратно ломаясь. \nЦена: 50<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '2. Хлипкий бур', value:'Позволяет прокопаться вглубь, да вытащить из самих недр горсть кристаллов, от 0 до 7, коие в последствии можно будет продать на чёрном рынке, либо выручив хорошую прибыль, либо лишь потеряв её.\nЦена: 250<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '3. Таинственный мешок', value:"Стоит лишь разорвать его, да на свет высвободится абсолютно любой случайный предмет! Ящик пандоры, что сказать \nЦена: 180 <:loxovskoi_mc:609154702533197845>-ов"},
          {name: '4. Железные инструменты', value:'Позволяют вам высверливать, закручивать, пилить да вообще творить на верстаке.\nЦена: 10<:loxovskoi_mc:609154702533197845>-ов'}
          )
    .setFooter("Для того, что-бы получить более детальную информацию пропишите  .гайд")
    return message.channel.send(embed);
    }
    if(args[0] == "ресурсы"){
        let embed = new MessageEmbed()
    .setTitle("MaxShop.ly")
    .addFields(
          {name: '1. Камень', value:'Самый распространённый и легкодобываемый ресурс. Нужен в большинстве примитивных крафтов, да для создания каменных кирпичей. Можно без труда добыть, просто покопавшись без особых инструментов в шахте.\nЦена: 3<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '2. Дерево', value:'Довольно распространённое топливо, либо-же ресурс. Выступает компонентом большинства примитивных крафтов, да служит средним топливом. Получит можно рубкой деревьев.\nЦена: 10<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '3. Железная руда <:iron_ore:695770290445090856>', value:'Относительно прочная и распространённая руда. Служит для переплавки в плиты, либо-же для незамысловатых изделий.\nЦена: 20<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '4. Железная плита <:iron_plate:695761073185488898>', value:'Переплавленая в печи версия железной руды, являющаяся более продвинутым материалом. Вполне пригодна для относительно долгослужащих инструментов.\nЦена: 60<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '5. Золотая руда <:gold_ore:695792535049601094>', value:'Редкая и драгоценная руда, однако уступает другим металлам в прочности. Как и железная руда, служит для переплавки в плиты\nЦена: 20<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '6. Золотая плита <:golden_plate:695787056038936606>', value:'Драгоценный металл, необходимый в ряде механических и магических изделий, полученный плавкой золотой руды в печи\nЦена: 60<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '7. Кристалл <:cristall_boga:695684747879514232>', value:'Один из редчайших материалов, который хорошо оценивается в незаконной торговле. Служит и валютой, и материалом, и топливом для магических изделий.\nЦена: 150<:loxovskoi_mc:609154702533197845>-ов'},
          {name: '8. Таинственная Жемчужина <:a_sfera_nasishenosti2:573817442711896074>', value:'Редчайшая драгоценность, видели которую наживо лишь еденицы. Обладает ещё не изучеными свойствами. Поговаривают, иногда она может попасться в абсолютно неожиданном месте.\nЦена: Нет в наличии'},
          )
    .setFooter("Для того, что-бы получить более детальную информацию пропишите  .гайд")
    return message.channel.send(embed);
    }
    if(args[0] == "столы"){
        let embed = new MessageEmbed()
        .setTitle("MaxShop.ly")
        .addFields(
              {name: '1. Печь', value:'Описания нету\nЦена: 500<:loxovskoi_mc:609154702533197845>-ов'},
              {name: '2. Робочий стол', value:'Описания нету\nЦена: 250<:loxovskoi_mc:609154702533197845>-ов'},
              {name: '3. 3-Д Принтер', value:'Описания нету\nЦена: 3000<:loxovskoi_mc:609154702533197845>-ов'},
              )
        .setFooter("Для того, что-бы получить более детальную информацию пропишите  .гайд")
        return message.channel.send(embed);
    }
    let embed = new MessageEmbed()
    .setTitle("MaxShop.ly")
    .setDescription("Выберете раздел в магазине: столы, ресурсы, инструменты");
    return message.channel.send(embed);
};
module.exports.help = {
    name: "магаз"
}