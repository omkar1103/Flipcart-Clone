import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://test-yt:B3Rg7YjKzQNq9EYc@test-shard-00-00.5ouyh.mongodb.net:27017/testdb?ssl=true&replicaSet=atlas-k076xn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=test`;
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('✅ Database Connected Successfully');
    } catch (error) {
        console.log('❌ Error: ', error.message);
    }
};

export default Connection;
