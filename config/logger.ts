import * as log from "$std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    // file: new log.handlers.FileHandler("WARNING", {
    //   filename: "./log.txt",
    //   // you can change format of output message using any keys in `LogRecord`.
    //   formatter: "{levelName} {msg}",
    // }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      //   handlers: ["console", "file"],
      handlers: ["console"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

const logger = log.getLogger();

export default logger;
