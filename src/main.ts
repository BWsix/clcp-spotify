#!/usr/bin/env node

import yargs from "yargs";

yargs
  .scriptName("clcp-spotify")
  .usage("$0 <cmd> [args]")
  .command(
    "login [id] [secret]",
    "Login before using this app.",
    (yargs) => {
      yargs
        .positional("id", {
          type: "string",
          describe: "your spotify app client id",
        })
        .positional("secret", {
          type: "string",
          describe: "your spotify app client secret",
        });
    },
    async (argv) => {
      const { login } = await import("./login");

      const clientId = argv.id as string;
      const clientSecret = argv.secret as string;

      login({ clientId, clientSecret });
    },
  )
  .command("start", "Start the app.", {}, async () => {
    const { start } = await import("./start");

    start();
  })
  .help().argv;
