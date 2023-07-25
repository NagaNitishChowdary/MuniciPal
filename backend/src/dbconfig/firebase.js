const admin=require('firebase-admin');
const path=require('path');

const serviceAccount=require(path.resolve(__dirname,/*YOUR FIREBASE SERVICE ACCOUNT CREDENTIAL FILE*/));

admin.initializeApp({
      credential:admin.credential.cert(serviceAccount)
});

const db=admin.firestore();

module.exports=db;
