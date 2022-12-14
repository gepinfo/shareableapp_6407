import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },];
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.createticketsService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}