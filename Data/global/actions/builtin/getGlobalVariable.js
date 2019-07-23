//CHECKSUM:e22327fac642cf9e284db514b2d756a8952ac1652b7ac761dd151ac00834b1c7
"use strict";

/**
 * Get a variable globally
 * @title Get global variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 * @param {string} output - The state variable to ouput to
 */
const getGlobalVariable = async (name, output) => {
  const key = bp.kvs.getGlobalStorageKey(name);
  const result = await bp.kvs.getStorageWithExpiry(event.botId, key);
  temp[output] = result;
};

return getGlobalVariable(args.name, args.output);
//# sourceMappingURL=getGlobalVariable.js.map