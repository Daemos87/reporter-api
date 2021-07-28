import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  outputDir: "reports",
  reporter: [
    ["json", { outputFile: "./reports/report.json" }],
    ["junit", { outputFile: "./reports/report.xml" }],
  ],
};

export default config;
