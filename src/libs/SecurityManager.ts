
export class SecurityManager {

    private event;

    constructor(event) {
        this.event = event;
    }

    isUserLogged(): boolean {
        if (typeof this.event.requestContext?.identity?.cognitoIdentityId == undefined || this.event.requestContext?.identity?.cognitoIdentityId == null)
            return false;
        return true;
    }
}
