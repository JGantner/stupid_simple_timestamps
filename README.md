# stupid_simple_timestamps
Extremely simple node.js module to encapsulate timestamp creation using the Date API.
The reason for this to exist is that i want to be able to stub the timestamp creation
in tests to be independent form the "real" time.

# Installation

Use npm: `npm install stupid_simple_timestamps`.

# Usage

```javascript
var generator = require('stupid_simple_timestamps');

var timestamp = generator(); // timestamp is a string like  "2015-09-23_10-38-12" that
                             // contains the current date in the YYYY-MM-DD_hh-mm-ss format.
                             // For the meaning of the format refer to ISO 8601 or https://en.wikipedia.org/wiki/ISO_8601
```

# License

MIT. See License.txt for details.