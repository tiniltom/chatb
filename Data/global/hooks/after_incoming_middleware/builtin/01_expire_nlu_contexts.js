//CHECKSUM:74c1d15fcfe6de7dba3165f97693463b0007762af40fa055c35858c3bc331ea9
"use strict";

if (event.state && event.state.session && event.state.session.nluContexts) {
  if (event.nlu && !event.nlu.errored) {
    event.state.session.nluContexts.forEach(x => --x.ttl); // Remove contexts that have expired

    event.state.session.nluContexts = event.state.session.nluContexts.filter(x => x.ttl > 0);
  }
}
//# sourceMappingURL=01_expire_nlu_contexts.js.map