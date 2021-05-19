import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Data } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private data: Data,
    private router: Router) { }
  formulario: FormGroup;
  image:any;
  user:User;
  imageSrc: string = '';
  ngOnInit() {    
    this.loadFormComponents();
  }
  
  loadFormComponents(){
    if (this.data.storage){
      let active= (this.data.storage.activo)? 'true' : 'false';
      this.formulario = this.fb.group({
        nrousu: [{value: this.data.storage.nrousu, disabled: true}, Validators.required],
        usuario: [{value: this.data.storage.usuario, disabled: true}, Validators.required],
        activo: [{value: active, disabled: false}, Validators.required],
        clave: [{value: this.data.storage.clave, disabled: false}, Validators.required],
        nombre: [{value: this.data.storage.nombre, disabled: false}],
        apellido: [{value: this.data.storage.apellido, disabled: false}],
        email: [{value: this.data.storage.email, disabled: false}, [Validators.email, Validators.required]],
        telefono: [{value: this.data.storage.telefono, disabled: false}],
        namImagen64e: [{value: this.data.storage.namImagen64e, disabled: false}]      
      });
      if (this.data.storage.imagen64)        
          this.image = this.data.storage.imagen64;        
      
    }else {
      this.formulario = this.fb.group({
        nrousu: [{value: null, disabled: false}, Validators.required],
        usuario: [{value: null, disabled: false}, Validators.required],
        activo: [{value: null, disabled: false}, Validators.required],
        clave: [{value: null, disabled: false}, Validators.required],
        nombre: [{value: null, disabled: false}],
        apellido: [{value: null, disabled: false}],
        email: [{value: null, disabled: false}, [Validators.email, Validators.required]],
        telefono: [{value: null, disabled: false}],
        namImagen64e: [{value: null, disabled: false}]      
      });
    }
    
  }


  onSubmit(_datos) {
    this.user=_datos.value;    
    this.user.imagen64=this.imageSrc;
    if (!this.data.storage)
      this.userService.createUser(this.user);
     else{     
      this.user.nrousu=this.data.storage.nrousu;
      this.user.usuario=this.data.storage.usuario;
      this.userService.editUser(this.user);  
    }    
    this.data.isNew=false;
    this.router.navigate(["home"]);      
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    
  }

  ngOnDestroy(){
    this.data.storage=null;
    this.data.isNew=false;
  }

}
