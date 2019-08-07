eslint-plugin-import's `import/named` rule has trouble with resolving files which import from files which use `export * from 'some-node_module'`

Here's the issue:

```javascript
// exporter.js
// NOTE: I observed that it's only a problem if you export * from a file in node_modules
// and it doesn't matter module it is. In my case, I'm trying to re-export from `@testing-library/react`.
// here I'll just use eslint-plugin-import so we don't need to install anything else.

import {config} from 'eslint-plugin-import' // <-- no error here (so it definitely exports `config`)

export * from 'eslint-plugin-import'

// importer.js

import {configs} from './exporter' // <-- import/named fails
```

I'm not sure why this is an issue, but like I said, it appears to only happen when you re-export from a `node_modules` module.
