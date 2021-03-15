export default class Http {
    static instance = new Http();

    get = async (URL: string) => {
        try {
            let response = await fetch(URL)
            if (response.ok) {
                let responseJson = await response.json()
                return responseJson
            } else {
                let responseJson = await response.json()
                throw Error(responseJson.error)
            }
        } catch (error) {
            throw Error(error.message)
        }
    }
}