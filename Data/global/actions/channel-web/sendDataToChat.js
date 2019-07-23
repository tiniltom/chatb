//CHECKSUM:ed4b0ddd807c63ec87b341a36dda414b06b20f716b9862739e63f8b142ec7458
"use strict";

/**
 *
 * @title Sends serialized data to parent page on channel web
 * @category Channel Web
 * @author Botpress, Inc.
 * @param {string} data - Serialized payload you want to send
 */
const sendPostbackToParent = data => {
  if (event.channel != 'web') {
    return;
  }

  const postbackEvent = bp.IO.Event({
    type: 'data',
    channel: 'web',
    direction: 'outgoing',
    target: event.target,
    botId: event.botId,
    payload: {
      data
    }
  });
  bp.events.sendEvent(postbackEvent);
};

return sendPostbackToParent(args.data);
//# sourceMappingURL=sendDataToChat.js.map