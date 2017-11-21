const React = require('react');
module.exports = class extends React.PureComponent {
    render() {
        const {message, error} = this.props;
        return [
            <h1>{message}</h1>,
            <h2>{error.status}</h2>,
            <pre>{error.stack}</pre>
        ];
    }
};