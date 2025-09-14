import { db } from '../config/firebase.js';

const COL = "collaborators";

export async function listCollaborators() {
  const snap = await db.collection(COL).limit(50).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function get(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function create(payload: { name: string; email: string }) {
  const now = new Date();
  const ref = await db.collection(COL).add({ ...payload, createdAt: now });
  return ref.id;
}