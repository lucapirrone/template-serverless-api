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
const CouponRepository_1 = require("../repositories/CouponRepository");
function main(event) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        console.log(event);
        let responseManager = new ResponseManager_1.default();
        let repo = new CouponRepository_1.CouponRepository();
        let userCognitoId = ((_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.identity) === null || _b === void 0 ? void 0 : _b.cognitoIdentityId) || "default";
        const body = JSON.parse(event.body);
        try {
            let coupon = yield repo.addCoupon(body, userCognitoId);
            return responseManager.send(200, repo.fromModelToAPI(coupon));
        }
        catch (err) {
            return responseManager.send(501, err);
        }
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9hZGRDb3Vwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2REFBc0Q7QUFDdEQsdUVBQWtFO0FBSWxFLFNBQXNCLElBQUksQ0FBQyxLQUFLOzs7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLGVBQWUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFFbEMsSUFBSSxhQUFhLEdBQUcsYUFBQSxLQUFLLENBQUMsY0FBYywwQ0FBRSxRQUFRLDBDQUFFLGlCQUFpQixLQUFJLFNBQVMsQ0FBQztRQUNuRixNQUFNLElBQUksR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBRztZQUNDLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDdkQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7O0NBQ0o7QUFkRCxvQkFjQyJ9