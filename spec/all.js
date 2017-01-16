let req = require.context('./', true, /Spec\.js$/);
req.keys().forEach(req);