/**
 * Null 或其它
 */
export type Nullable<T> = T | null | undefined

/**
 * Array 或者其它
 */
export type Arrayable<T> = T | Array<T>

/**
 * Function
 */
export type Fn<T = void> = () => T
