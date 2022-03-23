import { Component, OnInit } from '@angular/core';
import { PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-grids';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public data: object[] = [];
  public pageSettings:PageSettingsModel;
  public editSettings:any;
  public filterSettings:FilterSettingsModel;
  public toolbar:string[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  constructor(private employeeService:EmployeeService) {
    this.pageSettings = {pageSizes: true, pageSize: 10};
    this.editSettings = {allowAdding: true, allowEditing: false, allowDeleting: true, newRowPosition: 'Top'}
    this.filterSettings = {showFilterBarOperator: true}
  }
  ngOnInit():void {
    this.employeeService.getEmployees().subscribe(data => {
      console.log(data);
      this.data = data.data;
    }
    )
  }
}
