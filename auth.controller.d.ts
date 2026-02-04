import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: {
        email: string;
        password: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument, {}> & import("./user.schema").User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    } | null>;
    getProfile(req: any): any;
}
