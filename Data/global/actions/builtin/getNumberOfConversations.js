//CHECKSUM:9e31ea883b0caf91b9cca9225e9ddd19c34152adc78a62c0c416415b1f3129ef
"use strict";

/**
 * Get number of conversations
 * @title Get number of conversations
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} output - The state variable to output the count to
 */
const getNumberOfConversations = async output => {
  const userId = event.target;
  const botId = event.botId;
  const key = bp.kvs.getUserStorageKey(userId, 'numberOfConversations');
  const value = await bp.kvs.getStorageWithExpiry(botId, key);
  temp[output] = value;
};

return getNumberOfConversations(args.output);
//# sourceMappingURL=getNumberOfConversations.js.map