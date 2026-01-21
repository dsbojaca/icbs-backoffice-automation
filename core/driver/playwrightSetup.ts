
import "dotenv/config";
import { URLS } from "../config/urls";
import { SECRETS } from "../config/secrets";
import { ENV } from "../config/env";


export class PlaywrightSetup {
  environment: string;
  baseUrl: string;
  secrets: any;

  constructor() {
    this.environment = ENV;
    this.baseUrl = URLS.backofficeBase;
    this.secrets = SECRETS;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  getSecrets() {
    return this.secrets;
  }

  getEnvironment() {
    return this.environment;
  }
}
