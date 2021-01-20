import { Module } from '@nestjs/common';
import { LeadController } from './lead.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { LeadService } from './lead.service';
import { LeadSchema } from './lead.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'leads', schema: LeadSchema}])],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
