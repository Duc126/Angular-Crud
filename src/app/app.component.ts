import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'TodoAngular';
  public validate = 'Validate Form';
  public validateModal: any;
  ngOnInit(): void {
    this.validateModal = new window.bootstrap.Modal(
      document.getElementById("validateModal")
    )
  }
  public formValidate = new FormGroup({
    firstName: new FormControl('', [Validators.required,  Validators.minLength(6)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])

  })
  public openValidate(){
    this.validateModal.show();
  }
  public onSubmit(){
    localStorage.setItem('validate', JSON.stringify(this.formValidate)  )
    alert(JSON.stringify(this.formValidate.value))
  }
}
