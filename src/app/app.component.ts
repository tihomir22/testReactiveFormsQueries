import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaMultiplesInputsControlados';



  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {



  }




}
