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
exports.CouponRepository = void 0;
const mongodb_1 = require("../libs/mongodb");
const Coupon_1 = require("../models/Coupon");
class CouponRepository {
    constructor() {
        mongodb_1.connect();
    }
    addCoupon(coupon, userCognitoId) {
        return __awaiter(this, void 0, void 0, function* () {
            coupon.dataCreazione = new Date().toDateString();
            coupon.userCognitoId = userCognitoId;
            return yield Coupon_1.CouponModel.create(coupon);
        });
    }
    editCoupon(couponId, coupon, userCognitoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Coupon_1.CouponModel.findOneAndUpdate({ _id: couponId, userCognitoId: userCognitoId }, coupon, { new: true });
        });
    }
    getCoupons(userCognitoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Coupon_1.CouponModel.find({ userCognitoId: userCognitoId });
        });
    }
    getCoupon(couponId, userCognitoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Coupon_1.CouponModel.findOne({ _id: couponId, userCognitoId });
        });
    }
    deleteCoupon(couponId, userCognitoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Coupon_1.CouponModel.findOneAndDelete({ _id: couponId, userCognitoId: userCognitoId });
        });
    }
    searchCoupons(userCognitoId, query) {
        return __awaiter(this, void 0, void 0, function* () {
            var regex = new RegExp(query, 'i');
            return yield Coupon_1.CouponModel.find({ userCognitoId: userCognitoId }).or([
                {
                    "categoria.nome": regex
                },
                {
                    "societa.nome": regex
                },
                {
                    nome: regex
                },
                {
                    descrizione: regex
                },
                {
                    note: regex
                }
            ]);
        });
    }
    fromModelToAPI(coupon) {
        let response = {
            societa: coupon.societa,
            categoria: coupon.categoria,
            descrizione: coupon.descrizione,
            note: coupon.note,
            tipo: coupon.tipo,
            codice: coupon.codice,
            importo: coupon.importo,
            valuta: coupon.valuta,
            scadenza: coupon.scadenza,
            sitoWeb: coupon.sitoWeb,
            dataCreazione: coupon.dataCreazione,
            couponId: coupon._id
        };
        if (coupon.parametri.length > 0)
            response.parametri = coupon.parametri;
        return response;
    }
}
exports.CouponRepository = CouponRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cG9uUmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvQ291cG9uUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUN4Qyw2Q0FBNkM7QUFJN0MsTUFBYSxnQkFBZ0I7SUFDekI7UUFDSSxpQkFBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUssU0FBUyxDQUFDLE1BQU0sRUFBRSxhQUFhOztZQUNqQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDakQsTUFBTSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDckMsT0FBTyxNQUFNLG9CQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFnQixFQUFFLE1BQU0sRUFBRSxhQUFhOztZQUNwRCxPQUFPLE1BQU0sb0JBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBQyxFQUFFLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2xILENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxhQUFhOztZQUMxQixPQUFPLE1BQU0sb0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsUUFBZ0IsRUFBRSxhQUFhOztZQUMzQyxPQUFPLE1BQU0sb0JBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLFFBQWdCLEVBQUUsYUFBYTs7WUFDOUMsT0FBTyxvQkFBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsYUFBYSxFQUFFLEtBQUs7O1lBQ3BDLElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuQyxPQUFPLE1BQU0sb0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzdEO29CQUNJLGdCQUFnQixFQUFFLEtBQUs7aUJBQzFCO2dCQUNEO29CQUNJLGNBQWMsRUFBRSxLQUFLO2lCQUN4QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsS0FBSztpQkFDZDtnQkFDRDtvQkFDSSxXQUFXLEVBQUUsS0FBSztpQkFDckI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsTUFBTTtRQUNqQixJQUFJLFFBQVEsR0FBYTtZQUNyQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRztTQUN2QixDQUFDO1FBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFwRUQsNENBb0VDIn0=