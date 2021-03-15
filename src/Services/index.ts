import Http from './http'

const BASE_URL = 'https://api.mercadolibre.com';
const SITE_ID = 'MCO';

export const getCategories = async () => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/categories`
        const response = await Http.instance.get(URL)
        return response
    } catch (error) {
        console.error(error, 'fail getCategories request')
        throw Error(error.message)
    }
}

export const getProducts = async (search: string) => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/search?q=${search}`
        const response = await Http.instance.get(URL)
        return response.results
    } catch (error) {
        console.error(error, 'fail getProducts request')
        throw Error(error.message)
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const URL = `${BASE_URL}/sites/${SITE_ID}/search?category=${category}`
        const response = await Http.instance.get(URL)
        return response.results
    } catch (error) {
        console.error(error, 'fail getProductsByCategory request')
        throw Error(error.message)
    }
}

export const getProductDetail = async (id: string) => {
    try {
        const URL = `${BASE_URL}/items/${id}`
        const response = await Http.instance.get(URL)
        return response
    } catch (error) {
        console.error(error, 'fail getProductDetail request')
        throw Error(error.message)

    }
}

export const getProductDescription = async (id: string) => {
    try {
        const URL = `${BASE_URL}/items/${id}/description`
        const response = await Http.instance.get(URL)
        return response.plain_text
    } catch (error) {
        console.error(error, 'fail getProductDescription request')
        throw Error(error.message)

    }
}
