
import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Data } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  dataSource:User[];
  displayedColumns: string[] = ['nrousu', 'usuario', 'activo', 'nombre', 'apellido', 'email', 'actions'];
  dataSourceSorted;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  constructor(
    private userService: UserService,
    private router: Router, private data: Data
  ) { }

  ngOnInit() {    
    this.getData();    
  }

  getData() {
    setTimeout(() => {
      this.userService.getUser().subscribe(elements => {
        this.dataSource=elements.response.dsUsuariosDemo.ttusuarios.sort((a,b)=> a.nrousu-b.nrousu);
        this.dataSourceSorted = new MatTableDataSource(this.dataSource)
        this.dataSourceSorted.sort = this.sort;
      });
    }, 1000);    
  }

  onDelete(user){
    this.userService.deleteUser(user);
    this.data.isNew=false;
    this.getData();
    this.router.navigate(["home"]);
  }

  onEdit(user){
    this.data.storage=user;
    this.data.isNew=true;
    this.router.navigate(["home"]);   
  }

  ngOnDestroy(){
    this.dataSource=[];
    this.dataSourceSorted=[];
  }
}
