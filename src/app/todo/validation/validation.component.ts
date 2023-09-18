import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  public form = new FormGroup({
    firstName: new FormControl('', [Validators.required,  Validators.minLength(4)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    localStorage.setItem('Validate', JSON.stringify(this.form))

    alert(JSON.stringify(this.form.value))
  }
}
