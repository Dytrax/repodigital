import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/userCantar'
import { hash } from 'bcrypt'
//import Cors from 'cors'
//import initMiddleware from '../../lib/init-middleware'
dbConnect();
//EndPoint to create a new User 
// Initialize the cors middleware
/* const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  ) */
export default async (req, res) => {
    //Destructuring & GET the method
    //await cors(req, res)
    const { method } = req;
    console.log(method)
   
    switch (method) {
        case 'POST':
                var email = req.body.email
                //Encript the Password
                const userExist =  await User.findOne({email})
                if(userExist){
                    return res.status(400).json({ success: false,message:'El usuario ya existe' });
                }
                console.log(userExist)
                hash(req.body.password, 10 , async function(err, hash) {
                //user data structure
                var userData = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    mobile: req.body.mobile,
                    age:req.body.age
                }
                
                //Async function to create the User in mongoDB
                try{
                
                const user = await User.create(userData);
                res.status(200).json({ success: true, data: user });
                } catch (error) {
                    res.status(400).json({ success: false,e:error });
                }
            });
            break;
        case 'GET':
            try {
                const user = await User.find({})
                res.status(200).json({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false,e:error });
            break;
    }
}