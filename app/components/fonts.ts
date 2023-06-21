import { Inter, Overpass, Lora, Rajdhani, Roboto_Slab, Open_Sans} from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const fira_Sans = Overpass({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira',
    
  })

  export const lora = Lora({
    subsets: ['latin'],
    display: 'swap',
  })

  export const rajdhani = Rajdhani({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
  })

  export const roboto_Slab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
  })  
  export const open_Sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })