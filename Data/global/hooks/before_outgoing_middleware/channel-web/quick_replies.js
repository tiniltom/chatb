//CHECKSUM:6af3c68def4e13390e2b01695e46212c69399d19a293ede38b3acedeab352619
"use strict";

const _ = require('lodash');

const channels = ['api', 'web'];

if (event.payload.quick_replies && channels.includes(event.channel)) {
  event.payload = {
    type: 'custom',
    module: 'channel-web',
    component: 'QuickReplies',
    quick_replies: event.payload.quick_replies,
    wrapped: {
      type: 'text',
      ..._.omit(event.payload, 'quick_replies')
    }
  };
  event.type = 'custom';
}
//# sourceMappingURL=quick_replies.js.map