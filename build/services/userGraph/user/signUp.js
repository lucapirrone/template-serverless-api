var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.main = void 0;
const User_1 = require("../../../models/User");
const UserRepository_1 = require("../../../repositories/UserRepository");
function main(event) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        let cognitoData = event;
        if (((_b = (_a = cognitoData.request) === null || _a === void 0 ? void 0 : _a.userAttributes) === null || _b === void 0 ? void 0 : _b.email) && ((_c = cognitoData.request) === null || _c === void 0 ? void 0 : _c.userAttributes['custom:userType'])) {
            let repo = new UserRepository_1.UserRepository();
            let user;
            let userPublicProfile = {
                profileImage: "test",
                username: event.userName,
                followers: 0,
                following: 0,
            };
            let userSettings = {
                enableNotification: true,
                appearInPeopleHere: true,
                receiveComment: true,
                profilePrivacy: "public"
            };
            user = {
                cognitoId: cognitoData.request.userAttributes.sub.toString(),
                email: cognitoData.request.userAttributes.email,
                instagram: null,
                facebook: null,
                publicProfile: userPublicProfile,
                settings: userSettings
            };
            if (cognitoData.request.userAttributes['custom:userType'] == "ClassicUser") {
                user.userType = User_1.UserTypes.ClassicUser;
            }
            else if (cognitoData.request.userAttributes['custom:userType'] == "CamUser") {
                user.userType = User_1.UserTypes.CamUser;
            }
            else
                return null;
            try {
                let signedUp = yield repo.signUpUser(user);
                let response = Object.assign(Object.assign({}, signedUp.toJSON()), { publicProfile: Object.assign(Object.assign({}, signedUp.toJSON().publicProfile), { userType: signedUp.userType }), settings: Object.assign({}, signedUp.toJSON().settings) });
                return response;
            }
            catch (e) {
                return null;
            }
        }
        else {
            return null;
        }
    });
}
exports.main = main;
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        let repo = new UserRepository_1.UserRepository();
        try {
            yield repo.deleteUser(userId);
            return true;
        }
        catch (e) {
            return null;
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnblVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXJHcmFwaC91c2VyL3NpZ25VcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUErQztBQUMvQyx5RUFBb0U7QUFjcEUsU0FBc0IsSUFBSSxDQUFDLEtBQUs7OztRQUU1QixJQUFJLFdBQVcsR0FBZSxLQUFLLENBQUM7UUFFcEMsSUFBSSxhQUFBLFdBQVcsQ0FBQyxPQUFPLDBDQUFFLGNBQWMsMENBQUUsS0FBSyxZQUFJLFdBQVcsQ0FBQyxPQUFPLDBDQUFFLGNBQWMsQ0FBQyxpQkFBaUIsRUFBQyxFQUFFO1lBQ3RHLElBQUksSUFBSSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDO1lBRVQsSUFBSSxpQkFBaUIsR0FBRztnQkFDcEIsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsU0FBUyxFQUFFLENBQUM7Z0JBQ1osU0FBUyxFQUFFLENBQUM7YUFDZixDQUFDO1lBRUYsSUFBSSxZQUFZLEdBQUc7Z0JBQ2Ysa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLGNBQWMsRUFBRSxRQUFRO2FBQzNCLENBQUM7WUFFRixJQUFJLEdBQUc7Z0JBQ0gsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVELEtBQUssRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLO2dCQUMvQyxTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRLEVBQUUsSUFBSTtnQkFDZCxhQUFhLEVBQUUsaUJBQWlCO2dCQUNoQyxRQUFRLEVBQUUsWUFBWTthQUN6QixDQUFDO1lBRUYsSUFBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQWEsRUFBQztnQkFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzthQUN6QztpQkFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksU0FBUyxFQUFFO2dCQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFTLENBQUMsT0FBTyxDQUFDO2FBQ3JDOztnQkFDRyxPQUFPLElBQUksQ0FBQztZQUVoQixJQUFJO2dCQUNBLElBQUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxRQUFRLG1DQUNMLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FDcEIsYUFBYSxrQ0FDTixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsYUFBYSxLQUNsQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsS0FFL0IsUUFBUSxvQkFDRCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxJQUVwQyxDQUFBO2dCQUNELE9BQU8sUUFBUSxDQUFDO2FBQ25CO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUVKO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmOztDQUNKO0FBMURELG9CQTBEQztBQUVELFNBQXNCLFVBQVUsQ0FBQyxNQUFjOztRQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQUNoQyxJQUFJO1lBQ0EsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFFTCxDQUFDO0NBQUE7QUFURCxnQ0FTQyJ9