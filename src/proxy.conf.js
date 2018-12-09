module.exports = {
  "/api/*": {
    target: "http://localhost:9001/pokemon/",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    bypass: function(req, res, proxyOptions) {
      console.log(req.path);
    }
  }
};
