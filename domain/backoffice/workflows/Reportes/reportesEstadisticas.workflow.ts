import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsReportes } from "../../actions/Navegacion/navegacionReportes.actions";
import { ReportesEstadisticasActions } from "../../actions/Reportes/reportesEstadisticas.actions";

export class ReportesEstadisticasWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsReportes: NavegacionActionsReportes;
    private ReportesEstadisticasActions: ReportesEstadisticasActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsReportes = new NavegacionActionsReportes(page);
            this.ReportesEstadisticasActions = new ReportesEstadisticasActions(page);
        }

    async consultaBancoDetalles(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Reportes Estadísticas
        await this.navegacionActionsReportes.clickReporteEstadisticas();

        // interacciones con el servicio
        await this.ReportesEstadisticasActions.clickComboButton();
        await this.ReportesEstadisticasActions.clickComboEventosServicio();
        await this.ReportesEstadisticasActions.clickPrimerIconoDetalles();
        await this.ReportesEstadisticasActions.clickModalCerrar();
        await this.ReportesEstadisticasActions.clickComboButton();
        await this.ReportesEstadisticasActions.clickComboEventosPerfil();
        
        

        //logout
        await this.loguin.logout();
    }

    async consultaClienteDetalles(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Reportes Estadísticas
        await this.navegacionActionsReportes.clickReporteEstadisticas();

        // interacciones con el servicio
        await this.ReportesEstadisticasActions.clickTabEstadisticasCliente();
        await this.ReportesEstadisticasActions.clickComboButton();
        await this.ReportesEstadisticasActions.clickComboItemfinal();
        

        //logout
        await this.loguin.logout();
    }
}