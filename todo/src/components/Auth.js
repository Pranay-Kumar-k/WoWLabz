class Auth {
    constructor() {
        this.authentication = false
    }
    login(cb) {
        this.authentication = true
        cb()
    }
    logout(cb) {
        this.authentication = false
        cb()
    }
    isAuthenticated() {
        return this.authentication
    }
}
export default new Auth()