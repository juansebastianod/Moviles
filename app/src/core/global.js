import { create } from 'zustand'

import api from './api'
import { faL } from '@fortawesome/free-solid-svg-icons'
import utils from './utils'
const useGlobal = create((set) => ({
    //inicializacion
    initialized: false,
    
    
    //Autenticacion
    pagina:'entrar',
    init:(pagina)=>{
        set((state) => ({
            initialized:true,
            pagina:pagina
        }))
    },
    authenticated: false,
    user: {},
    login: (user) => {
       
        set((state) => ({
            authenticated:true,
            user:user
        }))
    },
    logout: () => {
        set((state) => ({
            authenticated: false,
            user: {}
        }))
    },


    socket:null,
    socketConnet:async()=>{
     

    },

    socketClose: async()=>{
       

    }


}))




export default useGlobal