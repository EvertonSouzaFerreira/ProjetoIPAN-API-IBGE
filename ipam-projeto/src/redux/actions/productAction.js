import axios from "axios"
import { ActionTypes } from "../conteants/action-types"


export const fetchEstados = () =>  async (dispatch) =>{
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    
    dispatch({type: ActionTypes.FETCH_ESTADOS, payload: response.data})
}



export const fetchMunicipios = (id) =>  async (dispatch) =>{
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
    
    dispatch({type: ActionTypes.FETCH_MUNICIPIOS, payload: response.data})
}


export const fetchMunicipio = (id) =>  async (dispatch) =>{
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}/distritos`)
    
    dispatch({type: ActionTypes.SELECTED_MUNICIPIO, payload: response.data})
}

