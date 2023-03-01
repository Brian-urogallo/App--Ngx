import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { EliminarPost } from '../store/post.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit{
 posts$: Observable<Post[]>

  constructor (private store: Store,private toastr: ToastrService){
    this.posts$ = this.store.select(state => state.posts.listarPost)
  }
    
  ngOnInit(): void {
    
  }

  eliminarPost(id: string){
    this.store.dispatch(new EliminarPost(id))

    this.toastr.error('El post fue eliminado con exito', 'Post eliminado')
  }
}
