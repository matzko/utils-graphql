// @flow

import type {GqlOperationType} from "./types";

const operationTypeRe = /^\s*(query|mutation|subscription|\{)/;

const getOperationTypeFromMatched = (matched: string): GqlOperationType =>
  matched === "{" ? "query" : (matched: any);

/**
 * Returns the type of the given operation
 *
 * @example
 *
 * const operation = `
 *   subscription userSubscription($userId: ID!) {
 *     user(userId: $userId) {
 *       id
 *       name
 *     }
 *   }
 * `;
 *
 * const operationType = getOperationType(operation);
 *
 * console.log(operationType); // "subscription"
 */
const getOperationType = (operation: string): void | GqlOperationType => {
  const result = operation.match(operationTypeRe);

  return result ? getOperationTypeFromMatched(result[1]) : undefined;
};

export default getOperationType;
