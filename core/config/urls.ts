import { ENV } from "./env";

const urlsByEnv: Record<string, { backofficeBase: string }> = {
  local: {
    backofficeBase: "http://localhost:3000",
  },
  dev: {
    backofficeBase: "https://dev-backoffice.grupoaval.com",
  },
  qa: {
    backofficeBase: "https://bo-auto-bavv.solem.cl/icbs-backoffice-web",
  },
  cc: {
    backofficeBase: "https://bo-cc-bocc.solem.cl/icbs-backoffice-web/",
  },
  auto: {
    backofficeBase: "https://bo-auto-bocc.solem.cl/icbs-backoffice-web/",
  },
};

export const URLS = urlsByEnv[ENV];
