// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';
import { WindowFormComponent } from '../../pages/modal-overlays/window/window-form/window-form.component';


@Component({
  selector: 'ngx-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
// export class MyTableComponent implements OnInit {
export class MyTableComponent {

  smartTable: Ng2SmartTableModule;

  settings = {
    mode: 'external',
    edit: {
      editButtonContent: '<i class="nb-search"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-edit"></i>',
      confirmDelete: true,
    },
    actions: {
      columnTitle: '',
      position: 'right',
    },
    hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        sort: false,
        width: '5%',
      },
      firstName: {
        title: '이름',
        type: 'string',
      },
      lastName: {
        title: '성',
        type: 'string',
      },
      // username: {
      //   title: '계정',
      //   type: 'string',
      // },
      email: {
        title: '이메일',
        type: 'string',
      },
      // age: {
      //   title: '나이',
      //   type: 'number',
      // },
      address: {
        title: '주소',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private windowService: NbWindowService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  e;
  openWindowForm1(event) {
    this.e = event;
    this.windowService.open(WindowFormComponent, { title: '나이: ' + this.e.data.age });
  }

  openWindowForm2(event) {
    this.e = event;
    this.windowService.open(WindowFormComponent, { title: '이름: ' + this.e.data.firstName });
  }
}
