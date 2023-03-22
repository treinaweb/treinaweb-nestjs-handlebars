import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  listaClientes() {
    const cliente1 = {
      nome: 'Paulo',
      sobrenome: 'Oliveira',
      endereco: {
        residencial: 'Rua Utama 344',
        comercial: 'Av. Paulista 500',
      },
      status: true,
      link: 'http://linkedin.com/PauloTW',
    };

    const cliente2 = {
      nome: 'Bruna',
      sobrenome: 'Santos',
      endereco: {
        residencial: 'Rua Salgado Filho 1000',
        comercial: 'Av. Faria Lima 1500',
      },
      status: false,
      link: 'http://linkedin.com/BrunaTW',
    };

    const cliente3 = {
      nome: 'Marcos',
      sobrenome: 'Silva',
      status: false,
      link: 'http://linkedin.com/MarcosTW',
    };

    const clientes = [cliente1, cliente2, cliente3];

    return clientes;
  }
}
