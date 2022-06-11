const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Repeat what a user says')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('The text to qerdnsoxawduiosjcdasiojsdksl')
                .setRequired(true)),
                async execute(interaction) {
                    const echo = interaction.options.getString('text');
                    await interaction.reply({ content: echo});
                },
};