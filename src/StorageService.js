const userKey = 'barebones-user';

//TODO: Do we need this as a service?
export default function StorageService() {

    /**
     * Set the logged in user in local storage
     */
    this.setUser = (user) => {
        if(user) {
            const json = JSON.stringify(user);
            localStorage.setItem(userKey,json);
        }
    }

    /**
     * Get the user from local storage
     */
    this.getUser = () => {
        var json = localStorage.getItem(userKey);
        if (json && json.length > 0) {
            return JSON.parse(json);
        }
    }

    /**
     * Kick the user out of local storage
     */
    this.removeUser = () => {
        localStorage.removeItem(userKey);
    }
}