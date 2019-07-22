import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm,Validators} from '@angular/forms';
import{UserService} from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login:UserService;
  constructor(private router:Router) {}

  ngOnInit() {
  }

onSubmit(login:NgForm){
        this.router.navigateByUrl('home');
}

}
