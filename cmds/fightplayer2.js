const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(args[0] == "атака"){
        u.typeattack = "атака";
    }
};
module.exports.help = {
    name: "действие"
}