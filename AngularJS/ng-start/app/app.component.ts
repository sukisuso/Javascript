import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector : 'my-app',
  templateUrl:'./app/app.component.html',
  styles:['./app/app.componetn.css']
})

export class AppComponent {
  message = 'Hello';
  users: User[] = [
    {id:25, name:'Chris', username:'sevilayha' },
    {id:24, name:'Jesús', username:'jjuan' },
    {id:26, name:'Holly', username:'hholly' }
  ];
  activeUser:User;

  selectUser(user: User){
    this.activeUser = user;
    console.log(user);
  }

  onUserCreated(event){
    this.users.push(event.user);
    console.log(event);
  }
}
