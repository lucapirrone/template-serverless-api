import {connect} from "../libs/mongodb";
import {CouponModel} from "../models/Coupon";
import {Coupon as CouponAPI} from "../interfaces/models/coupon";


export class CouponRepository {
    constructor() {
        connect();
    }

    async addCoupon(coupon, userCognitoId) {
        coupon.dataCreazione = new Date().toDateString();
        coupon.userCognitoId = userCognitoId;
        return await CouponModel.create(coupon);
    }

    async editCoupon(couponId: string, coupon, userCognitoId){
        return await CouponModel.findOneAndUpdate({_id: couponId, userCognitoId: userCognitoId}, coupon, {new: true});
    }

    async getCoupons(userCognitoId) {
        return await CouponModel.find({userCognitoId: userCognitoId});
    }

    async getCoupon(couponId: string, userCognitoId) {
        return await CouponModel.findOne({_id: couponId, userCognitoId});
    }

    async deleteCoupon(couponId: string, userCognitoId) {
        return CouponModel.findOneAndDelete({_id: couponId, userCognitoId: userCognitoId});
    }

    async searchCoupons(userCognitoId, query) {
        var regex = new RegExp(query, 'i');
        return await CouponModel.find({userCognitoId: userCognitoId}).or([
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
    }

    fromModelToAPI(coupon): CouponAPI {
        let response:CouponAPI = {
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
