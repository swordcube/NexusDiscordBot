const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vagina')
        .setDescription('ugh'),
    async execute(interaction) {
        await interaction.reply({ content: "ew"});
    },
};