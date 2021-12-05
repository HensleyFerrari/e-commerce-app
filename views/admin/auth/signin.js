const layout = require("../layout")
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
    return layout({
        content: `
        <div>
            <form method="POST">
                <input placeholder="email" name="email" />
                ${getError(errors, 'email')}
                <input placeholder="password" name="password" />
                ${getError(errors, 'password')}
                <button>Sign In</button>
            </form>
        </div>
`})
}