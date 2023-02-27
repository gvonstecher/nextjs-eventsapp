import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}


function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
  }

export default function handler (req,res){
    const {method} = req;

    //Access data
    //extract data
    //Identificar evento en db - Agregar email

    const filePath = buildPath();
    console.log(filePath);
    const {events_categories, allEvents} = extractData(filePath);

    if(!allEvents){
        return res.status(404).json({
            message:'no events'
        })
    }

    if(method === 'POST'){
        const {email, eventId} = req.body;

        const newAllEvents = allEvents.map(ev=>{
            if(ev.id == eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(201).json({message:'this email is already registered'})
                }
                return{
                    ...ev, emails_registered:[...ev.emails_registered,email]
                }
            }
            return ev;

        });

        fs.writeFileSync(filePath, JSON.stringify({events_categories,allEvents:newAllEvents}));
        
        res
            .status(200)
            .json({
                message:`Successfully added email ${email}`
            });
    }
}