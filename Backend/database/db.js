import mongoose from 'mongoose';

const Connection = async () => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb://test-yt:B3Rg7YjKzQNq9EYc@test-shard-00-00.5ouyh.mongodb.net:27017,test-shard-00-01.5ouyh.mongodb.net:27017,test-shard-00-02.5ouyh.mongodb.net:27017/TEST?ssl=true&replicaSet=atlas-k076xn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=test`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true,  });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;