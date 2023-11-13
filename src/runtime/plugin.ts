import { defineNuxtPlugin } from '#app'
import { basePixelCodeInitializer } from './utils/basePixelCodeInitializer'
import { FbMePixel } from './utils/FbMePixel'
import { pixelInitializer } from './utils/pixelInitilializer'
// @ts-expect-error virtual template
import pixelMeVueConig from '#build/pixel-me/vue-config.mjs'

const basePixelCodeArgs = [
  'script',
  'https://connect.facebook.net/en_US/fbevents.js'
] as const

export default defineNuxtPlugin(async (nuxtApp) => {
  if (typeof window !== 'undefined') {
    let w = window as any
    let d: Document = document

    await basePixelCodeInitializer(w, d, ...basePixelCodeArgs)

    pixelInitializer(pixelMeVueConig)

    const instance = new FbMePixel(pixelMeVueConig)

    nuxtApp.provide('fb', instance)
  }
})
