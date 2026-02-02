 import { Page } from "@playwright/test";
 import { DashboardPage } from "../../pages/dashboard.page";
 import { WaitUtils } from "../../../../core/utils/waitUtils";
 
 export class NavegacionActionsEmpleados {
   private page: Page;
   private dashboard: DashboardPage;
 
   constructor(page: Page) {
     this.page = page;
     this.dashboard = new DashboardPage(page);
    }
    

    // ---- MENÚ EMPLEADOS ----
    clickMenuEmpleados = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
    };

    clickEmpleadosEstadoOperaciones = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosEstadoOperaciones().isEnabled();
        await this.dashboard.empleadosEstadoOperaciones().click();
    };

    clickEmpleadosCambioClavePropia = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosCambioClavePropia().isEnabled();
        await this.dashboard.empleadosCambioClavePropia().click();
    };

    clickEmpleadosAutorizaciones = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosAutorizaciones().isEnabled();
        await this.dashboard.empleadosAutorizaciones().click();
    };

    clickEmpleadosConfigAutorizaciones = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosConfigAutorizaciones().isEnabled();
        await this.dashboard.empleadosConfigAutorizaciones().click();
    };

    clickEmpleadosAlertas = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosAlertas().isEnabled();
        await this.dashboard.empleadosAlertas().click();
    };

    clickEmpleadosActividad = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosActividad().isEnabled();
        await this.dashboard.empleadosActividad().click();
    };

    clickEmpleadosAcceso = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosAcceso().isEnabled();
        await this.dashboard.empleadosAcceso().click();
    };

    clickEmpleadosCambioClave = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosCambioClave().isEnabled();
        await this.dashboard.empleadosCambioClave().click();
    };

    clickEmpleadosAdministracion = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosAdministracion().isEnabled();
        await this.dashboard.empleadosAdministracion().click();
    };

    clickEmpleadosPerfil = async () => {
        await this.dashboard.menuEmpleados().isEnabled();
        await this.dashboard.menuEmpleados().click();
        await this.dashboard.empleadosPerfil().isEnabled();
        await this.dashboard.empleadosPerfil().click();
    };
}