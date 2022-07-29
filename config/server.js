module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.eot.tn',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0b79dee0327cecaae2406dda076c29f9'),
    },
  },
});
