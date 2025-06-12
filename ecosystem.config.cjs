module.exports = {
  apps: [
    {
      name: "beingmomen",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: "max",
      env: {
        PORT: process.env.PORT,
      },
    },
  ],
};
