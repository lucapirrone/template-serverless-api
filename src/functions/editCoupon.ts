import ResponseManager from "../libs/ResponseManager";
import {CouponRepository} from "../repositories/CouponRepository";
import {Coupon as CouponAPI} from "../interfaces/models/coupon";

export async function main(event){
    let responseManager = new ResponseManager();
    let repo = new CouponRepository();

    let userCognitoId = event.requestContext?.identity?.cognitoIdentityId;
    const body:CouponAPI = JSON.parse(event.body);
    const couponId = event.pathParameters.couponId;
    try {
        let coupon = await repo.editCoupon(couponId, body, userCognitoId);

        if (coupon)
            return responseManager.send(200, repo.fromModelToAPI(coupon));
        else
            return responseManager.send(404);
    } catch (err) {
        console.log("error", err);
        return responseManager.send(501, err);
    }
}
