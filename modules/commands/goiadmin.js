const fs = require("fs");
module.exports.config = {
name: "Gọi admin",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Gọi admin",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@[ / ] • ℬℴ𝓉 ℋℴ𝒶̀𝒾 ℬ𝒶̉ℴ ʕ•ﻌ•ʔ 💜")==0 || (event.body.indexOf("@Hồ Thanh Hoài Bảo")==0) || (event.body.indexOf("Bảo")==0) ||
(event.body.indexOf("Hoài Bảo")==0) ||
(event.body.indexOf("hoài bảo")==0) ||
(event.body.indexOf("bảo")==0)) {
  var msg = {
    body: "Gọi admin làm lồn gì có việc thì nhắn tin qua fb https://www.facebook.com/HoaiBao.IN4 \nGọi nữa ăn đấm đấy 🙂", 
  }
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}