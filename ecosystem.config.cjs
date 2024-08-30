module.exports = {
  apps: [
    {
      name: "elshatory",
      port: "66636",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
