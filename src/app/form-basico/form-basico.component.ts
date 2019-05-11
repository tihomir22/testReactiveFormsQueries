import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.sass']
})
export class FormBasicoComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: (['valor por defecto', Validators.compose([Validators.required, Validators.maxLength(30)])]),
      message: (['mensaje por defecto', Validators.required]),
      career: (['carrera por defecto', Validators.required])
    })

    this.myForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

}
