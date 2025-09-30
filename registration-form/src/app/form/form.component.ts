import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

Submit(form:any){
  console.log(form);
  alert("Form is Successfully Submitted");
  
}
courses:string[]=[
'web Development',
'Data Science',
'Artifical intelligence'
]

ngOnInit(){
  console.log("Inside Form Component");
}
}
