import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: string[] = ['Daniel Hernandez', 'Jesus Rodriguez', 'Edgar Cantu'];

  deleteUser(user){
    this.users = this.users.filter(us => user != us)
  }

  addUser(newUser){
    this.users.push(newUser.value)
    newUser.value = '';
    newUser.focus();
    return false;
  }

  mostrar(user){
    alert(user);
  }


}
