import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import indicador  from '../../interfaces/indicador.interface';
import { of } from 'rxjs';
import resultSet from '../../interfaces/resultSet.interface';


@Injectable()
export class IndicadorService {
  public cacheData: resultSet
constructor(private httpService: HttpService) {
  this.cacheData;
}

async findAll(): Promise<resultSet>  {
  
  if (this.cacheData && (this.cacheData.fecha.getDay() === new Date().getDay())) {
    return this.cacheData;
  }
  return this.httpService.axiosRef.get(process.env.API).then(res => {
    this.cacheData = res.data
    this.cacheData.fecha = new Date(this.cacheData.fecha)
    return this.cacheData;
  })
  // this.httpService
  // .get(process.env.API)
  // .pipe(
  //   map(result => {
  //     this.cacheData = result.data
  //     this.cacheData.fecha = new Date(this.cacheData.fecha)
  //     return this.cacheData;
  //   })
  // )
}

}
