import { test } from "../../../core/driver/fixtures";
import { EmpleadosCambioClaveWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosCambioClave.workflow";


test("Cambio Clave Empleado Volver", async ({ boPage }) => {     // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosCambioClave.test.ts -g "Cambio Clave Empleado Volver"
  const test = new EmpleadosCambioClaveWorkflow(boPage);
  await test.cambioClaveEmpleadoVolver(); // usa usuario y clave desde secrets
}); 

test("Cambio Clave Empleado Cancelar", async ({ boPage }) => {     // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosCambioClave.test.ts
  const test = new EmpleadosCambioClaveWorkflow(boPage);
  await test.cambioClaveEmpleadoCancelar(); // usa usuario y clave desde secrets
}); 

test("Cambio Clave Empleado Aceptar Confirmar ", async ({ boPage }) => {     // ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosCambioClave.test.ts
  const test = new EmpleadosCambioClaveWorkflow(boPage);
  await test.cambioClaveEmpleadoAceptarConfirmar(); // usa usuario y clave desde secrets
}); 