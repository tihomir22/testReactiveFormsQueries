import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-agrupado',
  templateUrl: './form-agrupado.component.html',
  styleUrls: ['./form-agrupado.component.sass']
})
export class FormAgrupadoComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //genero el grupo que estará dentro del segundo
    const phone = this.fb.group({
      area: ['default',Validators.required],
      prefix: [],
      line: []
    })
    const phone2 = this.fb.group({
      area: ['default',Validators.required],
      prefix: [],
      line: []
    })
    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone2,
    })

    this.myForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

}
