module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: "9731",
      exec_mode: "cluster",
      instances: 1,
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
