"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInfo = void 0;
const path = require('path');
const fs = require('fs');
// read serverInfo.json
const rawInfo = fs.readFileSync(path.join(__dirname, '../serverInfo.json'));
exports.serverInfo = JSON.parse(rawInfo);
console.log('ServerInfo: ', exports.serverInfo);
//# sourceMappingURL=ServerInfo.js.map