const database=require('../database/db');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secret_key="NOTESAPI";



const signup = async (req, res) => {
    try {
        const obj = req.body;
        const obj2 = Object.keys(obj)[0];
        const obj3 = JSON.parse(obj2);
        console.log(obj3);
        const { username, email, password } = obj3;

        const db = await database();
        const collection = db.collection('user');

        const found = await collection.find({ email: email }).toArray();

        if (found.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const result = await collection.insertOne({
            email: email,
            password: hashedpassword,
            username: username
        });

        const token = jwt.sign({ email: email, id: result._id }, secret_key);
        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


const signin=async(req,res)=>{

    try{
        const obj = req.body;
        const obj2 = Object.keys(obj)[0];
        const obj3 = JSON.parse(obj2);
    
        const{email,password}=obj3;
        console.log(obj3);
        const db = await database();
        const collection = db.collection('user');

         const found= await collection.find({ email: email }).toArray();
        console.log(found[0].password);
        if(!found){
            return res.status(404).json({message:"user not found"});

        }

        const matchpassword= await bcrypt.compare(password,found[0].password);

        if(!matchpassword){
            return res.status(400).json({message:"invalid credentials"});
        }

        const token=jwt.sign({email:found[0].email,id:found[0]._id},secret_key);
            
        res.status(201).json({user:found[0],token:token});
        }
    catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
    }

    
}

module.exports={signin,signup};





