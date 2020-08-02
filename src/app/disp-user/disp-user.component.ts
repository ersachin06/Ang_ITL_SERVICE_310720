import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user-dto';

@Component({
  selector: 'app-disp-user',
  templateUrl: './disp-user.component.html',
  styleUrls: ['./disp-user.component.css']
})
export class DispUserComponent implements OnInit {

  @Input()
  data:User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
