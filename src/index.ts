export type { DocumentNode } from 'graphql/language/ast'

export { errorsToString } from './errorsToString'
export { default as getOperationType } from './getOperationType'
export { default as hasSubscription } from './hasSubscription'
export { default as requestFromCompat } from './requestFromCompat'
export { default as requestToCompat } from './requestToCompat'

export type {
  GqlError,
  GqlOperationType,
  GqlRequest,
  GqlRequestCompat,
  GqlResponse
} from './types'
