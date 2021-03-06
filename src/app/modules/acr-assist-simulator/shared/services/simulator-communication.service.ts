import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class SimulatorCommunicationService {
    // Observable string sources
    private simulatorSource = new Subject<string>();

    // Observable string streams
    simulatorSource$ = this.simulatorSource.asObservable();

    // Service message commands
    messageEmitter(mission: string) {
        this.simulatorSource.next(mission);
    }
}
