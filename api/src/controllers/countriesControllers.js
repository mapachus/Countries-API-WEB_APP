const { Country } = require("../db");
const axios = require("axios");

async function getCountries (req, res, next) {
try {
   let {data} = await axios.get("https://restcountries.com/v3/all");
   let countries = data.map(c => {
       return {
           name: c.name.common,
           flag: c.flags[1],
           continent: c.region,
           capital:c.capital && c.capital[0] || null ,
           subregion:c.subregion || null,
           area:c.area,
           code:c.cca3
       }
   })
   
   countries = await Promise.all(countries.map(c => Country.findOrCreate({where:c})))
   
   console.log(countries, "countries")
     
   const allCountries = await Country.findAll();

   const {name} = req.query;
   console.log(allCountries, "allCountries")
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
    const {data} = await axios.get("https://restcountries.com/v3/all");
    const cInfo = data.map(c => {
        return {
            name: c.name.common,
            flag: c.flags[0],
            continent: c.region,
            capital: c.capital && c.capital[0] || null ,
            subregion:c.subregion || null,
            area:c.area,
            code:c.cca3
        }
    })

    const cDetail = cInfo.filter(c=> c.code == id);
    
    console.log(cDetail)
    return res.send(cDetail);
    
    } catch (error) {
        next(error)
    }
    }


module.exports={
    getCountries, 
    getCountryById
 }
 
 