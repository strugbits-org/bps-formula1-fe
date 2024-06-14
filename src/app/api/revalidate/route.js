import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

const isAuthorized = (authHeader) => authHeader && authHeader === process.env.NEXT_PUBLIC_REVALIDATE_TOKEN;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const collectionId = searchParams.get('collectionId');
  const path = searchParams.get('path');
  const authHeader = req.headers.get('authorization');

  if (!isAuthorized(authHeader)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (!collectionId && !path) {
    return NextResponse.json({ message: 'Missing collectionId/path' }, { status: 400 });
  }

  try {
    if (collectionId) {
      revalidateTag(collectionId);
      return NextResponse.json({ message: `Revalidated Collection: ${collectionId}` });
    } else if (path) {
      revalidatePath(path);
      return NextResponse.json({ message: `Revalidated Path: ${path}` });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating', error: error.message }, { status: 500 });
  }
}
