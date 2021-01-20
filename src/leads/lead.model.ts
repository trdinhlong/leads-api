import { Document } from 'mongoose'
export interface Lead extends Document{
    firstName: String;
    lastName: String;
    phone: Number;
    email: String;
}
export class CreateLeadModel{
    firstName: String;
    lastName: String;
    phone: Number;
    email: String;
}