import { Component, OnInit } from '@angular/core';
import { NgForm,Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.css']
})
export class CreateFileComponent implements OnInit {
  filedetails:FileService;
  constructor(private router:Router) {}

  ngOnInit() {
  }

onSubmit(login:NgForm){
        this.router.navigateByUrl('home');

}
}
