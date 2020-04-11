#!/usr/bin/env node

import program from 'commander';
import { version } from '../../package.json';
import calculate from '..';

program
  .version(version)
  .arguments('<expression>')
  .description('calculate math expression.')
  .option('-f, --format [type]', 'Output formats: standard, plain, json')
  .action((expression) => (
    console.log(calculate(expression))
  ))
  .parse(process.argv);
