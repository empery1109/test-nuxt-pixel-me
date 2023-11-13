import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addTemplate } from '@nuxt/kit'

export interface ModuleOptions {
  pixelId: string[] | string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-pixel-me',
    configKey: 'pixelMe',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    pixelId: null
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addTemplate({
      filename: 'pixel-me/vue-config.mjs',
      getContents: () => `export default ${JSON.stringify(options)}`
    })

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })

    addPlugin(resolve(runtimeDir, 'plugin'))
  }
})
