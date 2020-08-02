import { Component } from '@angular/core';
import { ItlRestService } from './itl-rest.service';
import { UserDTO, User, UserLstDto } from './model/user-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'AngITLService310720';
  data:User;
  usersLst:Array<User>;
  constructor(private service:ItlRestService)
  {

  }

  dispUserById()
  {
    this.service.getUserById(1).subscribe(
      res=>{
        console.log("inside dispUserById");
        console.log(res);
         let objUser:UserDTO=res as UserDTO;         
         this.data=objUser.data;
         console.log(this.data.avatar);
         console.log(this.data.email);
         console.log(this.data.first_name);
         console.log(this.data.last_name);
         console.log(this.data.id);
      }
    )
  }
  lstUsers()
  {
    this.service.getLstOfusers().subscribe(
      res=>{
        let lstUser:UserLstDto=res as UserLstDto;
        this.usersLst=lstUser.data;
        for(let user of this.usersLst)
        {
          console.log(user.id+" "+ user.first_name+" "+ user.last_name+" "+ user.avatar+" "+ user.email);
        }
      }
    )
  }



}
