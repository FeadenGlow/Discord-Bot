const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args)=>{
    let x = Math.round(Math.random() * (args[0] - 1) + 1);
    if(isNaN(args[0]) || isNaN(x)){
        return message.channel.send("Твоё число неправильно записано");
    }
    if(0 >= args[0]){
        return message.channel.send("Ты не можешь отправить число меньше чем 0 или 0");
    }
    if(args[0] > 99999999999999999999){
        return message.channel.send("Ты записал слишком большое число");
    }
    message.channel.send(message.author.username + ' выпадает ' + x);
};
module.exports.help = {
    name: "ранд"
}