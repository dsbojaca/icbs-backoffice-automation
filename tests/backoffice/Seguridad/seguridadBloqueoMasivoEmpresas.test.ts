import { test } from "../../../core/driver/fixtures";
import { SeguridadBloqueoMasivoEmpresasWorkflow } from "../../../domain/backoffice/workflows/Seguridad/seguridadBloqueoMasivoEmpresas.workflow";

test("Inactivar Volver", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadBloqueoMasivoEmpresas.test.ts
  const test = new SeguridadBloqueoMasivoEmpresasWorkflow(boPage);
  await test.inactivarVolver(); // usa usuario y clave desde secrets
}); 

test("Inactivar Cancelar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadBloqueoMasivoEmpresas.test.ts
  const test = new SeguridadBloqueoMasivoEmpresasWorkflow(boPage);
  await test.inactivarCancelar(); // usa usuario y clave desde secrets
}); 

test("Inactivar Aceptar Confirmar", async ({ boPage }) => { // ejecutar el test con: npx playwright test tests/backoffice/Seguridad/seguridadBloqueoMasivoEmpresas.test.ts
  const test = new SeguridadBloqueoMasivoEmpresasWorkflow(boPage);
  await test.inactivarAceptarConfirmar(); // usa usuario y clave desde secrets
}); 