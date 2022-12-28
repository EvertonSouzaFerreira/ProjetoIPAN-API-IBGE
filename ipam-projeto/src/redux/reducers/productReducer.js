import { ActionTypes } from "../conteants/action-types";

const inititalStateStados = {
    estados:[
        
    ]
}
export const estadosReducer = (state= inititalStateStados , {type, payload}) => {
    switch (type) {
        
        case ActionTypes.FETCH_ESTADOS:
            
            return {...state, estados:payload};
    
        default:
            return state;
    }
}

const inititalStateMunicipio ={
    municipios:[]
}

export const municipiosReducer = (state=inititalStateMunicipio, {type, payload}) => {
    switch (type) {
        

        case ActionTypes.FETCH_MUNICIPIOS:
            
            return {...state, municipios:payload};
    
        default:
            return state;
    }
}

const inititalStateMunicipioEscolhido ={
    municipio:[]
}
    


export const municipioReducer = (state=inititalStateMunicipioEscolhido, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_MUNICIPIO:
            
            return {...state,municipio:payload};
    
        default:
            return state;
    }
}