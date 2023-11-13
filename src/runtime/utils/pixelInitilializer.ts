interface Window {
  fbq?: any
  _fbq?: any
}

export const pixelInitializer = (options: any) => {
  let w = window as Window
  console.log('inited')

  if (Array.isArray(options.pixelId)) {
    options.pixelId.forEach((id: string | number) => {
      w.fbq('init', id)
    })
  } else {
    w.fbq('init', options.pixelId)
  }
}
