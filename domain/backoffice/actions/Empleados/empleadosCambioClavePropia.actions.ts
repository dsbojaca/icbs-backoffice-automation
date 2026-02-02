import { Page } from "@playwright/test";
import { EmpleadosCambioClavePropiaPage } from "../../pages/Empleados/empleadosCambioClavePropia.page";

export class EmpleadosCambioClavePropiaActions {
    private page: Page;
    private empleadosCambioClavePropiaPage: EmpleadosCambioClavePropiaPage;    
    constructor(page: Page) {
        this.page = page;
        this.empleadosCambioClavePropiaPage = new EmpleadosCambioClavePropiaPage(page);
    }

    inputPasswordActual(passwordActual: string) {
        return this.empleadosCambioClavePropiaPage.inputPasswordActual().isVisible();
        return this.empleadosCambioClavePropiaPage.inputPasswordActual().fill(passwordActual);
    }
    inputPasswordNueva(passwordNueva: string) {
        return this.empleadosCambioClavePropiaPage.inputPasswordNueva().isVisible();
        return this.empleadosCambioClavePropiaPage.inputPasswordNueva().fill(passwordNueva);
    }
    inputPasswordConfirmar(passwordConfirmar: string) {
        return this.empleadosCambioClavePropiaPage.inputPasswordConfirmar().isVisible();
        return this.empleadosCambioClavePropiaPage.inputPasswordConfirmar().fill(passwordConfirmar);
    }
    clickBotonActualizar() {
        return this.empleadosCambioClavePropiaPage.botonActualizar().isEnabled();
        return this.empleadosCambioClavePropiaPage.botonActualizar().click();
    }
    clickBotonCancelar() {
        return this.empleadosCambioClavePropiaPage.botonCancelar().isEnabled();
        return this.empleadosCambioClavePropiaPage.botonCancelar().click();
    }

   

}