# platizeverse db
This is the readme section

```js
    const dbConnection = require('platziverse-db');
    dbConnection(config)
    .then(db => {
        const { Agent,  Metric} = db;
    })
    .catch(y => {
        console.log(' y: ', y);
    })
```