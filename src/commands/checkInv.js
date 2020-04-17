const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    let printer;
    let furnace;
    let workbench;
    let chest;
    let locksmith;
    if(u.printer == true){
        printer = "Есть в наличии"
    }
    else{
        printer = "Нету"
    }
    if(u.furnace == true){
        furnace = "Есть в наличии"
    }
    else{
        furnace = "Нету"
    }
    if(u.workbench == true){
        workbench = "Есть в наличии"
    }
    else{
        workbench = "Нету"
    }
    if(u.chest == true){
        chest = "Есть в наличии"
    }
    else{
        chest = "Нету"
    }
    if(u.locksmith == true){
        locksmith = "Есть в наличии"
    }
    else{
        locksmith = "Нету"
    }

    if(u.blessnig == true){
        blessnig = "Есть в наличии"
    }
    else{
        blessnig = "Нету"
    }
    if(u.courage == true){
        courage = "Есть в наличии"
    }
    else{
        courage = "Нету"
    }
    if(u.etools == true){
        etools = "Есть в наличии"
    }
    else{
        etools = "Нету"
    }
    const embed2 = new MessageEmbed()
                .setTitle("OneStorage.org")
                .setColor(0x000000)
                .setDescription("Активный предмет: "+ u.activeItem+"\n<:cristall_boga:695684747879514232>: "+u.crystalls+"\n<:a_sfera_nasishenosti2:573817442711896074>: "+u.pearls+"\n<:iron_ore:695770290445090856>: "+u.iron_ore+"\n<:gold_ore:695792535049601094>: "+u.gold_ore+"\n<:iron_plate:695761073185488898>: "+u.iron_plate+"\n<:golden_plate:695787056038936606>: "+u.gold_plate+"\n<:literally_a_stump:695773481270378556>: "+u.stump+"\nДерева: "+u.wood+"\nКамней: "+u.stone+"\nДосок: "+u.planks+"\n<:steel:697162647589748816>: "+u.steel+"\nЖелезных инструментов: "+u.tools+"\nЭлектронные инструменты:"+etools+"\nМестоположение: "+u.area+"\nБожьих уважений: "+u.respect+"\nБлагословение: "+blessnig+"\nЗаклятие неустанности:"+courage+"\nПечь: "+furnace+"\nРабочий стол: "+workbench+"\nПринтер: "+printer+"\nСундук: "+chest+"\nСлесарский станок: "+locksmith);
    message.channel.send(embed2);
};
module.exports.help = {
    name: "инв"
}