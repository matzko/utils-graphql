import { Variables } from '../../../src/types'
import type { GqlRequest, GqlRequestCompat } from './types'

/**
 * Creates a GqlRequest using given GqlRequestCompat
 *
 * @param {GqlRequest<Variables>} gqlRequest
 *
 * @return {GqlRequestCompat<Variables>}
 *
 * @example
 * const operation = `
 *   query userQuery($userId: ID!) {
 *     user(userId: $userId) {
 *       id
 *       email
 *     }
 *   }
 * `;
 *
 * console.log(requestToCompat({operation, variables: {userId: 10}}));
 * // {query: "...", variables: {userId: 10}}
 */
function requestToCompat({
  operation: query,
  variables
}: GqlRequest<Variables>): GqlRequestCompat<Variables> {
  return variables ? { query, variables } : { query }
}

export default requestToCompat
