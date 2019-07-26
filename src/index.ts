#!/usr/bin/env node
import chalk from "chalk";
import * as commander from "commander";

commander.description(
  "CLI tool to convert ARB (Application Resource Bundle) files to other formats, and vice versa."
);

commander
  .command("from-arb <file>")
  .description("Specify the location of the ARB file to be converted")
  .option(
    "--to-hierarchical-json",
    "Convert to Hierarchical JSON (https://support.oneskyapp.com/hc/en-us/articles/214059578-Hierarchical-JSON-Format-json-)"
  )
  .action((file, cmd) => {
    console.log(chalk.yellow(file));
    console.log(chalk.red(cmd.toHierarchicalJson));
  });

commander
  .command("to-arb <file>")
  .description("Specify the location of the file to be converted to ARB")
  .option(
    "--from-hierarchical-json",
    "Convert from Hierarchical JSON (https://support.oneskyapp.com/hc/en-us/articles/214059578-Hierarchical-JSON-Format-json-)"
  )
  .action((file, cmd) => {
    console.log(chalk.yellow(file));
    console.log(chalk.red(cmd.fromHierarchicalJson));
  });

if (!process.argv.slice(2).length) {
  commander.outputHelp();
  process.exit();
}

commander.parse(process.argv);
