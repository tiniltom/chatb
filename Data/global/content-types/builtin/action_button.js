//CHECKSUM:74594324668088fcf7af99ca76b2977f3eb9f45bf66e9f058b906ef4a1c9fd9a
"use strict";

const base = require('./_base');

function renderElement(data, channel) {
  // We don't render action button
  return [];
}

module.exports = {
  id: 'builtin_action-button',
  group: 'Built-in Messages',
  title: 'Action Button',
  jsonSchema: {
    description: 'A button that triggers an action, often used in cards',
    type: 'object',
    required: ['action', 'title'],
    properties: {
      title: {
        type: 'string',
        description: 'Title of the button'
      },
      action: {
        type: 'string',
        enum: ['Say something', 'Open URL', 'Postback'],
        default: 'Say something'
      }
    },
    dependencies: {
      action: {
        oneOf: [{
          properties: {
            action: {
              enum: ['Say something']
            },
            text: {
              type: 'string',
              title: 'Enter text or the ID of a content element (ex: #!builtin_text-myid)'
            }
          }
        }, {
          properties: {
            action: {
              enum: ['Open URL']
            },
            url: {
              type: 'string',
              title: 'Enter a valid URL'
            }
          },
          required: ['url']
        }, {
          properties: {
            action: {
              enum: ['Postback']
            },
            payload: {
              type: 'string'
            }
          },
          required: ['payload']
        }]
      }
    }
  },
  uiSchema: {},
  computePreviewText: formData => `Action: ${formData.action}`,
  renderElement: renderElement,
  hidden: true
};
//# sourceMappingURL=action_button.js.map