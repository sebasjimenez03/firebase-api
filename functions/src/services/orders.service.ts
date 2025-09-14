import { db } from '../config/firebase.js';

const COL = "orders";

export async function list() {
  const snap = await db.collection(COL).orderBy("createdAt", "desc").limit(50).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getSellerOrders(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function getClientOrders(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}