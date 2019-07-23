//CHECKSUM:9aae7f7d3db7220471e78c804f8e1033c3e4b83a59fc2f6f0f02dd6063d0a568
'use strict';

const _ = require('lodash');

const INTENT_PREFIX = 'intent:';
/**
 * Get a variable under this user's storage
 * @title Validate user choice
 * @category Skills
 * @hidden true
 * @author Botpress, Inc.
 * @param {string} data - The parameters of the available choices
 */

const validateChoice = async data => {
  let choice = undefined;
  const config = await bp.config.getModuleConfigForBot('basic-skills', event.botId);

  const nb = _.get(event.preview.match(/^[#).!]?([\d]{1,2})[#).!]?$/), '[1]');

  if (config.matchNumbers && nb) {
    const index = parseInt(nb) - 1;
    const element = await bp.cms.getContentElement(event.botId, data.contentId);
    choice = _.get(element, `formData.choices.${index}.value`);
  }

  if (!choice && config.matchNLU) {
    choice = _.findKey(data.keywords, keywords => {
      const intents = keywords.filter(x => (x || '').toLowerCase().startsWith(INTENT_PREFIX)).map(x => x.substr(INTENT_PREFIX.length));
      return _.some(intents, k => event.nlu.intent.name === k);
    });
  }

  if (!choice) {
    choice = _.findKey(data.keywords, keywords => _.some(keywords || [], k => _.includes((event.preview || '').toLowerCase(), (k || '').toLowerCase()) || event.payload && _.includes(_.get(event, 'payload.text', '').toLowerCase(), (k || '').toLowerCase())));
  }

  if (choice) {
    temp['skill-choice-valid'] = true;
    temp['skill-choice-ret'] = choice;
  } else {
    temp['skill-choice-valid'] = false;
  }
};

return validateChoice(args);
//# sourceMappingURL=choice_parse_answer.js.map