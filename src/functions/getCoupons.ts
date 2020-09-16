import ResponseManager from "../libs/ResponseManager";
import {CouponRepository} from "../repositories/CouponRepository";
import {Coupon as CouponAPI} from "../interfaces/models/coupon";
import {Coupons as CouponsAPI} from "../interfaces/models/coupons";

export async function main(event){
    let responseManager = new ResponseManager();
    let repo = new CouponRepository();

    let userCognitoId = event.requestContext?.identity?.cognitoIdentityId;
    const query = event.query?.query;

    try {
        let coupons;

        if (query)
            coupons = await repo.searchCoupons(userCognitoId, query);
        else
            coupons = await repo.getCoupons(userCognitoId);

        let response:CouponsAPI = [];

        for(const coupon of coupons) {
            response.push(repo.fromModelToAPI(coupon));
        }

        return responseManager.send(200, response);
    } catch (err) {
        return responseManager.send(501, err);
    }
}
