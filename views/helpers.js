module.exports = {
    getError(errors) {
        try {
            return errors.mapped()[prop].msg
        } catch (err) {
            return ''
        }
    }
}