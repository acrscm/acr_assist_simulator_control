import { NotRelevantDataElements } from './notrelevantdataelements.model';
import { CompositeCondition } from '../composite-condition';
import { Condition } from '../condition';
import { DecisionPoint } from './decisionpoint.model';
import { EndPointRef } from './endpointref.model';
import { ComputedValue } from './computed-value.model';
import * as ReportText  from 'testruleengine';

export class Branch {
  label: string;
  notRelevantDataElements: NotRelevantDataElements;
  compositeCondition: CompositeCondition;
  condition: Condition;
  decisionPoints: DecisionPoint[];
  endPointRef: EndPointRef;
  computedValue: ComputedValue;
  branches: Branch[] = [];
  reportText: ReportText[] = [];
  isManuallyAdded: boolean;

  constructor() {
  }
}
