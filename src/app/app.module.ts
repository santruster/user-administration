import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './render/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRadioModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HeaderComponent } from './render/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUsuariosComponent } from './render/form-usuarios/form-usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { Data } from './services/data.service';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FormUsuariosComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    NoopAnimationsModule, 
    MatTableModule, 
    MatSortModule, 
    MatIconModule, 
    MatToolbarModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatRadioModule, 
    MatButtonModule, 
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    MatTooltipModule
  ],
  providers: [HttpClientModule, Data],
  bootstrap: [AppComponent]
})
export class AppModule {}
