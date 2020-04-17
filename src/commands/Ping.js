const Command = require('../Command');

class Ping extends Command {
    constructor() {
        super('пинг', 'бот отвечает "pong!"');
    }

    run(_, message) {
        return message.channel.send('pong!');
    }
}

module.exports = Ping;
