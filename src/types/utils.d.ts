// object[] 取出 object
type ExtractArrayType<T> = T extends (infer U)[] ? U : T
export type { ExtractArrayType }
