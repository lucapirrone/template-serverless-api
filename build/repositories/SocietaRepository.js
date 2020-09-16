var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocietaRepository = void 0;
const mongodb_1 = require("../libs/mongodb");
const Societa_1 = require("../models/Societa");
class SocietaRepository {
    constructor() {
        mongodb_1.connect();
    }
    getSocieta() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Societa_1.SocietaModel.find();
        });
    }
    aggiornaSocieta(societa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Societa_1.SocietaModel.deleteMany({});
            return yield Societa_1.SocietaModel.create(societa);
        });
    }
    fromModelToAPI(societa) {
        let response = {
            nome: societa.nome,
            logo: societa.logo,
            colore: societa.colore
        };
        return response;
    }
}
exports.SocietaRepository = SocietaRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29jaWV0YVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yaWVzL1NvY2lldGFSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDLCtDQUErQztBQUcvQyxNQUFhLGlCQUFpQjtJQUMxQjtRQUNJLGlCQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFSyxVQUFVOztZQUNaLE9BQU8sTUFBTSxzQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLGVBQWUsQ0FBQyxPQUFPOztZQUN6QixNQUFNLHNCQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sTUFBTSxzQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsT0FBTztRQUNsQixJQUFJLFFBQVEsR0FBYztZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN6QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBdkJELDhDQXVCQyJ9