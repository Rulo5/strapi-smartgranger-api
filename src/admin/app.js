import AuthLogo from '/src/admin/assets/auth-logo.svg';
import MenuLogo from '/src/admin/assets/menu-logo.svg';

export default {
  config: {
    locales: ['es'],
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    tutorials: false,
    notifications:{
      release: false
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
