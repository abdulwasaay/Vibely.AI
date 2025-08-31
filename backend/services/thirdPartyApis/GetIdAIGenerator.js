const axios = require("axios")
const FormData = require("form-data")
const { api_key } = require("../../config/env")

const GenerateImage = async (prompt) => {
    const formData = new FormData()
    formData.append('prompt', prompt)

    try {
        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(), // important for multipart
                    'x-api-key': api_key,
                },
                responseType: 'arraybuffer',
            }
        )
        return data
    } catch (err) {
        console.error("Error response:", err.response?.data?.toString())
        throw new Error(err.message)
    }
}

module.exports = GenerateImage
