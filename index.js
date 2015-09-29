const React = require('react');
const classMap = require('solskinn-common').helpers.classMap;

module.exports = function(React) {
    let SolFooter = React.createClass({
        displayName: 'SolFooter',

        getInitialState() {
            return {
                editorInChief: {
                    name: 'Stephan Granhaug',
                    email: 'FJERNDETTEstephan.granhaug@sol.no'
                },
                editor: {
                    name: 'Lill Kristin Syversen',
                    email: 'FJERNDETTElill.syversen@sol.no'
                },
                onCall: {
                    name: 'Kontakt redaksjonen',
                    email: 'FJERNDETTEredaksjonen@sol.no'
                }
            }
        },

        render() {
            let editor = this.state.editor || {};
            let editorInChief = this.state.editorInChief || {};
            let onCall = this.state.onCall || {};

            return (
                <footer className={classMap.footer}>
                    <h3 className={classMap.footerLogo}>SOL.no</h3>

                    <ul className={classMap.footerInfo}>
                        <li>
                            <h3 className={classMap.address}>
                                {'Karvesvingen 1, 0579 Oslo'}
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.description}>
                                {'Ansvarlig redaktør:'}
                            </h3>
                            <h3 className={classMap.content}>
                                <a href={'mailto:' + editorInChief.email}>
                                    {editorInChief.name}
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.description}>
                                {'Redaktør:'}
                            </h3>
                            <h3 className={classMap.content}>
                                <a href={'mailto:' + editor.email}>
                                    {editor.name}
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.description}>
                                {'Vaktsjef nå:'}
                            </h3>
                            <h3 className={classMap.content}>
                                <a href={'mailto:' + onCall.email}>
                                    {onCall.name}
                                </a>
                            </h3>
                        </li>
                    </ul>

                    <ul className={classMap.footerLinks}>
                        <li>
                            <h3 className={classMap.content}>
                                <a href="http://www.sol.no/infoweb/om_sol">
                                    {'Om SOL'}
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.content}>
                                <a href="http://www.sol.no/hjelp/">
                                    {'Kontakt oss'}
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.content}>
                                <a href="http://www.sol.no/infoweb/">
                                    {'Annonsere'}
                                </a>
                            </h3>
                        </li>
                        <li>
                            <h3 className={classMap.content}>
                                <a href="http://www.sol.no/nyheter/2013_07_02_19144_personvern-og-cookies.html">
                                    {'Om cookies'}
                                </a>
                            </h3>
                        </li>
                    </ul>
                </footer>
            );
        }
    });

    return React.createFactory(SolFooter);
}
