#!/usr/bin/env node
import chalk from "chalk";
import * as commander from "commander";
import { ArbConverter } from "./commands";

commander.description(
  "CLI tool to convert ARB (Application Resource Bundle) files to other formats, and vice versa."
);

commander
  .command("from-arb <file>")
  .description("Specify the location of the ARB file to be converted")
  .option(
    "--to-hierarchical-json [dir]",
    "Convert to Hierarchical JSON (https://support.oneskyapp.com/hc/en-us/articles/214059578-Hierarchical-JSON-Format-json-)"
  )
  .action((arbFileLocation, cmd) => {
    try {
      if (cmd.toHierarchicalJson) {
        const arbConverter = new ArbConverter(
          arbFileLocation,
          cmd.toHierarchicalJson
        );
        arbConverter.convertToHierarchicalJson();
      } else {
        console.log(
          chalk.red(
            "Please specify an option to determine the type of conversion"
          )
        );
      }
    } catch (error) {
      console.log(chalk.red(error));
    }
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
