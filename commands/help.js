const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Help Menu")
    .setColor("#8300ff")
    .addField("Member Commands:", "help, serverinfo, botinfo, userinfo")
    .addField("Fun Commands:", "roll, flip, say")
    .addField("Misc:", "ping, avatar, help, prefix")
    .addField("Mod Commands", "addrole, removerole, kick, ban, purge, mute")
    .addField("Credits:", "Credits to Dovixx#1884 and sebi's bot tutorial For Helping Me Fix Bugs!")
    .addField("Support Server:", "https://discord.gg/EEPHpuS");

    message.channel.send(helpembed);
}

module.exports.help = {
    name: "help"
}
