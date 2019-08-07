// NOTE: I observed that it's only a problem if you export * from a file in node_modules
// and it doesn't matter module it is. In my case, I'm trying to re-export from `@testing-library/react`.
// here I'll just use eslint-plugin-import so we don't need to install anything else.

import {config} from 'eslint-plugin-import' // <-- no error here

export * from 'eslint-plugin-import'
