//CHECKSUM:09afc86f787dc1998c740d78f13b9c66d65913e85b4fb80eca85d36da6343f7e
"use strict";

/**
 * Reset the slot
 * @title Reset Slot
 * @category Slot
 * @author Botpress, Inc.
 * @param slotName The name of the slot
 */
const resetSlot = async slotName => {
  event.state.session.slots[slotName] = undefined;
};

return resetSlot(args.slotName);
//# sourceMappingURL=slot_reset.js.map