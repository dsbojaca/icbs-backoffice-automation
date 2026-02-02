import { test } from "../../../core/driver/fixtures";
import { EmpleadosActividadWorkflow } from "../../../domain/backoffice/workflows/Empleados/empleadosActividad.workflow";

test("consulta Empleados Activos", async ({ boPage }) => { //ejecutar el test con: npx playwright test tests/backoffice/Empleados/empleadosActividad.test.ts -g "consulta Empleados Activos"
  const test = new EmpleadosActividadWorkflow(boPage);
  await test.consultaEmpleadosActivos();
  // usa usuario y clave desde secrets
  
}); 
