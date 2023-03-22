import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as exphbs from 'express-handlebars';
import * as express from 'express';
import { Request } from 'express';
import { Helpers } from './utils/helpers';

async function bootstrap() {
  const exp = express();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.use((req: Request, res, next) => {
    exp.locals.expreq = req;
    next();
  });

  const handlebars = new Helpers();
  const helpers = await handlebars.helpersHbs(exp);

  app.engine(
    'hbs',
    exphbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      partialsDir: 'views/partials',
      helpers,
    }),
  );

  await app.listen(3000);
}
bootstrap();
