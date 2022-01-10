import ormConfig from '@app/src/config/orm.config';

const seedConfig = {
  ...ormConfig,
  migrations: ['src/seeds/*.ts'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default seedConfig;
