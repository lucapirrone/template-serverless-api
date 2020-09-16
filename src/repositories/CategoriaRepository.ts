import {connect} from "../libs/mongodb";
import {CategoriaModel} from "../models/Categoria";
import {Categoria as CategoriaAPI} from "../interfaces/models/categoria";


export class CategoriaRepository {
    constructor() {
        connect();
    }
    
    async getCategorie() {
        return await CategoriaModel.find();
    }

    async aggiornaCategorie(categorie) {
        await CategoriaModel.deleteMany({});
        return await CategoriaModel.create(categorie);
    }

    fromModelToAPI(categoria): CategoriaAPI {
        let response:CategoriaAPI = {
            nome: categoria.nome
        };
        return response;
    }

}
