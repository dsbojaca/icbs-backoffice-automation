import { Page } from "@playwright/test";
import { SeguridadAdministracionImagenesPage } from "../../pages/Seguridad/seguridadAdministracionImagenes.page";

export class SeguridadAdministracionImagenesActions {
    private page: Page;
    private seguridadAdministracionImagenesPage: SeguridadAdministracionImagenesPage;    
    constructor(page: Page) {
        this.page = page;
        this.seguridadAdministracionImagenesPage = new SeguridadAdministracionImagenesPage(page);
    }

    clickComboButtonCategoria = async () => {
        await this.seguridadAdministracionImagenesPage.comboButtonCategoria().isEnabled()
        await this.seguridadAdministracionImagenesPage.comboButtonCategoria().click();
    }

    clickComboItemUltimo = async () => {
        await this.seguridadAdministracionImagenesPage.comboItemUltimo().isEnabled()                
        await this.seguridadAdministracionImagenesPage.comboItemUltimo().click();
    }   

    clickCreateNewImage = async () => {
        await this.seguridadAdministracionImagenesPage.tabCrearImagen().isEnabled()                
        await this.seguridadAdministracionImagenesPage.tabCrearImagen().click();
    }


}