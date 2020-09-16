import ResponseManager from "../libs/ResponseManager";
import {SecurityManager} from "../libs/SecurityManager";
import {CategoriaRepository} from "../repositories/CategoriaRepository";
import {ArrayCategoria} from "../interfaces/models/arrayCategoria";

export async function main(event){
    let responseManager = new ResponseManager();
    let repo = new CategoriaRepository();
    let securityManager = new SecurityManager(event);

    if (!securityManager.isUserLogged())
        return responseManager.send(401);

    try {
        let categorie = await repo.getCategorie();

        let response:ArrayCategoria = [];

        for(const item of categorie) {
            response.push(repo.fromModelToAPI(item));
        }

        return responseManager.send(200, response);
    } catch (err) {
        return responseManager.send(501, err);
    }
}
