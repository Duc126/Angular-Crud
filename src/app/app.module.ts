import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListModule } from './todo/todo-list/todo-list.module';
import * as Sentry from "@sentry/angular";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './todo/validation/validation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,

  ],
  providers: [ {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log('Bootstrap success'))
  .catch(err => console.error(err));
