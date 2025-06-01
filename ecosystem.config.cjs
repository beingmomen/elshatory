module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: process.env.PORT,
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs",
    },
  ],
};
