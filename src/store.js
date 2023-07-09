import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['react', 'github', 'instagram', 'rex', 'samurai' ],
  selectedColor: '#EFBD4E',
  selectedDecal: 'github'
})

export { state }
