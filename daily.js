const fs = require('fs');
const json2csv = require('json-to-csv');

(async () => {
	if (!fs.existsSync(`${__dirname}/temp`)){
		fs.mkdirSync(`${__dirname}/temp`);
	}
	if (!fs.existsSync(`${__dirname}/release`)){
		fs.mkdirSync(`${__dirname}/release`);
	}
	const tempArr = [];
	fs.readdirSync(`${__dirname}/temp`).forEach(file => {
		const d = new Date();
		if(file.startsWith(`${d.getMonth()+1}-${d.getDate()-1}-`)){
			let data = fs.readFileSync(`${__dirname}/temp/${file}`, 'utf-8');
			data = JSON.parse(data);
			Array.from(data).forEach(dd => {
				tempArr.unshift(dd);
			});
			fs.unlinkSync(`${__dirname}/temp/${file}`);
		}
	});
	const realArr = [];
	const realArrMarker = [];
	const da = new Date();
	console.log(da.getDate() - 1);
	Array.from(tempArr).forEach(d => {
		const dd = new Date(d.Cre_Date_.split(' ')[0]);
		if(dd.getDate() === da.getDate()-1 && dd.getMonth() === da.getMonth() && !realArrMarker[d.FileNo_]){
			realArrMarker[d.FileNo_] = true;
			realArr.push(d);
		}
	});
	fs.writeFileSync(`${__dirname}/release/${da.getFullYear()}-${da.getMonth()+1}-${da.getDate()-1}.json`, JSON.stringify(realArr), 'utf-8');
	json2csv(realArr, `${__dirname}/release/${da.getFullYear()}-${da.getMonth()+1}-${da.getDate()-1}.csv`);
})();
