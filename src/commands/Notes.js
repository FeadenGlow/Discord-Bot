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
