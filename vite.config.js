import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }],
                    ["@babel/plugin-proposal-class-properties", { loose: true }]
                ]
            }
        }),
    ],
    server: {
        host: true,
        hmr: {
            overlay: true
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    base: '/petti/',
});
