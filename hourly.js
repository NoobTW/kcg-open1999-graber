const axios = require('axios');
const fs = require('fs');

const API_PATH = 'http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery';

(async () => {
	if (!fs.existsSync(`${__dirname}/temp`)){
		fs.mkdirSync(`${__dirname}/temp`);
	}
	let data = await axios.get(API_PATH);
	// data = JSON.parse(data.data);
	const d = new Date();
	fs.writeFileSync(`${__dirname}/temp/${d.getMonth()+1}-${d.getDate()}-${d.getHours()}:00.json`, JSON.stringify(data.data), 'utf-8');
})();
