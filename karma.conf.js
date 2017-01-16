module.exports = function (config) {
    config.set({

        basePath: "",

        frameworks: ["jasmine"],

        files: [
            "build/Spec.bundle.js"
        ],

        exclude: [],

        preprocessors: {
            "**/*.js": ["sourcemap"]
        },

        reporters: ["progress"],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ["PhantomJS"],

        singleRun: false,

        concurrency: Infinity

    });
};
