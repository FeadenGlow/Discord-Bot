const Command = require('../Command');

class Clean extends Command {
    constructor() {
        super('чис', 'эта команда удаляет сообщения. Аргументом является число, сколько сообщений надо удалить. Для этого вам нужно быть администратором');
    }

    run(_, message, commandArgs) {
        try {
            const cleanMessagesNum = parseInt(commandArgs[0], 10);

            // TODO: создать менеджер прав пользователя и использовать его тут
            if (!message.member.hasPermission('MANAGE_MESSAGES')) {
                return message.channel.send('Для выполнения команды надо быть администратором');
            }

            if (cleanMessagesNum > 100) {
                return message.channel.send('Укажите значение меньше 100');
            }
            else if (cleanMessagesNum < 1) {
                return message.channel.send('Укажите значение больше 1');
            }

            return message.channel.bulkDelete(cleanMessagesNum+1);
        }
        catch (err) {
            return console.log(`Не удалось выполнить команду!\nИмя ошибки: ${err.name}`)
        }
    }
}

module.exports = Clean;
