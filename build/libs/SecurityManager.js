Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityManager = void 0;
class SecurityManager {
    constructor(event) {
        this.event = event;
    }
    isUserLogged() {
        var _a, _b, _c, _d;
        if (typeof ((_b = (_a = this.event.requestContext) === null || _a === void 0 ? void 0 : _a.identity) === null || _b === void 0 ? void 0 : _b.cognitoIdentityId) == undefined || ((_d = (_c = this.event.requestContext) === null || _c === void 0 ? void 0 : _c.identity) === null || _d === void 0 ? void 0 : _d.cognitoIdentityId) == null)
            return false;
        return true;
    }
}
exports.SecurityManager = SecurityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHlNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvU2VjdXJpdHlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBYSxlQUFlO0lBSXhCLFlBQVksS0FBSztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZOztRQUNSLElBQUksb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLDBDQUFFLFFBQVEsMENBQUUsaUJBQWlCLENBQUEsSUFBSSxTQUFTLElBQUksYUFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsMENBQUUsUUFBUSwwQ0FBRSxpQkFBaUIsS0FBSSxJQUFJO1lBQzVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWJELDBDQWFDIn0=