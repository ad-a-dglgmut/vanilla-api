import { persistentAtom } from '@nanostores/persistent'

export const itemsInCartNumber:any = persistentAtom<string>('itemsInCartNumber', '0')
export const orderStatus:any = persistentAtom<string>('order', "")