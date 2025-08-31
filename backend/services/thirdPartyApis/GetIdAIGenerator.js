const { default: axios } = require("axios")
const { api_key } = require("../../config/env")

const GenerateImage = async (prompt) => {
    const formData = new FormData()
    formData.append('prompt', prompt)
    try {
        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': api_key,
            },
            responseType: 'arraybuffer'
        })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = GenerateImage