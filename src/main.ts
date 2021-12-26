#!/usr/bin/env node

import yargs from "yargs";
yargs
  .scriptName("bob")
  .usage("$0 <cmd> [args]")
  .command(
    "login [id] [secret]",
    "Login before using this app.",
    (yargs) => {
      yargs
        .positional("id", {
          type: "string",
          describe: "Your spotify app client id",
        })
        .positional("secret", {
          type: "string",
          description: "Your spotify app client secret",
        });
    },
    async (args) => {
      const clientId = args.id as string;
      const clientSecret = args.secret as string;

      const { login } = await import("./login");
      login({ clientId, clientSecret });
    },
  )
  .command("start", "Start the app.", {}, async () => {
    const { start } = await import("./start");
    start();
  })
  .help().argv;
