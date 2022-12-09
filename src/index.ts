/**
 * A value or a function that produces one.
 */
export type ValueOrFactory<T, A extends readonly unknown[] = []> = T | ((...arg: A) => T)

/**
 * If a value is a function, call it. Otherwise return it.
 */
export function callOrGet<T, A extends readonly unknown[]>(value: ValueOrFactory<T, A>, ...args: A) {
    if (value instanceof Function) {
        return value(...args)
    }
    return value
}
