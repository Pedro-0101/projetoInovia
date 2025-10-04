import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultaModule } from './consulta/consulta.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteModule } from './paciente/paciente.module';
import { NutricionistaModule } from './nutricionista/nutricionista.module';

@Module({
  imports: [ConsultaModule, MongooseModule.forRoot("mongodb+srv://pedrocerquilho_db_user:1G0lNWal7MkcyivD@cluster0.hmmpc4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), PacienteModule, NutricionistaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
