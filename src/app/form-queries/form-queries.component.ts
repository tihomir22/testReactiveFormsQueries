import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-queries',
  templateUrl: './form-queries.component.html',
  styleUrls: ['./form-queries.component.sass']
})
export class FormQueriesComponent implements OnInit {

  myForm: FormGroup;
  queriesArray: Array<any> = [{ nombre: "query01", valor: "SELECT * FROM AREAS" }, { nombre: "query02", valor: "SELECT * FROM ZONAS" }]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      queries: this.fb.array([])
    })
    this.queriesArray.forEach(query => {
      this.addQuery(query)
    });
  }

  get queryForms() {
    return this.myForm.get('queries') as FormArray;
  }

  addQuery(queryObj: Object) {
    const query = this.fb.group({
      nombre: [queryObj['nombre'], Validators.required],
      valor: [queryObj['valor'], Validators.required]
    })
    this.queryForms.push(query);
  }
  generarQuery(nombre: string, valor: string) {
    let query = { nombre: nombre, valor: valor }
    this.queriesArray.push(query)
    this.addQuery(query)
  }

}
