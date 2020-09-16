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
        let responseManager = new ResponseManager_1.default();
        let repo = new CouponRepository_1.CouponRepository();
        let userCognitoId = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.identity) === null || _b === void 0 ? void 0 : _b.cognitoIdentityId;
        const body = JSON.parse(event.body);
        const couponId = event.pathParameters.couponId;
        try {
            let coupon = yield repo.editCoupon(couponId, body, userCognitoId);
            if (coupon)
                return responseManager.send(200, repo.fromModelToAPI(coupon));
            else
                return responseManager.send(404);
        }
        catch (err) {
            console.log("error", err);
            return responseManager.send(501, err);
        }
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdENvdXBvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jdGlvbnMvZWRpdENvdXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFzRDtBQUN0RCx1RUFBa0U7QUFHbEUsU0FBc0IsSUFBSSxDQUFDLEtBQUs7OztRQUM1QixJQUFJLGVBQWUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFFbEMsSUFBSSxhQUFhLGVBQUcsS0FBSyxDQUFDLGNBQWMsMENBQUUsUUFBUSwwQ0FBRSxpQkFBaUIsQ0FBQztRQUN0RSxNQUFNLElBQUksR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJO1lBQ0EsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFbEUsSUFBSSxNQUFNO2dCQUNOLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFOUQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDOztDQUNKO0FBbEJELG9CQWtCQyJ9