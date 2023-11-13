import { FbMePixel } from '../utils/FbMePixel'
// @ts-expect-error virtual template
import pixelMeVueConig from '#build/pixel-me/vue-config.mjs'

export const usePixelMe = () => new FbMePixel(pixelMeVueConig)
