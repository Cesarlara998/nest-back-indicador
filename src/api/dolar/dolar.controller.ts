import { Controller, Get } from '@nestjs/common';
import { IndicadorService} from '../../services/indicador/service.service';

@Controller('api')
export class DolarController {
    constructor(private ServiceService: IndicadorService) {}

    @Get()
    async all() {
        await this.ServiceService.findAll();
        return this.ServiceService.cacheData;
    }

    @Get('dolar')
    async dolar() {
        await this.ServiceService.findAll()

        return this.ServiceService.cacheData.dolar
    }

    @Get('uf')
    async uf() {
        await this.ServiceService.findAll()

        return this.ServiceService.cacheData.uf
    }

    @Get('euro')
    async euro() {
        await this.ServiceService.findAll()
        return this.ServiceService.cacheData.euro
    }
}
