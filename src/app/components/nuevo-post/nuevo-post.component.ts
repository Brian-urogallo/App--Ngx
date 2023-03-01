import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AgregarPost } from '../store/post.action';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';

  constructor(private toastr: ToastrService, private store: Store){}

  ngOnInit(){

  }

  agregarPost(){
    //validacion
    if(this.nombre == '' || this.descripcion == ''){
        this.toastr.error('Todos los campos son obligatorios','ERROR');
        return;
    }

    //creamos el objeto
    const post: Post ={
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }

    //disparamos el ngxs
    this.store.dispatch(new AgregarPost(post));

    //mensaje de confirmacion
    this.toastr.success(`Se agrego el Post: ${this.nombre.toUpperCase()} exitosamente`, 'Post Agregado!');
    this.resetForm(); 
  }

  resetForm(){
     //reseteamos el formulario
     this.nombre= '';
     this.descripcion= '';
  }
}
