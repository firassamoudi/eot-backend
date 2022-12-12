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
        password: 'firas_EOTPROJECT2021_@@',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
