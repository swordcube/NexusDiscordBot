const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List of all commands'),
    async execute(interaction) {
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setDescription('All commands')
        .addFields(
            {name: 'echo', value: 'Repeat what a user says'},
            {name: 'vagina', value: 'ugh'},
            );
        
 const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Favorite Sword\'s Sex Offender on GitHub!')
                    .setStyle('LINK')
                    .setURL('https://github.com/swordcube/nexusdiscordbot'),
            );

        await interaction.reply({ content: ' ', ephemeral: true, components: [row], embeds: [newEmbed]});
    },
};