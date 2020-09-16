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
        const couponId = event.pathParameters.couponId;
        try {
            let coupon = yield repo.deleteCoupon(couponId, userCognitoId);
            if (coupon)
                return responseManager.send(200);
            else
                return responseManager.send(404);
        }
        catch (err) {
            return responseManager.send(501, err);
        }
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlQ291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9kZWxldGVDb3Vwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2REFBc0Q7QUFDdEQsdUVBQWtFO0FBRWxFLFNBQXNCLElBQUksQ0FBQyxLQUFLOzs7UUFDNUIsSUFBSSxlQUFlLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBRWxDLElBQUksYUFBYSxlQUFHLEtBQUssQ0FBQyxjQUFjLDBDQUFFLFFBQVEsMENBQUUsaUJBQWlCLENBQUM7UUFDdEUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFFL0MsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDOUQsSUFBSSxNQUFNO2dCQUNOLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBRWpDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6Qzs7Q0FDSjtBQWhCRCxvQkFnQkMifQ==