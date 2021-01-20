import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lead, CreateLeadModel } from './lead.model';

@Injectable()
export class LeadService {
  constructor(@InjectModel('leads') private _leadModel: Model<any>){}
  async getAllLeads(): Promise<Lead[]> {
    return this._leadModel.find().exec();
  }
  async createLead({ firstName, lastName, phone, email }: CreateLeadModel): Promise<Lead>{
    return new this._leadModel({ firstName, lastName, phone, email }).save()
  }
  async updateLead(id: any, lead: CreateLeadModel): Promise<String>{
    let _lead = await this._leadModel.findOne({ _id : id })
    await _lead.updateOne(lead)
    return 'Update Success'
  }
}
