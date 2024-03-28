const database=require('../database/db')

const expense=async (req,res)=>{

    
    try{

        
        const obj = req.body;
        const obj2 = Object.keys(obj)[0];
        const obj3 = JSON.parse(obj2);

        const{title,type,amount,category,description,email}=obj3

        const db = await database();
        const collection = db.collection('expenses');



        const result = await collection.insertOne({
            title:title,
            type:type,
            amount:amount,
            category:category,
            description:description,
            email:email
        });
        console.log(result);
        res.status(201).json({message:'sucessfully submitted'});

       
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const data=async(req,res)=>{
    
}


module.exports={expense};