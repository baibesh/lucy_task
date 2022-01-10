import { registerAs } from '@nestjs/config';
import * as path from 'path';

export default registerAs('database', () => {
  return {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [path.join(__dirname, '..', '/**/*.entity{.ts,.js}')],
    synchronize: false,
    migrations: [path.join(__dirname, '..', '/migrations/*{.ts,.js}')],
    cache: {
      type: 'redis',
      options: {
        url: `redis://${process.env.REDIS_HOST}:6379`,
      },
    },
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
});
