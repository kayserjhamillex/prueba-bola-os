exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.db = {
  dialect: 'sqlite',
  storage: './db/database.sqlite',
  username: 'postgres',
  password: '123',
  database: 'demo',
  host: '127.0.0.1',
  dialect: 'postgres'
}