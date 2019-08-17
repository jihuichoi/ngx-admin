import { NgModule } from '@angular/core';
// import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { NbCardModule, NbIconModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
// import { TablesRoutingModule, routedComponents } from './tables-routing.module';
// import { FsIconComponent } from './tree-grid/tree-grid.component';
import { MyTableComponent } from './my-table.component';
import { WindowComponent } from '../modal-overlays/window/window.component';
import { WindowFormComponent } from '../modal-overlays/window/window-form/window-form.component';

const COMPONENTS = [
    WindowComponent,
    WindowFormComponent,
];

const ENTRY_COMPONENTS = [
    WindowFormComponent,
];


@NgModule({
    imports: [
        NbCardModule,
        // NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        // TablesRoutingModule,
        Ng2SmartTableModule,
        NbWindowModule.forChild(),
    ],
    declarations: [
        // ...routedComponents,
        // FsIconComponent,
        MyTableComponent,
        COMPONENTS,
        WindowComponent,
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
})
export class MyTableModule { }
