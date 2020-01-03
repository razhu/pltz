'use strict'

const db = require('./');
const debug = require('debug')('platziverse:db:setup')
const inquirer = require('inquirer');
const chalk = require('chalk');


const prompt = inquirer.createPromptModule();

async function setup () {

    const answer = await prompt([
        {
            type: 'confirm',
            name: 'setup',
            message: 'Are you sure you want to destroy de database?'
        }
    ])
    console.log('--------------_> answer ', answer);
    if(!answer.setup) {
        return console.log('Nothign happend!!');
    }
    const config = {
        dabasename: process.env.DB_NAME || 'ramiro',
        username: process.env.DB_USER || 'agetic',
        password: process.env.DB_PASS || 'agetic',
        hostname: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        setup: true,
        logging: s => debug(s)
    };
    await db(config).catch(handleFatalError);
        console.log(chalk.green('----------> Success!!!'));
        process.exit(0);
    }
    function handleFatalError(err) {
        console.log(chalk.red(err));
        process.exit(1);    
}
setup();