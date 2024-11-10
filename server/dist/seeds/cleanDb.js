import models from '../models/index.js';
export default async (modelName) => {
    try {
        const model = models[modelName];
        if (!model) {
            throw new Error(`Model ${modelName} does not exist.`);
        }
        // Check if there are any documents in the collection and delete them
        const documentCount = await model.countDocuments();
        if (documentCount > 0) {
            await model.deleteMany({});
            console.log(`All documents in the ${modelName} collection have been deleted.`);
        }
        else {
            console.log(`The ${modelName} collection is already empty.`);
        }
    }
    catch (err) {
        console.error(`Error in cleanDb for model ${modelName}:`, err);
        throw err;
    }
};
