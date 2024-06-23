import Cake from "../models/cake.model.js"

export const getCakes = async(request, response) => {
    try {
        const result = await Cake.find();
        if(!result){
            return response.status(400).json({message: "No cakes found"})
        }
        return response.status(200).json(result);
    } catch (error) {
        console.log("Error in getCakes controller", error);
        return response.status(500).json({error: 'Internal server error'})
    }
}

export const postCakes = async(request, response) => {
    try {
       const {body: cakeData} = request;
       console.log(cakeData);
       const cake = new Cake({...cakeData});
       const result = await cake.save();
       console.log(result)
       return response.status(200).json(result);
    } catch (error) {
        console.log("Error in getCakes controller", error);
        return response.status(500).json({error: 'Internal server error'})
    }
}

