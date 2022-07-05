import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: () => ({
    fonts: {
      heading: `'Oswald', sans-serif`,
      body: `'Oswald', sans-serif`
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: '#F5F8FD'
    }
  })
}

const breakpoints = {
  sm: '30em',
  md: '50em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const customeTheme = extendTheme({ styles, breakpoints })

export default customeTheme