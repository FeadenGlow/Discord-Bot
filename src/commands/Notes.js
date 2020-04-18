const Command = require('../Command');

const { commandsPrefix } = require('../../data/botConfig.json');
const { getEmbedMessage } = require('../embedManager');

class Notes extends Command {
    /**
     * Аргументы команды "зам":
     * 0 - доб (добавить)      / ред (редактировать)              / удал (удалить)
     * 1 - текст новой заметки / номер заметки для редактирования / номер темы, который надо удалить
     * 2 - -                   / новый текст заметки              / -
     */
    constructor() {
        super('зам', 'заметки пользователя');
        this.maxNotesNum = 8;
    }

    run(_, message, commandArgs, profiles) {
        const userProfileNotes = profiles[message.author.id].notes;
        const isCommandValid = commandArgs[1] > 0
                            && commandArgs[1] <= this.maxNotesNum
                            && commandArgs[1] <= userProfileNotes.length

        switch(commandArgs[0]) {
            case 'ред':
                if (isCommandValid) {
                    userProfileNotes[commandArgs[1]-1] = commandArgs.slice(2).join(' ');
                    return message.channel.send(
                        getEmbedMessage(`Заметка №${commandArgs[1]} изменена`, 'NoteServer.ly', '#286cbd')
                    );
                }
                return message.channel.send(
                    getEmbedMessage(`Не удалось отредактировать заметку`, 'NoteServer.ly', '#286cbd')
                );

            case 'доб':
                if (userProfileNotes.length < this.maxNotesNum) {
                    const noteContent = commandArgs.slice(1);
                    userProfileNotes[userProfileNotes.length] = noteContent.length > 0 ? commandArgs.slice(1).join(' ') : '[безымянная заметка]';
                    return message.channel.send(
                        getEmbedMessage(`Заметка №${userProfileNotes.length} была добавлена`, 'NoteServer.ly', '#286cbd')
                    );
                }
                return message.channel.send(
                    getEmbedMessage(`Нельзя добавить больше ${this.maxNotesNum} заметок`)
                );

            case 'удал':
                if (isCommandValid) {
                    userProfileNotes.splice(commandArgs[1]-1, 1);
                    return message.channel.send(
                        getEmbedMessage(`Замкетка №${commandArgs[1]} была удалена`, 'NoteServer.ly', '#286cbd')
                    );
                }
                return message.channel.send(
                    getEmbedMessage(`Не удалось удалить заметку №${args[1]}`, 'NoteServer.ly', '#286cbd')
                );

            case 'удал-все':
                userProfileNotes.splice(0, userProfileNotes.length);
                return message.channel.send(
                    getEmbedMessage('Все заметки были удалены', 'NoteServer.ly', '#286cbd')
                );

            default:
                const defaultBotReplyBody =
                    userProfileNotes.length >= 1
                    ? userProfileNotes.map((note, index) => `${index+1}. ${note}`)
                    : 'Нету созданных заметок';
                return message.channel.send(
                    getEmbedMessage(defaultBotReplyBody, 'NoteServer.ly', '#286cbd')
                    .setFooter(`Чтобы добавить заметку напишите: ${commandsPrefix}зам доб <текст заметки>`)
                );
        }
    }
}

module.exports = Notes;

// Временно недоступно ¯\_(ツ)_/¯

// const Discord = module.require("discord.js");
// const fs = require("fs");
// let note = require("../note.json")
// const { Client, MessageEmbed } = require('discord.js');
// module.exports.run = async (bot, message, args)=>{
//     let uid = message.author.id;
//     let u = note[uid];
//     if(args[0] == "пом"){
//         if(args[1] == "1"){
//             u.note1 = args.slice(2).join(" ");
//             const embed1 = new MessageEmbed()
//              .setTitle("NoteServer.ly")
//              .setColor('#286cbd')
//              .setDescription("Заметка 1 изменена");
//             return message.channel.send(embed1);
//         }
//         if(args[1] == "2"){
//             u.note2 = args.slice(2).join(" ");
//             const embed2 = new MessageEmbed()
//              .setTitle("NoteServer.ly")
//              .setColor('#286cbd')
//              .setDescription("Заметка 2 изменена");
//             return message.channel.send(embed2);
//         }
//         if(args[1] == "3"){
//             u.note3 = args.slice(2).join(" ");
//             const embed3 = new MessageEmbed()
//              .setTitle("NoteServer.ly")
//              .setColor('#286cbd')
//              .setDescription("Заметка 3 изменена");
//             return message.channel.send(embed3);
//         }
//         if(args[1] == "4"){
//             u.note4 = args.slice(2).join(" ");
//             const embed4 = new MessageEmbed()
//              .setTitle("NoteServer.ly")
//              .setColor('#286cbd')
//              .setDescription("Заметка 4 изменена");
//             return message.channel.send(embed4);
//         }
//         if(args[1] == "5"){
//             u.note5 = args.slice(2).join(" ");
//             const embed5 = new MessageEmbed()
//              .setTitle("NoteServer.ly")
//              .setColor('#286cbd')
//              .setDescription("Заметка 5 изменена");
//             return message.channel.send(embed5);
//         }
//     }
//     const embed = new MessageEmbed()
//       .setTitle("NoteServer.ly")
//       .setColor('#286cbd')
//       .setDescription("Ваши заметки: \n1."+u.note1+"\n2."+u.note2+"\n3."+u.note3+"\n4."+u.note4+"\n5."+u.note5)
//       .setFooter("Чтобы добавить или заменить заметку напишите: .зам пом <номер заметки> <текст сообщения>");
//     message.channel.send(embed);
       
// }
// module.exports.help = {
//     name: "зам"
// }
