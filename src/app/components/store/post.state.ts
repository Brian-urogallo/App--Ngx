import { Action, State, StateContext } from "@ngxs/store";
import { PostStateModel } from "./post.model";
import { AgregarPost, EliminarPost } from "./post.action";


@State<PostStateModel>({
    name: 'posts',
    defaults:{
        listarPost: []
    }
})

export class PostState {
  @Action(AgregarPost) agregarPost(ctx: StateContext<PostStateModel>, action: AgregarPost) {
    const state = ctx.getState();

    ctx.setState({
        ...state,
        listarPost:[
            ...state.listarPost,
            action.payload
        ]
    })
    }

    @Action(EliminarPost) eliminarPost({getState, patchState}: StateContext<PostStateModel>, {id}:EliminarPost){
        patchState({
            listarPost: [
                ...getState().listarPost.filter(post => post.id !== id)
            ]
        })
    }
} 


