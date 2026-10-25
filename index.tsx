import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
if (/^#\/(th|en|zh|ar|hi)(?:\/|$)/.test(window.location.hash)) {
 window.history.replaceState(null,'',window.location.hash.slice(1));
}
createRoot(document.getElementById('root')!).render(<App/>);
