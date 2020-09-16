import {connect} from "../libs/mongodb";
import {Societa as SocietaAPI} from "../interfaces/models/societa";
import {SocietaModel} from "../models/Societa";


export class SocietaRepository {
    constructor() {
        connect();
    }

    async getSocieta() {
        return await SocietaModel.find();
    }

    async aggiornaSocieta(societa) {
        await SocietaModel.deleteMany({});
        return await SocietaModel.create(societa);
    }

    fromModelToAPI(societa): SocietaAPI {
        let response:SocietaAPI = {
            nome: societa.nome,
            logo: societa.logo,
            colore: societa.colore
        };
        return response;
    }

}
