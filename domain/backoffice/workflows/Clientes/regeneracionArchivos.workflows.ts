import {LoginWorkflow} from "../login.workflow";
import { Page, expect } from "@playwright/test";
import { RegeneracionArchivosActions } from "../../actions/Clientes/clientesRegeneracionArchivos.actions";
import { NavegacionActionsclientes } from "../../actions/Navegacion/navegacionClientes.actions";
import { RegeneracionArchivosPage} from "../../pages/Clientes/clientesRegeneracionArchivos.page";
import { LoginActions } from "../../actions/login.actions";

export class RegenerarArchivosWorkflow {
  // lo llenaremos más adelante
  private page: Page; 
  private regeneracionArchivosActions: RegeneracionArchivosActions;
  private navegacionActionsclientes: NavegacionActionsclientes; 
  private regeneracionArchivosPage: RegeneracionArchivosPage;
  private loginActions: LoginActions;

  

    constructor(page: Page) {
      this.page = page;
      this.regeneracionArchivosActions = new RegeneracionArchivosActions(page);
      this.navegacionActionsclientes = new NavegacionActionsclientes(page);
      this.regeneracionArchivosPage = new RegeneracionArchivosPage(page);
      this.loginActions = new LoginActions(page);

      
    }

  async execute() {
    const login = new LoginWorkflow(this.page);
    await login.execute();
    await this.navegacionActionsclientes.cliRegeneracionArchivos();
    await this.regeneracionArchivosActions.clickCargaArchivos();
    await this.regeneracionArchivosPage.exportarExcelButton().isEnabled();
    await this.loginActions.logout();
    
  }
  

}

