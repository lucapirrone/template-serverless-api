import * as mongoose from 'mongoose';
import {arrayProp, index, prop, Typegoose} from "@hasezoey/typegoose";
import {Societa} from "./Societa";
import {Categoria} from "./Categoria";

@index({ dataCreazione: -1 })

class Parameters {
    @prop({ required: true })
    key: string;
    @prop({ required: true })
    value: string
}
enum Tipo {
    qrcode = "qrcode",
    barcode = "barcode",
    alfanumerico = "alfanumerico"
}
export class Coupon extends Typegoose {
    @prop({ required: true })
    userCognitoId: string;
    @prop({ required: true, _id: false })
    societa: Societa;
    @prop({ required: true, _id: false })
    categoria: Categoria;
    @prop({ required: true })
    descrizione: string;
    @prop({ required: false })
    note: string;
    @prop({ required: true })
    codice: string;
    @prop({ required: true, enum: Tipo })
    tipo: Tipo;
    @prop({ required: true })
    importo: number;
    @prop({ required: true })
    valuta: string;
    @prop({ required: false })
    scadenza: string;
    @prop({ required: false })
    dataCreazione: string;
    @prop({ required: false })
    sitoWeb: string;
    @arrayProp({ required: false, items: Parameters, _id: false })
    parametri: Parameters[];
}

export const CouponModel = new Coupon().getModelForClass(Coupon, {
    existingMongoose: mongoose,
    //  had many problems without that definition of the collection name
    //  so better define it
    //                        |
    //                        v
    schemaOptions: {collection: 'coupons'}
});
