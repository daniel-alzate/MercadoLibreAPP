const BASE_URL = 'https://api.mercadolibre.com';
const SITE_ID = 'MCO';

export const getCategories = async () => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/categories`
        const response = await fetch(URL)
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.error(error, 'fail getCategories request')
        throw Error(error.message)
    }
}

export const getProducts = async (search: string) => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/search?q=${search}`
        const response = await fetch(URL)
        const responseJson = await response.json()
        return responseJson.results  
      } catch (error) {
        console.error(error, 'fail getProducts request')
        throw Error(error.message)
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/search?category=${category}`
        const response = await fetch(URL)
        const responseJson = await response.json()
        return responseJson.results
    } catch (error) {
        console.error(error, 'fail getProductsByCategory request')
        throw Error(error.message)
    }
}