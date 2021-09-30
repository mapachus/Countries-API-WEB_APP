// const { Country, Activity} = require("../db");


// async function addActivity(req, res) { 
    
//     const { name, difficulty, duration, season, countries} = req.body;
    
//     const [newActivity, created] = await Activity.findOrCreate({
//         where: { name: name }, defaults: {
//             difficulty: difficulty,
//             duration: duration,
//             season: season
//         }
//     });
    
    
//     try {
//         countries.map(async (c) => {
//             try {
//                 const country = await Country.findOne({
//                     where: {
//                         name: c
//                     }
//                 })
//                 await newActivity.addCountries(country)
//             } catch (err) {
//                 console.log(err)
//             }
//         });
//         return res.status(200).send(newActivity)
//     } catch {
//         return res.send('No se pudo agregar actividad al pais')
//     }


// }


// module.exports={
//     addActivity
// }




const {Activity, Country} = require('../db');

 async function addActivity (req, res) {
	const activity = req.body;
	const activityCreated = await Activity.create({
		name: activity.name,
		difficulty: activity.difficulty,
		duration: activity.duration,
		season: activity.season,
	});

	

	if (activity.countries) {
		let actCountries = activity.countries.split(',');
		actCountries.map(async (c) => {
			let country = await Country.findByPk(c);
			console.log('este es el pais ' + country.name);
			await country.addActivity([activityCreated]);
		});
	}
	res.send(activityCreated);
};

module.exports = {
    addActivity
};