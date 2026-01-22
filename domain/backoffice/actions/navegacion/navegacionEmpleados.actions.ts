 import { Page } from "@playwright/test";
 import { DashboardPage } from "../../pages/dashboard.page";
 import { WaitUtils } from "../../../../core/utils/waitUtils";
 
 export class NavegacionActions {
   private page: Page;
   private dashboard: DashboardPage;
 
   constructor(page: Page) {
     this.page = page;
     this.dashboard = new DashboardPage(page);
    }
    // ---- LOGOUT ----
    async logout() {
        await WaitUtils.waitAndClick(this.dashboard.logoutButton());
    }

    // ---- MENÚ EMPLEADOS ----
    clickMenuEmpleados = async () => {
        await WaitUtils.waitAndClick(this.dashboard.menuEmpleados());
    };

    clickEmpleadosEstadoOperaciones = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosEstadoOperaciones());
    };

    clickEmpleadosCambioClavePropia = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosCambioClavePropia());
    };

    clickEmpleadosAutorizaciones = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosAutorizaciones());
    };

    clickEmpleadosConfigAutorizaciones = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosConfigAutorizaciones());
    };

    clickEmpleadosAlertas = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosAlertas());
    };

    clickEmpleadosActividad = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosActividad());
    };

    clickEmpleadosAcceso = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosAcceso());
    };

    clickEmpleadosCambioClave = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosCambioClave());
    };

    clickEmpleadosAdministracion = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosAdministracion());
    };

    clickEmpleadosPerfil = async () => {
        await this.clickMenuEmpleados();
        await WaitUtils.waitAndClick(this.dashboard.empleadosPerfil());
    };
}