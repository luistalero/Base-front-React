import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function generateRobotsTxt(mode: string): Plugin {
  const env = loadEnv(mode, process.cwd());
  return {
    name: "generate-robots-txt",
    apply: "build",
    generateBundle() {
      let content = "";
      const environment = ["qa", "staging", "sandbox"];
      if (!environment.includes(env.VITE_APP_ENV.toLowerCase())) {
        content = `User-agent: *
Allow: /`;
      } else {
        content = `User-agent: *
Disallow: /`;
      }
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: content,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      generateRobotsTxt(mode),
      {
        name: "html-transform-noindex",
        transformIndexHtml(html) {
          const environment = ["qa", "staging", "sandbox"];
          if (environment.includes(env.VITE_APP_ENV.toLowerCase())) {
            return html.replace(
              /<head>/,
              `<head>\n  <meta name="robots" content="noindex, nofollow">`
            );
          }
        },
      },
    ],
    define: {
      global: {},
    },
    resolve: {
      alias: {
        src: "/src",
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3010,
    },
  };
});
