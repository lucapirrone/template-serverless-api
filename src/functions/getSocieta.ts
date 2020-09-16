import ResponseManager from "../libs/ResponseManager";
import {SocietaRepository} from "../repositories/SocietaRepository";
import {SecurityManager} from "../libs/SecurityManager";
import {ArraySocieta} from "../interfaces/models/arraySocieta";

export async function main(event){
    let responseManager = new ResponseManager();
    let repo = new SocietaRepository();
    let securityManager = new SecurityManager(event);

    if (!securityManager.isUserLogged())
        return responseManager.send(401);

    try {
        let societa = await repo.getSocieta();

        let response:ArraySocieta = [];

        for(const item of societa) {
            response.push(repo.fromModelToAPI(item));
        }

        return responseManager.send(200, response);
    } catch (err) {
        return responseManager.send(501, err);
    }
}
