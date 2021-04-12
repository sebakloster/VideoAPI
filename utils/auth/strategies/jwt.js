const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");

/**
 * apartir de nuestro UserServices vamos usar el método para buscar al usuario
 * apartir de email que extraigamos del JWT
 */
const UserSerivice = require("../../../services/users");
// con nuestro config haremos saber a la estrategia con que secret fue firmado nuestro JWT
// y para que verifique que es complemente valido.
const { config } = require("../../../config/index");

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      // especificamos que lo sacamos del Header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    // recibe el payload del token ya decodificado y el cb
    // por si encotramos un usuario o debemos de devolver un error.
    async function (tokenPayload, cb) {
      const userSerivice = new UserSerivice();

      try {
        // buscamos al usuario en la Collection USERS con su atributo EMAIL
        const user = await userSerivice.getUser({ email: tokenPayload.email });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        cb(null, { ...user, scopes: tokenPayload.scopes });
      } catch (err) {
        cb(err);
      }
    }
  )
);
