//CHECKSUM:9b88f3e27c03717074bd08bb3a4190e8a1f638a5af5a472e895b8afb9df7a337
"use strict";

const base = require('./_base');

function render(data) {
  const events = [];

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    });
  }

  return [...events, {
    type: 'text',
    markdown: true,
    text: data.text
  }];
}

function renderMessenger(data) {
  const events = [];

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    });
  }

  return [...events, {
    text: data.text
  }];
}

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api' || channel === 'telegram') {
    return render(data);
  } else if (channel === 'messenger') {
    return renderMessenger(data);
  }

  return []; // TODO
}

module.exports = {
  id: 'builtin_text',
  group: 'Built-in Messages',
  title: 'Text',
  jsonSchema: {
    description: 'A regular text message with optional typing indicators and alternates',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      },
      variations: {
        type: 'array',
        title: 'Alternates (optional)',
        items: {
          type: 'string',
          default: ''
        }
      },
      ...base.typingIndicators
    }
  },
  uiSchema: {
    text: {
      'ui:field': 'i18n_field',
      $subtype: 'textarea'
    },
    variations: {
      'ui:options': {
        orderable: false
      }
    }
  },
  computePreviewText: formData => formData.text && 'Text: ' + formData.text,
  renderElement: renderElement
};
//# sourceMappingURL=text.js.map