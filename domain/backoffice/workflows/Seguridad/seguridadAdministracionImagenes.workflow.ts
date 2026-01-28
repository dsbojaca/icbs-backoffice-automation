import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsSeguridad } from "../../actions/Navegacion/navegacionSeguridad.actions";
import { SeguridadAdministracionImagenesActions } from "../../actions/Seguridad/seguridadAdministracionImagenes.actions";

export class SeguridadAdministracionImagenesWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsSeguridad: NavegacionActionsSeguridad;
    private seguridadAdministracionImagenesActions: SeguridadAdministracionImagenesActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsSeguridad = new NavegacionActionsSeguridad(page);
            this.seguridadAdministracionImagenesActions = new SeguridadAdministracionImagenesActions(page);
        }

    async visualizacionConsultarImagenes(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración de Imágenes
        await this.navegacionActionsSeguridad.clickSeguridadAdminImagenes();

        //interactuar con el servicio
        await this.seguridadAdministracionImagenesActions.clickComboButtonCategoria();
        await this.seguridadAdministracionImagenesActions.clickComboItemUltimo();

        //Logout
        await this.loguin.logout();
    }

    async visualizacionCrearImagenes(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Seguridad > Administración de Imágenes
        await this.navegacionActionsSeguridad.clickSeguridadAdminImagenes();

        //interactuar con el servicio
        await this.seguridadAdministracionImagenesActions.clickCreateNewImage();

        
        //Logout
        await this.loguin.logout();
    }
}