import { ModuleOptions } from '../../module'
import { Settings } from '../types/pixelSettings'
import { fbDefaultEvents } from '../data/fbDefaultEvents'
import type { LiteralUnion, Except } from 'type-fest'

type NonEmptyString<T extends string> = '' extends T ? never : T

declare global {
  interface Window {
    fbq?: any
    _fbq?: any
  }
}

export class FbMePixel {
  constructor(private options: ModuleOptions) {
    this.options = options
  }

  track<T extends keyof Settings, k extends string>(
    ...args: undefined extends Settings[T]
      ? [
          pixelCmd: LiteralUnion<T, NonEmptyString<k>>,
          settings?: k extends keyof Settings ? Settings[k] : object
        ]
      : [pixelCmd: LiteralUnion<T, NonEmptyString<k>>, settings: Settings[T]]
  ) {
    if (typeof window !== 'undefined') {
      if (fbDefaultEvents.includes(args[0])) {
        window.fbq('track', ...args)
        console.log('track')
      } else {
        window.fbq('trackCustom', ...args)
        console.log('trackCustom')
      }
    }
  }
}
