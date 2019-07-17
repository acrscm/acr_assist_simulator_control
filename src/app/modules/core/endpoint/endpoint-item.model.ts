import { TemplatePartial } from './template-partial';
import { Diagnosis } from './diagnosis.model';
import { ReportSection } from './report-section.model';

export class EndpointItem {
    isManuallyAdded: boolean;
    id: string;
    label: string;
    diagnosis: Diagnosis;
    reportSections: ReportSection[] = [];
}