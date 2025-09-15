import { db } from '../config/firebase.js';
import { FieldValue } from 'firebase-admin/firestore';

const COL = "orders";

export async function list() {
  const snap = await db.collection(COL).orderBy("createdAt", "desc").limit(50).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function get(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function getSellerOrders(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function getClientOrders(id: string) {
  const doc = await db.collection(COL).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

/**
 * POST /orders
 * Crea un pedido.
 * @param {Object} payload - { itemId, clientId, sellerId, status?, invoice?, ... }
 * @returns {Promise<Object>} { id, ...data }
 */

export async function createOrder(payload: any) {
  if (/* !payload?.itemId || */ !payload?.clientId || !payload?.sellerId) {
    throw new Error('itemId, clientId y sellerId son obligatorios');
  }

  const now = FieldValue.serverTimestamp();
  const ref = db.collection(COL).doc(); // autoId

  const data = {
    ...payload,
    status: payload.status ?? 'active', // active|completed|cancelled...
    createdAt: now,
    updatedAt: now,
  };

  await ref.set(data);
  const snap = await ref.get();
  return { id: ref.id, ...snap.data() };
}