module.exports = {
  apps: [
    {
      name: "beingmomen",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: "max",
      env: {
        NITRO_PORT: process.env.PORT,
      },
    },
  ],
};
