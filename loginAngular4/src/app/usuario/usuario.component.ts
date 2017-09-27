import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';





@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
 
  contatos: FirebaseListObservable<any[]>;
  contato: any = {};

  constructor(db: AngularFireDatabase) {
    this.contatos = db.list('contatos');
  }

  ngOnInit() {
  }

  addUser(){
    console.log(this.contato);
    this.contatos.push(this.contato);
    this.contato = {};
  }

}
