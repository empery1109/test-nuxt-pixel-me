import { defineNuxtConfig } from 'nuxt'
import MyModule from '../src/module'

export default defineNuxtConfig({
  modules: [MyModule],
  pixelMe: {
    pixelId: ['1215400455915777']
  }
})
