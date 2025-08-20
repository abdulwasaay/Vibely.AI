const { InferenceClient } = require("@huggingface/inference")
const { api_key } = require("../../config/env")

const client = new InferenceClient(api_key);

const GenerateImage = async (prompt) => {
    try {
        const image = await client.textToImage({
            provider: "nscale",
            model: "black-forest-labs/FLUX.1-schnell",
            inputs: prompt,
            parameters: { num_inference_steps: 5 },
        });

        return image
    } catch (err) {
        throw new Error("Failed to generate Image")
    }
}

module.exports = GenerateImage