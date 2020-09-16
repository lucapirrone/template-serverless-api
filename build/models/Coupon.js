var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponModel = exports.Coupon = void 0;
const mongoose = require("mongoose");
const typegoose_1 = require("@hasezoey/typegoose");
const Societa_1 = require("./Societa");
const Categoria_1 = require("./Categoria");
let Parameters = class Parameters {
};
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Parameters.prototype, "key", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Parameters.prototype, "value", void 0);
Parameters = __decorate([
    typegoose_1.index({ dataCreazione: -1 })
], Parameters);
var Tipo;
(function (Tipo) {
    Tipo["qrcode"] = "qrcode";
    Tipo["barcode"] = "barcode";
    Tipo["alfanumerico"] = "alfanumerico";
})(Tipo || (Tipo = {}));
class Coupon extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "userCognitoId", void 0);
__decorate([
    typegoose_1.prop({ required: true, _id: false }),
    __metadata("design:type", Societa_1.Societa)
], Coupon.prototype, "societa", void 0);
__decorate([
    typegoose_1.prop({ required: true, _id: false }),
    __metadata("design:type", Categoria_1.Categoria)
], Coupon.prototype, "categoria", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "descrizione", void 0);
__decorate([
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], Coupon.prototype, "note", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "codice", void 0);
__decorate([
    typegoose_1.prop({ required: true, enum: Tipo }),
    __metadata("design:type", String)
], Coupon.prototype, "tipo", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "importo", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "valuta", void 0);
__decorate([
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], Coupon.prototype, "scadenza", void 0);
__decorate([
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], Coupon.prototype, "dataCreazione", void 0);
__decorate([
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], Coupon.prototype, "sitoWeb", void 0);
__decorate([
    typegoose_1.arrayProp({ required: false, items: Parameters, _id: false }),
    __metadata("design:type", Array)
], Coupon.prototype, "parametri", void 0);
exports.Coupon = Coupon;
exports.CouponModel = new Coupon().getModelForClass(Coupon, {
    existingMongoose: mongoose,
    schemaOptions: { collection: 'coupons' }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9Db3Vwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFDckMsbURBQXNFO0FBQ3RFLHVDQUFrQztBQUNsQywyQ0FBc0M7QUFJdEMsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQUtmLENBQUE7QUFIRztJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNiO0FBRVo7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWjtBQUpYLFVBQVU7SUFGZixpQkFBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7R0FFdkIsVUFBVSxDQUtmO0FBQ0QsSUFBSyxJQUlKO0FBSkQsV0FBSyxJQUFJO0lBQ0wseUJBQWlCLENBQUE7SUFDakIsMkJBQW1CLENBQUE7SUFDbkIscUNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUpJLElBQUksS0FBSixJQUFJLFFBSVI7QUFDRCxNQUFhLE1BQU8sU0FBUSxxQkFBUztDQTJCcEM7QUF6Qkc7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDSDtBQUV0QjtJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFDNUIsaUJBQU87dUNBQUM7QUFFakI7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7OEJBQzFCLHFCQUFTO3lDQUFDO0FBRXJCO0lBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ0w7QUFFcEI7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOztvQ0FDYjtBQUViO0lBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ1Y7QUFFZjtJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0NBQzFCO0FBRVg7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDVDtBQUVoQjtJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNWO0FBRWY7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzt3Q0FDVDtBQUVqQjtJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7OzZDQUNKO0FBRXRCO0lBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7dUNBQ1Y7QUFFaEI7SUFEQyxxQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7eUNBQ3RDO0FBMUI1Qix3QkEyQkM7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM3RCxnQkFBZ0IsRUFBRSxRQUFRO0lBSzFCLGFBQWEsRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUM7Q0FDekMsQ0FBQyxDQUFDIn0=