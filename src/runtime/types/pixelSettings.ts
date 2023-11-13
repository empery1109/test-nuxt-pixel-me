type FindLocation = object

type Schedule = object

type SubmitApplication = object

type Donate = object

type CustomizeProduct = object

type Contact = object

interface AddPaymentInfo {
  content_category?: string
  content_ids?: string | number[]
  contents?: object[]
  currency?: string
  value?: number
}

interface AddToCart {
  content_ids?: string | number[]
  content_name?: string
  content_type?: string
  contents?: object[]
  currency?: string
  value?: number
}

interface AddToWishlist {
  content_name?: string
  content_category?: string
  content_ids?: string | number[]
  contents?: object[]
  currency?: string
  value?: number
}

interface CompleteRegistration {
  content_name?: string
  currency?: string
  status?: boolean
  value?: number
}

interface InitiateCheckout {
  content_ids?: string | number[]
  content_category?: string
  contents?: object[]
  currency?: string
  num_items?: number
  value?: number
}

interface Lead {
  content_category?: string
  content_name?: string
  currency?: string
  value?: number
}

interface Purchase {
  content_ids?: string | number[]
  content_name?: string
  content_type?: string
  contents?: object[]
  currency: string
  num_items?: number
  value: number
}

interface Search {
  content_ids?: string | number[]
  content_category?: string
  contents?: object[]
  currency?: string
  search_string?: string
  value?: number
}

interface StartTrial extends Subscribe {}

interface Subscribe {
  currency?: string
  predicted_ltv?: number
  value?: number
}

interface ViewContent {
  content_ids?: string | number[]
  content_category?: string
  content_name?: string
  content_type?: string
  contents?: object[]
  currency?: string
  value?: number
}

type GetRequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K
}[keyof T]

type RequiredOptions = Pick<Settings, GetRequiredKeys<Settings>>

type Settings = {
  AddPaymentInfo?: AddPaymentInfo
  AddToCart?: AddToCart
  AddToWishlist?: AddToWishlist
  CompleteRegistration?: CompleteRegistration
  Contact?: Contact
  CustomizeProduct?: CustomizeProduct
  Donate?: Donate
  FindLocation?: FindLocation
  InitiateCheckout?: InitiateCheckout
  Lead?: Lead
  Purchase: Purchase
  Schedule?: Schedule
  Search?: Search
  StartTrial?: StartTrial
  SubmitApplication?: SubmitApplication
  Subscribe?: Subscribe
  ViewContent?: ViewContent
}

type Check<T extends keyof Settings> = T extends keyof RequiredOptions
  ? RequiredOptions[T]
  : Settings[T]

export { Check, Settings, RequiredOptions }

const test: Settings['AddToCart'] = {}
