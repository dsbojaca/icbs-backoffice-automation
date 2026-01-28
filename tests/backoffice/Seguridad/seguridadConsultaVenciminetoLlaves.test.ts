import { test } from "../../../core/driver/fixtures";
import { SeguridadConsultaVenciminetoLlavesWorkflow} from "../../../domain/backoffice/workflows/Seguridad/seguridadConsultaVenciminetoLlaves.workflow";

test("visualizacion Consulta", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConsultaVenciminetoLlaves.test.ts
  const test = new SeguridadConsultaVenciminetoLlavesWorkflow(boPage);
  await test.viualizacionConsulta(); // usa usuario y clave desde secrets
});  

test("parametrizacion Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConsultaVenciminetoLlaves.test.ts
  const test = new SeguridadConsultaVenciminetoLlavesWorkflow(boPage);
  await test.parametrizacionVolver(); // usa usuario y clave desde secrets
});  

test("parametrizacion Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConsultaVenciminetoLlaves.test.ts
  const test = new SeguridadConsultaVenciminetoLlavesWorkflow(boPage);
  await test.parametrizacionCancelar(); // usa usuario y clave desde secrets
});  

test("parametrizacion Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadConsultaVenciminetoLlaves.test.ts
  const test = new SeguridadConsultaVenciminetoLlavesWorkflow(boPage);
  await test.parametrizacionAceptarConfirmar(); // usa usuario y clave desde secrets
});  

