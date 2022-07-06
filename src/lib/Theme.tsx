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

const components = {
    Table: {
      variants: {
        mytable: {
          td: {
            color: 'black',
            background: 'white',
            borderBottom: "1px inset rgb(212, 212, 212)"
          },
          tr:{
            color: 'gray',
            background: 'white',
            borderBottom: "1px inset rgb(212, 212, 212)"
          },
        }
      }
    }
}

const customeTheme = extendTheme({ styles, breakpoints, components })

export default customeTheme