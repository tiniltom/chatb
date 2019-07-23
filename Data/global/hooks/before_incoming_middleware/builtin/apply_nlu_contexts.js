//CHECKSUM:cb90d55dac6b7fea02a8f4fa49c4499eb04608438f9ac9ea02be5bf763aa5c90
"use strict";

if (event.state && event.state.session && event.state.session.nluContexts && event.state.session.nluContexts.length) {
  event.nlu = event.nlu || {};
  Object.assign(event.nlu, {
    includedContexts: event.state.session.nluContexts.map(x => x.context)
  });
}
//# sourceMappingURL=apply_nlu_contexts.js.map