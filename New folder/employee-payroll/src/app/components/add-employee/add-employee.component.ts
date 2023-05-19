import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{
  departments: Array<any> = [
    { id: 1, name: "HR", value: "HR", checked: false },
    { id: 2, name: "Sales", value: "Sales", checked: false },
    { id: 3, name: "Finance", value: "Finance", checked: false  },
    { id: 4, name: "Engineer", value: "Engineer", checked: false },
    { id: 5, name: "Other", value: "Other", checked: false }
  ]


  employeeForm= this.formBuilder.group({ 
    name:new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{1}[A-Za-z ]{3,}")]),
    department:new FormControl('',[Validators.required]),
    profilePic:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    startdate:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
    note:new FormControl('',[Validators.required]),
    departments: this.formBuilder.array([])
  }) 
  constructor(
    private formBuilder: FormBuilder,
     private route: ActivatedRoute,
    //  private httpService:Http,
    ){}


  employee: Employee = new Employee();

  loginUser(){
    console.warn(this.employeeForm.value);
    this.httpService.addEmpData(this.employee).subscribe(response => {
      console.log(response);
    })
  }

  onCheckboxChange(event: MatCheckboxChange) {
    const empDepartment: FormArray = this.employeeForm.get('departments') as FormArray;

    if (event.checked) {
      empDepartment.push(new FormControl(event.source.value));
    } else {
      const index = empDepartment.controls.findIndex(
        (x) => x.value === event.source.value
      );
      empDepartment.removeAt(index);
    }
  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
