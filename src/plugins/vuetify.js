// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from '../config/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.primary.base, // #485162;
            secondary: colors.green.base, // #BFDC36
            propurple : colors.propurple.base
          }
        },
      },
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
