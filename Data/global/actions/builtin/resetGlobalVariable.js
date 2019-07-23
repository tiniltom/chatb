//CHECKSUM:c607540375e006e763d68d32ce55c619024db811b3e7ba957e7fbdcbffecadaf
"use strict";

/**
 * Reset a variable globally
 * @title Reset global variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 */
const resetGlobalVariable = async name => {
  const key = bp.kvs.getGlobalStorageKey(name);
  await bp.kvs.removeStorageKeysStartingWith(key);
};

return resetGlobalVariable(args.name);
//# sourceMappingURL=resetGlobalVariable.js.map