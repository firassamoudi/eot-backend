module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //url: 'http://localhost:1337',
  url: 'https://51.222.106.234:1337',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0b79dee0327cecaae2406dda076c29f9'),
    },
  },
});
