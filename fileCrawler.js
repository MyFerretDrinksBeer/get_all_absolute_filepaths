const fs = require('fs');
const chalk = require('chalk');


//Set your filepah here (must end with a closing foward slash "/"...... ex. C:/Users/randuser/Desktop/ )
const filePath = 'C:/Users/conne/OneDrive/Desktop/Everything/'




/**
	Get a list of all filepaths
**/
const run = async (dir) => {

	let finalArr = [];
	let getAll = (dir) => {
		fs.readdirSync(dir).forEach((item, index) => {
			if(fs.statSync(dir + '/' + item).isDirectory()){
				getAll(dir + '/' + item)
			}
			else{
				finalArr.push(dir + item + '\n')
			}

		})
	}

	getAll(dir)

	console.log(finalArr, '\n\n', chalk.yellow('Successful scanned ', chalk.red(finalArr.length), ' filepaths...' ))

	fs.writeFile('FILE_LIST.txt', finalArr, (err) => {
		if(err){
			console.log(err)
		}else{
			console.log(chalk.yellow('All filepaths have been saved in this directory as', chalk.red('"FILE_LIST.txt" ')), '\n\n')
		}
	});
}



run(filePath)