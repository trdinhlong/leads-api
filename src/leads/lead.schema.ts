import * as mongoose from 'mongoose'

export const LeadSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
})