import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLeadModel, Lead } from './lead.model';
import { LeadService } from './lead.service';


@Controller('lead')
export class LeadController {
  constructor(private _LeadService: LeadService) {}

  @Get()
  list(): Promise<Lead[]> {
    return this._LeadService.getAllLeads();
  }

  @Post()
  create(@Body() lead: CreateLeadModel): Promise<Lead>{
      return this._LeadService.createLead(lead)
  }

  @Put(':id')
  update(@Param('id') id: String, @Body() lead: CreateLeadModel): Promise<String>{
      return this._LeadService.updateLead(id, lead)
  }
  @Delete(':id')
  remove(@Param('id') id: String): Promise<String>{
      return this._LeadService.removeLead(id)
  }
}
