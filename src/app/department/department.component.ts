import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})


export class DepartmentComponent {

  dataSource: any;
  constructor(private Service:ServiceService){}

clickme(code:string,desc:string){
  debugger
  console.log(code,desc);
}

ngOnInit() {
  debugger
  this.Service.ShowDepartment().subscribe((result: any)=>{   
  this.dataSource=result;
  })
 }


}
