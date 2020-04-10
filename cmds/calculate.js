const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args)=>{
  let messageArray = message.content.split(" ");  
  if(messageArray.length === 3){
    return message.channel.send(`${parseInt(messageArray[1]) / 100 * parseInt(messageArray[2])}`) 
    }
  if(/^-?\d+\.?\d?[-+*\/%]-?\d+\.?\d?$/gm .test(messageArray[1])){
    return message.channel.send(eval(messageArray[1]));
    }
  message.channel.send("Вы неправильно написали ");
};
module.exports.help = {
    name: "кал"
}