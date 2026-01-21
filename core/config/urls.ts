import { ENV } from "./env";

const urlsByEnv: Record<string, { backofficeBase: string }> = {
  local: {
    backofficeBase: "http://localhost:3000",
  },
  dev: {
    backofficeBase: "https://dev-backoffice.grupoaval.com",
  },
  qa: {
    backofficeBase: "https://bo-auto-bocc.solem.cl/icbs-backoffice-web/Process?MID=&AID=LOGIN-0006&RQI=F920019ADAB34B78",
  },
  staging: {
    backofficeBase: "https://staging-backoffice.grupoaval.com",
  },
  prod: {
    backofficeBase: "https://backoffice.grupoaval.com",
  },
};

export const URLS = urlsByEnv[ENV];
