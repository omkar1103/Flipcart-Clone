import { products } from "./constants/data.js"; 
import Products from "./module/products-schema.js"; 

const DefaultData = async () => { 
    try {
        // await Products.deleteMany({});
        await Products.insertMany(products); 

        console.log("✅ Database imported successfully");
    } catch (error) {
        console.log("❌ Error while inserting default data:", error.message);
    }
};

export default DefaultData;
