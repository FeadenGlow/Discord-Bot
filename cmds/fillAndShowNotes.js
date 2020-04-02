const Discord = module.require("discord.js");
const fs = require("fs");
let note = require("../note.json")
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args)=>{
    let uid = message.author.id;
    let u = note[uid];
    if(args[0] == "пом"){
        if(args[1] == "1"){
            u.note1 = args.slice(2).join(" ");
            const embed1 = new MessageEmbed()
             .setTitle("NoteServer.ly")
             .setColor(0x0000ff)
             .setDescription("Заметка 1 изменена");
            return message.channel.send(embed1);
        }
        if(args[1] == "2"){
            u.note2 = args.slice(2).join(" ");
            const embed2 = new MessageEmbed()
             .setTitle("NoteServer.ly")
             .setColor(0x0000ff)
             .setDescription("Заметка 2 изменена");
            return message.channel.send(embed2);
        }
        if(args[1] == "3"){
            u.note3 = args.slice(2).join(" ");
            const embed3 = new MessageEmbed()
             .setTitle("NoteServer.ly")
             .setColor(0x0000ff)
             .setDescription("Заметка 3 изменена");
            return message.channel.send(embed3);
        }
        if(args[1] == "4"){
            u.note4 = args.slice(2).join(" ");
            const embed4 = new MessageEmbed()
             .setTitle("NoteServer.ly")
             .setColor(0x0000ff)
             .setDescription("Заметка 4 изменена");
            return message.channel.send(embed4);
        }
        if(args[1] == "5"){
            u.note5 = args.slice(2).join(" ");
            const embed5 = new MessageEmbed()
             .setTitle("NoteServer.ly")
             .setColor(0x0000ff)
             .setDescription("Заметка 5 изменена");
            return message.channel.send(embed5);
        }
    }
    const embed = new MessageEmbed()
      .setTitle("NoteServer.ly")
      .setColor(0x0000ff)
      .setDescription("Ваши заметки: \n1."+u.note1+"\n2."+u.note2+"\n3."+u.note3+"\n4."+u.note4+"\n5."+u.note5+"\nЧтобы добавить или заменить заметку напишите: .зам пом <номер заметки> <текст сообщения>");
    message.channel.send(embed);
       
}
module.exports.help = {
    name: "зам"
}