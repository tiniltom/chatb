//CHECKSUM:4edae0f3aae41313ed22515575dd1f528bbc92ea7387c4d61a1ce9d34c1cb0e9
"use strict";

const hardLimit = 10;
/**
 * Increment the "slot not found" counter.
 * When the counter reach its limit, the "notExtracted" flag is set and will make trigger the "On not found" transition.
 * @hidden true
 * @param retryAttempts The maximum number of times a slot extraction gets retried
 */

const slotNotFound = async retryAttempts => {
  if (!session.slots.notFound) {
    session.slots.notFound = 1;
  }

  if (session.slots.notFound < Math.min(Number(retryAttempts), hardLimit)) {
    session.slots.notFound++;
  } else {
    temp.notExtracted = 'true';
  }
};

return slotNotFound(args.retryAttempts);
//# sourceMappingURL=slot_not_found.js.map