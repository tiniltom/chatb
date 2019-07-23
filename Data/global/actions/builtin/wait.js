//CHECKSUM:858257d384aab668d9b4bef396af72de58ad78b24cea050e13c64f72cdb8c843
"use strict";

/**
 * Wait for a bit.
 *
 * @title Wait/Delay
 * @category Utility
 * @author Botpress, Inc.
 * @param {number} delay=1000 - The number of milliseconds to wait
 */
const wait = async delay => {
  return new Promise(resolve => setTimeout(() => resolve(), delay));
};

return wait(args.delay || 1000);
//# sourceMappingURL=wait.js.map