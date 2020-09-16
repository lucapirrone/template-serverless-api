import * as mongoose from 'mongoose';
import {prop, Typegoose} from "@hasezoey/typegoose";


export class Societa extends Typegoose {
    @prop({ required: true })
    nome: string;
    @prop({ required: false })
    logo: string;
    @prop({ required: true })
    colore: string;
}

export const SocietaModel = new Societa().getModelForClass(Societa, {
    existingMongoose: mongoose,
    //  had many problems without that definition of the collection name
    //  so better define it
    //                        |
    //                        v
    schemaOptions: {collection: 'societa'}
});
