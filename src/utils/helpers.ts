import { Express } from 'express';

export class Helpers {
  async helpersHbs(exp: Express) {
    const helpers = {
      link: (text: string, url: string) => {
        return `<a href="${url}">${text}</a>`;
      },
      isActive: (view) => {
        const url = exp.locals.expreq['originalUrl'];
        if (url === view) {
          return 'active';
        }
        return '';
      },
    };
    return helpers;
  }
}
