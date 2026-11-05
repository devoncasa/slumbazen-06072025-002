import {browserPreferredLanguage} from '../localization';

const {hash, search} = window.location;
const legacyPath = /^#\/(th|en|zh|ar|hi)(?:\/|$)/.test(hash);
window.location.replace(legacyPath ? hash.slice(1) : `/${browserPreferredLanguage('/')}/${search}${hash}`);
