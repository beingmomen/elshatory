module.exports = {
  apps: [
    {
      name: "beingmomen",
      port: "9731",
      exec_mode: "cluster",
      instances: 1,
      cwd: "/home/beingmomen/actions-runner/_work/elshatory/elshatory",
      script:
        "/home/beingmomen/actions-runner/_work/elshatory/elshatory/.output/server/index.mjs",
    },
  ],
};
