import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('clientes')
  @Render('clientes/clientes')
  getHello() {
    return {
      clientes: this.appService.listaClientes(),
      titulo: 'Lista de Clientes',
    };
  }

  @Get()
  @Render('index')
  home() {
    return { titulo: 'Aplicação HandleBars', nome: 'Aplicação HandleBars' };
  }

  @Get('cadastrar')
  @Render('clientes/cadastrar')
  cadastrar() {
    return { titulo: 'Cadastrar novo Cliente' };
  }
}
