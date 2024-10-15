// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": process.env,
    },
    optimizeDeps: {
        exclude: ["chunk-BZIQH6HL", "chunk-LPNQ7LP2", "chunk-JP5EGSEY", "chunk-KYHFFXN7"], // 문제가 되는 chunk 파일을 제외
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id.toString().split("node_modules/")[1].split("/")[0].toString();
                    }
                },
            },
        },
    },
});
