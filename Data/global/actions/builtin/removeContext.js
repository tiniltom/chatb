//CHECKSUM:e13fe78b0aa2f7001e5a7384f5f3ee286d00c96493779e356e0b40167f87988a
"use strict";

/**
 * Removes the provided context(s) from the list of contexts that will be used by the NLU Engine
 * for the next messages for that chat session.
 *
 * This method is contextual to the current user and chat session.
 *
 * You can specify more than one context by separating them with a comma.
 *
 * @title Remove Context
 * @category NLU
 * @author Botpress, Inc.
 * @param {string} contexts - Comma-separated list of contextss
 */
const removeContext = contexts => {
  const existing = event.state.session.nluContexts || [];
  const remove = contexts.split(',');
  event.state.session.nluContexts = existing.filter(x => remove.indexOf(x.context) < 0);
};

return removeContext(args.contexts);
//# sourceMappingURL=removeContext.js.map