import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsReportes } from "../../actions/Navegacion/navegacionReportes.actions";
import { ReportesEmpresasSinActividadActions } from "../../actions/Reportes/reportesEmpresasSinActividad.actions";

export class ReportesEmpresasSinActividadWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsReportes: NavegacionActionsReportes;
    private reportesEmpresasSinActividadActions: ReportesEmpresasSinActividadActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsReportes = new NavegacionActionsReportes(page);
            this.reportesEmpresasSinActividadActions = new ReportesEmpresasSinActividadActions(page);
        }

    async visualizarDetalles(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password); 
        
        // Navegar a Reportes de Empresas sin Actividad
        await this.navegacionActionsReportes.clickReporteEmpresasSinActividad();

        //Interracion con el servicio
        await this.reportesEmpresasSinActividadActions.clicInputFechaInicio();
        await this.reportesEmpresasSinActividadActions.clickCalendarioDia1();
        await this.reportesEmpresasSinActividadActions.clickBotonBuscar();
        await this.reportesEmpresasSinActividadActions.clickPrimerIconoDetallesTabla();
        await this.reportesEmpresasSinActividadActions.clickModalCerrar();

        //logout
        await this.loguin.logout();
    }
}
