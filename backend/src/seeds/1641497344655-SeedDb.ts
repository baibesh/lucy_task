import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1641497344655 implements MigrationInterface {
  name = 'SeedDb1641497344655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (email, password) VALUES ('admin@gmail.com', '$2b$10$sb6FXe8PuK8w6uioXxVgBe5UG1lJj2dGjf4PzWDlGEvhdCss7SVJ2')`,
    );

    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 1')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 2')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 3')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 4')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 5')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 6')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 7')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 8')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 9')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 10')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 11')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 12')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 13')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 14')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 15')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 16')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 17')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 18')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 19')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 20')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 21')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 22')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 23')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 24')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 25')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 26')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 27')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 28')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 29')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 30')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 31')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 32')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 33')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 34')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 35')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 36')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 37')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 38')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 39')`);
    await queryRunner.query(`INSERT INTO products (name) VALUES ('Name 40')`);
  }

  public async down(): Promise<void> {}
}
