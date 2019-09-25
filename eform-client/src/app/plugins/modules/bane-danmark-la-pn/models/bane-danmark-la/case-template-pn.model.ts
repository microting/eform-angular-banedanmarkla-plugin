export class CaseTemplatesPnModel {
  total: number;
  caseTemplates: Array<CaseTemplatePnModel> = [];
}
export class CaseTemplatePnModel {
  id: number;
  createdAt: Date;
  createdBy: string;
  title: string;
  showFrom: string;
  showTo: string;
  status: boolean;

}
