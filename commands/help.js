const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Help Menu")
    .setColor("#8300ff")
    .addField("Member Commands:", "help, serverinfo, botinfo, userinfo, and report.")
    .addField("Fun Commands:", "roll, flip, say")
    .addField("Misc:", "ping, avatar.")
    .addField("Credits:", "Credits to Dovixx#1884 For Helping Me Fix Bugs!")
    .addField("Support Server:", "https://discord.gg/EEPHpuS")

    message.channel.send(helpembed);

    if(message.member.hasPermission("ADMINISTRATOR")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#8300ff")
    .addField("Mod Commands", "addrole, removerole, kick, ban")

    try{
        await message.author.send(modembed);
        message.react("✔");
    }catch(e){
        message.reply("Your DMs are locked. I Cannot send you the mod commands.");
    }
}  

}

module.exports.help = {
    name: "help"
}
