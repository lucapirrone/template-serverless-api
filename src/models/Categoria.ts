import * as mongoose from 'mongoose';
import {prop, Typegoose} from "@hasezoey/typegoose";


export class Categoria extends Typegoose {
    @prop({ required: true })
    nome: string;
}

export const CategoriaModel = new Categoria().getModelForClass(Categoria, {
    existingMongoose: mongoose,
    //  had many problems without that definition of the collection name
    //  so better define it
    //                        |
    //                        v
    schemaOptions: {collection: 'categorie'}
});
