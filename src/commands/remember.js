const Discord = module.require("discord.js");
const fs = require("fs");
let ms = require("ms");
module.exports.run = async (bot, message, args)=>{
    let Timer = args[0];

    if(!args[0]){
        return message.channel.send("Используйте: .нап + число + s|m|h + сообщение")
    }
    if(args[0] <= 0){
        return message.channel.send("Используйте: .нап + число + s|m|h + сообщение")
    }
    message.channel.send("Бот скажет это сообщение через "+ms(ms(Timer), {long: true}))
    setTimeout(function(){
        message.channel.send(args.slice(1).join(" "))
    }, ms(Timer));
};
module.exports.help = {
    name: "нап"
}