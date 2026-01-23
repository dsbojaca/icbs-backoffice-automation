import { Page, expect } from "@playwright/test";
import { LoginWorkflow } from "../login.workflow";
import { NavegacionActionsReportes } from "../../actions/Navegacion/navegacionReportes.actions";
import {ReportesConsultaRetencionBorradoActions} from "../../actions/Reportes/reportesConsultaRetencionBorrado.actions";

export class ReportesConsultaRetencionBorradoWorkflow {  
    private page: Page;
    private loguin: LoginWorkflow;
    private navegacionActionsReportes: NavegacionActionsReportes;
    private reportesConsultaRetencionBorradoActions: ReportesConsultaRetencionBorradoActions;    
        constructor(page: Page) {
            this.page = page;
            this.loguin = new LoginWorkflow(page);
            this.navegacionActionsReportes = new NavegacionActionsReportes(page);
            this.reportesConsultaRetencionBorradoActions = new ReportesConsultaRetencionBorradoActions(page);
        }

    async execute(username?: string, password?: string) {

        // Realizar login
        await this.loguin.execute(username, password);  

        // Navegar a Reportes Consulta Retención Borrado
        await this.navegacionActionsReportes.clickReporteRetencionBorrado();

        //interactuar con el servicio
        await this.reportesConsultaRetencionBorradoActions.clickComboButtonTipo();
        await this.reportesConsultaRetencionBorradoActions.clickComboItemRegistrosUsuario();
        await this.reportesConsultaRetencionBorradoActions.clickInputFechaInicio();
        await this.reportesConsultaRetencionBorradoActions.clickCalendarioDia1();
        await this.reportesConsultaRetencionBorradoActions.clickBotonConsultar();
        await this.reportesConsultaRetencionBorradoActions.validarTablaInformacion();
        
        
    }
}