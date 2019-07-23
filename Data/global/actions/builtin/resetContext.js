//CHECKSUM:e0de6e788199bf6f87f3150b9ada2bfb2953fb2adb71534b8811305906f107a2
"use strict";

/**
 * Resets the NLU context to the default scope.
 *
 * This method is contextual to the current user and chat session.
 *
 * @title Reset Context
 * @category NLU
 * @author Botpress, Inc.
 */
const resetContext = () => {
  event.state.session.nluContexts = [];
};

return resetContext();
//# sourceMappingURL=resetContext.js.map