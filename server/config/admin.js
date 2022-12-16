var admin = require("firebase-admin");

var serviceAccount = require("../keys/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db=admin.firestore();
module.exports={db}