const { Country, Activity } = require("../db");
const axios = require("axios");

async function getCountries (req, res, next) {
try {
   let {data} = await axios.get("https://restcountries.com/v3/all");
   let countries = data.map(c => {
       return {
           name: c.name.common,
           flag: c.flags[1],
           continent: c.region,
           capital: c.capital && c.capital[0] || null ,
           subregion: c.subregion || null,
           area: c.area,
           code: c.cca3,
           population: c.population,
           map: c.maps.googleMaps
       }
   })
   
   countries = await Promise.all(countries.map(c => Country.findOrCreate({where:c})))
   
   const allCountries = await Country.findAll({
    where: {
     
    },
    attributes: ["name", "flag", "continent", "capital", "subregion","area","code","population","map"],
    include: Activity
    });

   const {name} = req.query;
   
   if (name) { const byName = allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    byName.length? res.send (byName) : res.send(" Not a Country ❌")
   } else {
   return res.send(allCountries);
   }

} catch (error) {
    next(error)
}
}

async function getCountryById (req, res, next) {
    try {
    const {id} = req.params;
   
    if(id && id.length === 3) {    
    
        let countriesDB = await Country.findAll();
    
        let countryFilter = countriesDB.find(c => id === c.code );
       
        if(countryFilter){
            let countryDetail = await Country.findOne({
            where: {
              code: id
            },
            attributes: ["name", "flag", "continent", "capital", "subregion","area","code", "map"],
            include: Activity
            });
             return res.send(countryDetail);
         } else {
          return res.status(404).send("No existe el pais");
        }
    }
    
    return res.status(404).send("No existe el pais"); 
    
    } catch (error) {
        next(error)
  }
}


module.exports={
    getCountries, 
    getCountryById
 }
 
 