import React from "react";
import { useSelector } from 'react-redux';
import { IntlProvider } from "react-intl";

// import '@formatjs/intl-pluralrules/polyfill';
// import '@formatjs/intl-pluralrules/locale-data/en';
// import '@formatjs/intl-pluralrules/locale-data/vi';

// import '@formatjs/intl-relativetimeformat/polyfill';
// import '@formatjs/intl-relativetimeformat/locale-data/en';
// import '@formatjs/intl-relativetimeformat/locale-data/vi';

import { LanguageUtils } from '../utils';

function IntlProviderWrapper({ children }) {
    const language = useSelector(state => state.homeReducer.language);
    const messages = LanguageUtils.getFlattenedMessages();

    return (
        <IntlProvider
            locale={language}
            messages={messages[language]}
            defaultLocale="en">
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
