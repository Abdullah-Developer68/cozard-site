import { images } from '../../assets/asset'

export type Product = {
  image: string
  alt: string
  name: string
  price: number
  tag?: string
  swatches: string[]
  rating: string
  favourite?: boolean
  showAddToBag?: boolean
}

/** Demo catalogue for Fernhouse, the store shown on the hero devices. */
export const products: Product[] = [
  {
    image: images.showcase.stonewareMug,
    alt: 'Speckled blue stoneware mug',
    name: 'Speckle stoneware mug',
    price: 28,
    tag: 'NEW',
    swatches: ['#3E5F7A', '#D9CCB4', '#3A3A38'],
    rating: '4.9',
    showAddToBag: true,
  },
  {
    image: images.showcase.soupBowls,
    alt: 'Stacked grey stoneware soup bowls',
    name: 'Stacking soup bowls, set of 3',
    price: 64,
    swatches: ['#8E9AA3', '#F1EEE6'],
    rating: '4.8',
  },
  {
    image: images.showcase.cottonTowel,
    alt: 'Blue and white striped Turkish cotton towel',
    name: 'Turkish cotton towel',
    price: 39,
    tag: 'BESTSELLER',
    swatches: ['#5B7FB0', '#2F3A4A', '#C9B79A'],
    rating: '5.0',
    favourite: true,
  },
  {
    image: images.showcase.glassVase,
    alt: 'Tall clear glass vase with dried grass',
    name: 'Tall glass vase',
    price: 46,
    swatches: ['#E6E8E6', '#B9A487'],
    rating: '4.7',
  },
]

export const searchPhrases = ['stoneware mug', 'linen napkins', 'glass vase', 'soup bowls'] as const
