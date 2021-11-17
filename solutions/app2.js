
const cookieHandler = {
    getAll() {
        let cookies = {}
        const keyValuePairs = document.cookie
            .split('; ')
        for (const item of Object.values(keyValuePairs)) {
            let [key, value] = item.split('=')
            cookies[key] = value
        }
        return cookies;
    },
    toSessionStorage() {
        let cookies = this.getAll()
        for (let cookieData of Object.entries(cookies)) {
            let [key, value] = cookieData
            sessionStorage.setItem(key, value)
        }
    },
    flush() {
        let cookies = this.getAll()
        for (let cookieName of Object.keys(cookies)) {
            deleteCookie(cookieName)
        }
    }
}

const setCookie = (name, value) => {
    let cookieString = `${name}=${value}; `
    const now = new Date()
    now.setTime(now.getTime() + 15 * 60 * 1000)
    cookieString += `expires=${now.toUTCString()}; path=/`
    document.cookie = cookieString;
}

const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

setCookie('viewed', 5)
setCookie('uid', 354774631237)
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF')

export { cookieHandler };
