
const setCookie = (str) => {
    let cookieString = `token=${str}; `
    const now = new Date()
    now.setTime(now.getTime() + 15 * 60 * 1000)
    cookieString += `expires=${now.toUTCString()}; path=/`
    document.cookie = cookieString;
}

export default setCookie;
