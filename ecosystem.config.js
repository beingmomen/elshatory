module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: 3579,
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
