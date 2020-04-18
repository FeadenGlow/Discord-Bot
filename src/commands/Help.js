const Command = require('../Command');

const { getEmbedMessage } = require('../embedManager');
const { commandsPrefix } = require('../../data/botConfig.json');

class Help extends Command {
    constructor() {
        super('хелп', 'Выводит все доступные команды бота');
    }

    run(bot, message) {
        const embedBody = bot.commands.map((command, name) => {
            const commandStart = `${commandsPrefix}${name}`;

            // Данное условие было написано в целях временной обратной совместимости
		    // TODO: после окончания рефакторинга убрать содержание if-а
            if (command.help) {
                return `${commandStart} - без описания (старая версия)\n`;
            }
            else {
                if (command.isShowingInHelp()) {
                    return `${commandStart} - ${command.getDescription()}\n`;
                }
            }
            return null;
        }).filter(command => command !== null);

        const embed = getEmbedMessage(embedBody, 'HELP!', '#ff0000');
        return message.channel.send(embed);
    }
}

module.exports = Help;

/**
 * .пинг - бот отвечает 'pong!'
 * .кал <пример, который вы хотите посчитать> - пример записывать в одну строку. * - умножение, / - деление, ^ - возвидение в степени, % - остаток деления на число, чтобы высчитать проценты числа, нужно написать .кал <процент> <число>
 * .хелп - помощь с коммандами
 * .чис <сколько сообщений удалить> - эта команда удаляет сообщения. Для этого вам нужно быть админом
 * .инфа - информация о сервере
 * .нап <время, например 5s или 2m> <само сообщение о напоминании>
 * .зам - внизу есть строчка о том, как изменять заметки
 * .зап <обращение к пользователю> <число> - заплатить определённую сумму
 * .бал - проверить свой кошелёк
 * .проф - отображает ваш профиль
 * .ранд <число> - отображает случайное число от 1 до вашего числа
 * .авто - автогайд по Противостоянию
 * .бал - проверить свой кошелёк
 * .гайд - гайд по боту и игре в нём
 */
