import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';


export const FirebaseConfig= {
    apiKey: "AIzaSyC0pxEWI0yNVCjjIyUEPwWKRbNVwsJ9QXE",
    authDomain: "angular4-444f6.firebaseapp.com",
    databaseURL: "https://angular4-444f6.firebaseio.com",
    projectId: "angular4-444f6",
    storageBucket: "angular4-444f6.appspot.com",
    messagingSenderId: "547216356445"
  };

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: 'usuario', component: UsuarioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
