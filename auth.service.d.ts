import { User, UserDocument } from './user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signup(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}> & User & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    } | null>;
}
