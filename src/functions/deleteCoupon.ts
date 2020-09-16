import ResponseManager from "../libs/ResponseManager";
import {CouponRepository} from "../repositories/CouponRepository";

export async function main(event){
    let responseManager = new ResponseManager();
    let repo = new CouponRepository();

    let userCognitoId = event.requestContext?.identity?.cognitoIdentityId;
    const couponId = event.pathParameters.couponId;

    try {
        let coupon = await repo.deleteCoupon(couponId, userCognitoId);
        if (coupon)
            return responseManager.send(200);
        else
            return responseManager.send(404);
    } catch (err) {
        return responseManager.send(501, err);
    }
}
