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
exports.main = void 0;
const ResponseManager_1 = require("../libs/ResponseManager");
const SecurityManager_1 = require("../libs/SecurityManager");
const CategoriaRepository_1 = require("../repositories/CategoriaRepository");
function main(event) {
    return __awaiter(this, void 0, void 0, function* () {
        let responseManager = new ResponseManager_1.default();
        let repo = new CategoriaRepository_1.CategoriaRepository();
        let securityManager = new SecurityManager_1.SecurityManager(event);
        if (!securityManager.isUserLogged())
            return responseManager.send(401);
        try {
            let categorie = yield repo.getCategorie();
            let response = [];
            for (const item of categorie) {
                response.push(repo.fromModelToAPI(item));
            }
            return responseManager.send(200, response);
        }
        catch (err) {
            return responseManager.send(501, err);
        }
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2F0ZWdvcmllLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9nZXRDYXRlZ29yaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2REFBc0Q7QUFDdEQsNkRBQXdEO0FBQ3hELDZFQUF3RTtBQUd4RSxTQUFzQixJQUFJLENBQUMsS0FBSzs7UUFDNUIsSUFBSSxlQUFlLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTtZQUMvQixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSTtZQUNBLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTFDLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7WUFFakMsS0FBSSxNQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Q0FBQTtBQXJCRCxvQkFxQkMifQ==