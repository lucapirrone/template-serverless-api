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
const SocietaRepository_1 = require("../repositories/SocietaRepository");
const SecurityManager_1 = require("../libs/SecurityManager");
function main(event) {
    return __awaiter(this, void 0, void 0, function* () {
        let responseManager = new ResponseManager_1.default();
        let repo = new SocietaRepository_1.SocietaRepository();
        let securityManager = new SecurityManager_1.SecurityManager(event);
        if (!securityManager.isUserLogged())
            return responseManager.send(401);
        try {
            let societa = yield repo.getSocieta();
            let response = [];
            for (const item of societa) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U29jaWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jdGlvbnMvZ2V0U29jaWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFzRDtBQUN0RCx5RUFBb0U7QUFDcEUsNkRBQXdEO0FBR3hELFNBQXNCLElBQUksQ0FBQyxLQUFLOztRQUM1QixJQUFJLGVBQWUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO1lBQy9CLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxJQUFJO1lBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFdEMsSUFBSSxRQUFRLEdBQWdCLEVBQUUsQ0FBQztZQUUvQixLQUFJLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDNUM7WUFFRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztDQUFBO0FBckJELG9CQXFCQyJ9