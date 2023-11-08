import {create} from 'zustand'

const useGlobal =create((set) => ({
    //Autenticacion

    authenticated:true,
    user:{},

    login:(user)=>{
    set((state)=>({
        authenticated:true,
        user:{}
}))

    },
    
    logout:() => {
        set((state)=>({
            uthenticated:false,
            user:{}
    }))

    }
    

}))

export default useGlobal