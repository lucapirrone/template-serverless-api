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
exports.SocietaModel = exports.Societa = void 0;
const mongoose = require("mongoose");
const typegoose_1 = require("@hasezoey/typegoose");
class Societa extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Societa.prototype, "nome", void 0);
__decorate([
    typegoose_1.prop({ required: false }),
    __metadata("design:type", String)
], Societa.prototype, "logo", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Societa.prototype, "colore", void 0);
exports.Societa = Societa;
exports.SocietaModel = new Societa().getModelForClass(Societa, {
    existingMongoose: mongoose,
    schemaOptions: { collection: 'societa' }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29jaWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvU29jaWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUFxQztBQUNyQyxtREFBb0Q7QUFHcEQsTUFBYSxPQUFRLFNBQVEscUJBQVM7Q0FPckM7QUFMRztJQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3FDQUNaO0FBRWI7SUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOztxQ0FDYjtBQUViO0lBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ1Y7QUFObkIsMEJBT0M7QUFFWSxRQUFBLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNoRSxnQkFBZ0IsRUFBRSxRQUFRO0lBSzFCLGFBQWEsRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUM7Q0FDekMsQ0FBQyxDQUFDIn0=