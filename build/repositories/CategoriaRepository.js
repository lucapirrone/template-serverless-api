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
exports.CategoriaRepository = void 0;
const mongodb_1 = require("../libs/mongodb");
const Categoria_1 = require("../models/Categoria");
class CategoriaRepository {
    constructor() {
        mongodb_1.connect();
    }
    getCategorie() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Categoria_1.CategoriaModel.find();
        });
    }
    aggiornaCategorie(categorie) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Categoria_1.CategoriaModel.deleteMany({});
            return yield Categoria_1.CategoriaModel.create(categorie);
        });
    }
    fromModelToAPI(categoria) {
        let response = {
            nome: categoria.nome
        };
        return response;
    }
}
exports.CategoriaRepository = CategoriaRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcmlhUmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvQ2F0ZWdvcmlhUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4QyxtREFBbUQ7QUFJbkQsTUFBYSxtQkFBbUI7SUFDNUI7UUFDSSxpQkFBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUssWUFBWTs7WUFDZCxPQUFPLE1BQU0sMEJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxTQUFTOztZQUM3QixNQUFNLDBCQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sTUFBTSwwQkFBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsU0FBUztRQUNwQixJQUFJLFFBQVEsR0FBZ0I7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3ZCLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFyQkQsa0RBcUJDIn0=