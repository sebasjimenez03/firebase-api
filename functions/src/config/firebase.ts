import { Firestore } from '@google-cloud/firestore';

const db = new Firestore({
  projectId: process.env.GCLOUD_PROJECT,
  databaseId: '',
  servicePath: '-firestore.googleapis.com',
  apiEndpoint: '-firestore.googleapis.com'
});

export { db };
