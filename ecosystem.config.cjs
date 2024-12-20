module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: 7777,
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs",
    },
  ],
};
