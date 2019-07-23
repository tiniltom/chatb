//CHECKSUM:4f79dda6df61bf1dfe078db086f83b89988d1d4f7af75b56776c3718d47ce078
"use strict";

/**
 * Increment the number of conversations
 * @title Increment number of conversations
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} output - The state variable to output the count to
 */
const incrementNumberOfConversations = async output => {
  const userId = event.target;
  const botId = event.botId;
  const key = bp.kvs.getUserStorageKey(userId, 'numberOfConversations');
  let value = await bp.kvs.getStorageWithExpiry(botId, key); // Value could be 0

  if (value === undefined) {
    value = 0;
  } else {
    value++;
  }

  await bp.kvs.setStorageWithExpiry(botId, key, value);
  temp[output] = value;
};

return incrementNumberOfConversations(args.output);
//# sourceMappingURL=incrementNumberOfConversations.js.map