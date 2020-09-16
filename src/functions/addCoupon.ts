import ResponseManager from "../libs/ResponseManager";
import {CouponRepository} from "../repositories/CouponRepository";
import {Coupon as CouponAPI} from "../interfaces/models/coupon";
import {BasicCoupon as BasicCouponAPI} from "../interfaces/models/basicCoupon";

export async function main(event){
    console.log(event);
    let responseManager = new ResponseManager();
    let repo = new CouponRepository();

    let userCognitoId = event.requestContext?.identity?.cognitoIdentityId || "default";
    const body:BasicCouponAPI = JSON.parse(event.body);

    try{
        let coupon = await repo.addCoupon(body, userCognitoId);
        return responseManager.send(200, repo.fromModelToAPI(coupon));
    } catch (err) {
        return responseManager.send(501, err);
    }
}
