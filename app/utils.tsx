import { compose, join, filter, isBoolean, isNil, flatten } from 'lodash/fp'
type Cx = (...a: Array<undefined | null | string | boolean>) => string

const cx: Cx = (...args) => 
  compose(join(' '), filter(isBoolean), filter(isNil), flatten)(args)

  const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export { cx, sleep }