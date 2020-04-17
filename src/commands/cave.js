const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(args[0] == "собрать"){
        if(u.area == "Секретный туннель"){
            u.cave = true;
        }
    }
};
module.exports.help = {
    name: "находка"
}