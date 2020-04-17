const { MessageEmbed } = require('discord.js');
const topics = require('../data/topics.json');

const run = async (bot, message, args) => {
    /**
     * Аргументы комманды "темы":
     * 0 - доб (добавить)   / ред (редактировать)           / удал (удалить)                   / отм (отметить)
     * 1 - текст новой темы / номер темы для редактирования / номер темы, который надо удалить / новое состояние (проп, вып, невып)
     * 2 - -                / новый текст темы              / -                                / -
     */

    /**
     * Структура темы:
     * state (number): состояние темы (0 - пропуск; 1 - выполнено; 2 - не выполнено)
     * text (string): текст темы
     */

    function showBotReply(
        embedBody,
        embedTitle = 'TopicsManager.pen',
        embedColor = '#286cbd'
    ) {
        return message.channel.send(
            new MessageEmbed()
                .setTitle(embedTitle)
                .setColor(embedColor)
                .setDescription(embedBody)
        );
    }

    function getTopicStateNumberByName(name) {
        switch (name) {
            case 'вып':
                return 1;

            case 'невып':
                return 2;

            case 'проп':
            default:
                return 0;
        }
    }

    function getTopicStateSymbol(state) {
        switch (state) {
            case 1:
                return '✅';
            case 2:
                return '❌';
            case 0:
            default:
                return '⬜';
        }
    }

    function isCommandValid() {
        return args[1] > 0 && args[1] <= topics.length;
    }

    switch (args[0]) {
        case 'доб':
            topics[topics.length] = {
                state: 0,
                text: args.slice(1).join(' ')
            };
            return showBotReply(`Тема №${topics.length} была добавлена`);

        case 'ред':
            if (isCommandValid()) {
                topics[args[1]-1] = {
                    ...topics[args[1]-1],
                    text: args.slice(2).join(' ')
                };
                return showBotReply(`Содержимое темы №${args[1]} было изменено`);
            }
            return showBotReply(`Не удалось отредактировать тему №${args[1]}`);

        case 'удал':
            if (isCommandValid()) {
                topics.splice(args[1]-1, 1);
                return showBotReply(`Тема №${args[1]} была удалена`);
            }
            return showBotReply(`Не удалось удалить тему №${args[1]}`);

        case 'удал-все':
            topics.splice(0, topics.length);
            return showBotReply('Все темы были удалены');

        case 'отм':
            if (isCommandValid()) {
                topics[args[1]-1] = {
                    ...topics[args[1]-1],
                    state: getTopicStateNumberByName(args[2])
                };
                return showBotReply(`Состояние темы №${args[1]} изменено на ${getTopicStateSymbol(topics[args[1]-1].state)}`);
            }
            return showBotReply(`Не удалось изменить состояние темы №${args[1]}`);

        default:
            const defaultBotReplyBody =
                topics.length >= 1
                ? topics.map((topic, index) => {
                    const { state, text } = topic;
                    const topicState = getTopicStateSymbol(state);
                    return `${index+1}. ${topicState} ${text}`;
                })
                : 'Нету созданных тем';
            return showBotReply(defaultBotReplyBody);
    }
};

module.exports = {
    run,
    help: {
        name: 'темы'
    }
};
