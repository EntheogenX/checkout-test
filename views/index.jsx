const React = require('react');
module.exports = class extends React.PureComponent {
    render() {
        const {title} = this.props;

        return (
            <html>
                <head>
                    <title>{title}</title>
                    <link rel='stylesheet' href='/css/style.css'/>
                    <script src="/dist/js/main.js" defer />
                </head>
                <body>
                    <div id="app" />
                </body>
            </html>
        );
    }
};
