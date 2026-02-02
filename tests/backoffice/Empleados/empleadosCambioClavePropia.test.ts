import { test } from "../../../core/driver/fixtures";
import { EmpleadosCambioClavePropiaWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosCambioClavePropia.workflow";

test(" cambio clave cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosCambioClavePropia.test.ts -g "cambio clave cancelar"
  const test = new EmpleadosCambioClavePropiaWorkflow(boPage);
  await test.cambioClaveCancelar(); // usa usuario y clave desde secrets
});


test(" cambio clave actualizar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosCambioClavePropia.test.ts
  const test = new EmpleadosCambioClavePropiaWorkflow(boPage);
  await test.cambioClaveActualizar(); // usa usuario y clave desde secrets
});