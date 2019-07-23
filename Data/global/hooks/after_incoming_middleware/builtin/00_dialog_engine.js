//CHECKSUM:9c979034650daa39e69c38d1c46318363332390da1d8d71bf4f4417e679d3d6b
"use strict";

const messageTypesToDiscard = ['session_reset', 'typing', 'visit', 'session_reference'];

if (messageTypesToDiscard.includes(event.type)) {
  event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true);
}
//# sourceMappingURL=00_dialog_engine.js.map