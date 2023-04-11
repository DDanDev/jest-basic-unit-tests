async function hey(msg) {
	// console.log("started function")
	// console.log(msg)
	return msg;
}


try {
	module.exports = { hey, summer: (numbers) => numbers.reduce((total, number) => total + number, 0) };

	module.exports.another = "olá";
} catch {}
