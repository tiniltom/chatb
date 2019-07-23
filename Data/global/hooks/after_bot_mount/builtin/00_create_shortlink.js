//CHECKSUM:efc28ca9db11847fee44584c58b8f39f61766285cf94aa26e74511d299cb6524
"use strict";

const chatOptions = {
  hideWidget: true,
  config: {
    enableReset: true,
    enableTranscriptDownload: true
  }
};
const params = {
  m: 'channel-web',
  v: 'Fullscreen',
  options: JSON.stringify(chatOptions) // Bot will be available at $EXTERNAL_URL/s/$BOT_NAME

};
bp.http.createShortLink(botId, `${process.EXTERNAL_URL}/lite/${botId}/`, params);
//# sourceMappingURL=00_create_shortlink.js.map