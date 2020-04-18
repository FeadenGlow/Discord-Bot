class Command {
    constructor(name, description = 'без описания', showInHelp = true) {
        this.name = name;
        this.description = description;
        this.showInHelp = showInHelp;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    isShowingInHelp() {
        return this.showInHelp;
    }

    run(botClient, userMessage, commandArgs, profiles) {
        /**
         * Here is all magic going...
         * 
         * Аргументы:
         * botClient<ClientOptions> - https://discord.js.org/#/docs/main/stable/class/Client
         * userMessage<Message> - https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
         * commandArgs<string[]> - аргументы команды вводимые пользователем
         * profiles<object[]> - профили пользователей
         */
    }
}

module.exports = Command;
