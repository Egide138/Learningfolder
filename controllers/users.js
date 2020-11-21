import { clients} from '../models/index.js'
export const getusers=function(req,res){
    clients.findAll().then((u)=>{
        res.status(200).json({ message:"user found!", user: u})

    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"Failed to find user!"})
    })
}