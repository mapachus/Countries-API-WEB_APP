const {Activity, Country} = require('../db');

async function getActivity (req, res) {
   try {
	 const allActivities = await Activity.findAll({
	   include: [{
		 model: Country,
		 attributes: ['name', 'flag', 'subregion']
	   }]
	 });
	
	 if (!allActivities.length) {
		 return res.json([])
		}
	 return res.json(allActivities)
   } catch (err) {
	 console.log(err)
   }
 };
 
 
 async function addActivity(req, res) { 
	 
	     let { name, difficulty, duration, season, countries} = req.body;
		 console.log("body", req.body)
		 console.log(countries, "countries")
		 
		 console.log(countries[0], "country index 0")
		 console.log(countries[1], "country index 1")
	 
	     let [newActivity, created] = await Activity.findOrCreate({
		         where: { name: name }, defaults: {
			             difficulty: difficulty,
			             duration: duration,
			             season: season
			         }
			     });

		console.log("newA", newActivity)
				
			 
			 
			     try {
				         countries.map(async (c) => {
					             try {
						                 let country = await Country.findOne({
							                     where: {
								                         name: c
								                     }
								                 })
								                 await newActivity.addCountries(country)
								             } catch (err) {
									                 console.log(err)
									             }
        });
        return res.status(200).send(newActivity)
    } catch {
	    return res.send('No se pudo agregar actividad al pais')
	    }
	}
	
	module.exports={
		    addActivity,
			getActivity
		}
		
		
		
		
		
		// const { Country, Activity} = require("../db");
		
		
		
		//  async function addActivity (req, res) {
			// 	const activity = req.body;
			// 	console.log("body", req.body)
			// 	console.log("activity.countries", activity.countries)
			// 	const activityCreated = await Activity.create({
				// 		name: activity.name,
				// 		difficulty: activity.difficulty,
				// 		duration: activity.duration,
				// 		season: activity.season,
				// 	});
				
				
				// 	if (activity.countries) {
					// 		console.log("activity.countries", activity.countries)
					// 		let activityCountries = activity.countries.split(',');
					// 		console.log("actCountries", activityCountries)
					// 		activityCountries.map(async (c) => {
						// 			let country = await Country.findOne({
							// 	        where: { name: c } });
							// 			await country.addActivity([activityCreated]);
							// 		});
							// 	}
							// 	res.send(activityCreated);
							// };
							
							// module.exports = {
							// 	addActivity,
							// 	getActivity
							// };