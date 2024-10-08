module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: "9731",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
