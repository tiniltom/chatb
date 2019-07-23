//CHECKSUM:b7eea811e85fe1c9c0e56501aa48cb3e4f0bc0b0ba121da93a42a98690967b34
"use strict";

/**
 * Store data to desired storage based on the time to live expectation. Read the
 * documentation for more details
 *
 * @title Set Variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} type - Pick between: user, session, temp, bot
 * @param {string} name - The name of the variable
 * @param {any} value - Set the value of the variable. Type 'null' or leave empty to erase it.
 */
const setVariable = async (type, name, value) => {
  if (type === 'bot') {
    const original = await bp.kvs.get(event.botId, 'global');
    await bp.kvs.set(event.botId, 'global', { ...original,
      [name]: value
    });
  } else if (value === 'null' || value === '' || typeof value === 'undefined') {
    delete event.state[type][name];
  } else {
    event.state[type][name] = value;
  }
};

return setVariable(args.type, args.name, args.value);
//# sourceMappingURL=setVariable.js.map