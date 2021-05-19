import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: Data,
    private router: Router) { }

  ngOnInit() {
  }
  newUser(){
    this.data.isNew=true;
    this.router.navigate(["home"]);    
  }
  home(){
    this.data.isNew=false;
    this.router.navigate(["home"]);    
}

}
