const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    watchOptions: {
        ignored: [/node_modules/]
    },
    entry: {
        index: `${__dirname}/src/ui/index.tsx`
    },
    output: {
        path: `${__dirname}/lib/ui`,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.webpack.json"
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: `${__dirname}/src/ui/**/*.{html,svg}`,
                    to: `${__dirname}/lib/ui`,
                    context: `${__dirname}/src/ui`
                }
            ]
        })
    ],
    externals: {
        "eventemitter3": "EventEmitter3",
        "react": "React",
        "react-dom": "ReactDOM",
        "@fluentui/react": "Fabric"
    }
};
