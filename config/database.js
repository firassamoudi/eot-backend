module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'eot_db',
        username: 'root',
        password: 'BhsjxphDm6Tn',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
