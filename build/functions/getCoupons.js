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
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        let responseManager = new ResponseManager_1.default();
        let repo = new CouponRepository_1.CouponRepository();
        let userCognitoId = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.identity) === null || _b === void 0 ? void 0 : _b.cognitoIdentityId;
        const query = (_c = event.query) === null || _c === void 0 ? void 0 : _c.query;
        try {
            let coupons;
            if (query)
                coupons = yield repo.searchCoupons(userCognitoId, query);
            else
                coupons = yield repo.getCoupons(userCognitoId);
            let response = [];
            for (const coupon of coupons) {
                response.push(repo.fromModelToAPI(coupon));
            }
            return responseManager.send(200, response);
        }
        catch (err) {
            return responseManager.send(501, err);
        }
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q291cG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jdGlvbnMvZ2V0Q291cG9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFzRDtBQUN0RCx1RUFBa0U7QUFJbEUsU0FBc0IsSUFBSSxDQUFDLEtBQUs7OztRQUM1QixJQUFJLGVBQWUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFFbEMsSUFBSSxhQUFhLGVBQUcsS0FBSyxDQUFDLGNBQWMsMENBQUUsUUFBUSwwQ0FBRSxpQkFBaUIsQ0FBQztRQUN0RSxNQUFNLEtBQUssU0FBRyxLQUFLLENBQUMsS0FBSywwQ0FBRSxLQUFLLENBQUM7UUFFakMsSUFBSTtZQUNBLElBQUksT0FBTyxDQUFDO1lBRVosSUFBSSxLQUFLO2dCQUNMLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDOztnQkFFekQsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVuRCxJQUFJLFFBQVEsR0FBYyxFQUFFLENBQUM7WUFFN0IsS0FBSSxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM5QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6Qzs7Q0FDSjtBQXpCRCxvQkF5QkMifQ==