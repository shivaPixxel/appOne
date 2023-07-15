const mongoose = require('mongoose')
const uri = "mongodb+srv://pixxelarts:shiva2512@dynamicwebsite.0j1proq.mongodb.net/pixxelarts?retryWrites=true&w=majority"

let articleTitle = "FBI Director Christopher Wray tangles with House GOP in tense hearing. What you missed"

let articleContent = `WASHINGTON FBI Director Christopher Wray defended the agency Wednesday against House Republicans who argued it suppressed conservative posts on social media and for running what they called illegal searches about U.S. citizens under a foreign surveillance law.

The hearing became the latest flashpoint for the FBI, which Republicans criticized for investigating participants at school board meetings or censoring social media posts. Democrats accused Republicans of trying to protect former President Donald Trump, who faces federal charges related to possession of national security documents after an FBI search of Mar-a-Lago 18 months after he left the White House. A White House spokesman said Republicans are attacking law enforcement.

In his opening salvo, House Judiciary Committee Chairman Jim Jordan, R-Ohio, cited a federal court decision in Louisiana eight days earlier that found the government suppressed First Amendment rights of people posting on social media posts about the COVID-19 pandemic vaccines and mask requirements, under a policy the ruling compared to an “Orwellian ministry of truth.”`

const result = async ()=>{
    let mdCon = await mongoose.connect(uri)

    const articleSchema = mongoose.Schema({
        title:String,
        content:String
    })

   let articleModel = mongoose.model('article', articleSchema)
   let output = await articleModel.create({title:articleTitle,content:articleContent})
   console.log(output)
}

result()

