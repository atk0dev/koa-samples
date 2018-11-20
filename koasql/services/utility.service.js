const bcrypt = require('bcrypt');
const saltRound = 10;

module.exports = {
    
    async hashPassword(password) {
        try {
            return await bcrypt.hash(password, saltRound);        
        } catch (error) {
            throw error;
        }
    },
    
    async comparePasswords(password, hash) {
        try {
            return await bcrypt.compare(password, hash);
        } catch (error) {
            throw error;
        }
    }
};