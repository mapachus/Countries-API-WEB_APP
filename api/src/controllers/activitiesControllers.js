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
	
	     let [newActivity, created] = await Activity.findOrCreate({
		         where: { name: name }, defaults: {
			             difficulty: difficulty,
			             duration: duration,
			             season: season
			         }
			     });
		 
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
		