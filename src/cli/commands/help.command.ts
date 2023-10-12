import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
    ${chalk.blue('Программа для подготовки данных для REST API сервера.')}
    Пример:
        ${chalk.bold('cli.js --<command> [--arguments]')}
    Команды:
        ${chalk.bold('--version:')}                                        # выводит номер версии
        ${chalk.bold('--help:')}                                           # печатает этот текст
        ${chalk.bold('--import')} ${chalk.italic(chalk.green('<path>:'))} ${chalk.italic(chalk.blue(('login password host dbname salt')))}  # импортирует данные из TSV
        ${chalk.bold('--generate')} ${chalk.bold(chalk.red('<n>'))} ${chalk.italic(chalk.green('<path>:'))} ${chalk.bold(chalk.magenta('<url>'))}                      # генерирует произвольное количество тестовых данных
    `);
  }
}

