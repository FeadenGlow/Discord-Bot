const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args)=>{
    let messageArray = message.content.split(" ");
    message.channel.send(eval(messageArray[1]));
};
module.exports.help = {
    name: "кал"
}