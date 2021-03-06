import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import sutroTheme from 'typography-theme-sutro'

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

sutroTheme.googleFonts = [
  {
    name: 'Roboto Mono',
    styles: ['300', '400'],
  },
  // {
  //   name: 'Quicksand',
  //   styles: ['700']
  // }
]
sutroTheme.headerFontFamily = ['Roboto Mono', 'monospace']
sutroTheme.bodyFontsFamily =  ['Roboto Mono', 'monospace']

sutroTheme.bodyWeight = 300
sutroTheme.boldWeight = 700

delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

const typography = new Typography(sutroTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
