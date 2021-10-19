module.exports = (client, message) => {
    const prefix = "!";

    // Anti Invites
    
    if (message.content.match(/(https:\/\/)?(discord.(gg|com)\/(invite\/\w+|\w+))/g) && !message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        message.channel.send("No send discord invites!!!");
    };

    // Runs command 

    if(message.content.startsWith(prefix) && message.channel.type != "dm" && !message.author.bot) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || client.aliases.get(command);

        if(cmd) cmd.run(client, message, args);
    };
};