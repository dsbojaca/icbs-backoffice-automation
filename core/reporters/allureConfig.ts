import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  console.log("🔧 Allure report setup complete");
}

export default globalSetup;
