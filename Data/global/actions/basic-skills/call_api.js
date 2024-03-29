//CHECKSUM:772beff73d37fa1049937fa60bd8574eb2087f4eb3deffe2828ace48ff1b1a2e
"use strict";

const axios = require('axios');
/**
 * @hidden true
 */


const callApi = async (url, method, body, memory, variable, headers) => {
  // Use context to flatten event object
  const context = {
    event,
    user: event.state.user,
    temp: event.state.temp,
    session: event.state.session
  };
  const renderedHeaders = bp.cms.renderTemplate(headers, context);
  const renderedBody = bp.cms.renderTemplate(body, context);

  try {
    const response = await axios({
      method,
      url,
      headers: renderedHeaders,
      data: renderedBody
    });
    event.state[memory][variable] = {
      body: response.data,
      status: response.status
    };
    event.state.temp.valid = true;
  } catch (error) {
    const errorCode = error.response && error.response.status || error.code || '';
    bp.logger.error(`Error: ${errorCode} while calling resource "${url}"`);
    event.state[memory][variable] = {
      status: errorCode
    };
    event.state.temp.valid = false;
  }
};

return callApi(args.url, args.method, args.body, args.memory, args.variable, args.headers);
//# sourceMappingURL=call_api.js.map