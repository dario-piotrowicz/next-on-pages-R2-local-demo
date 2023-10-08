export const runtime = 'edge'

export async function GET() {
  const myR2 = process.env.MY_R2;

  const r2Objects = (await myR2.list()).objects;

  const empty = r2Objects.length === 0;

  if(!empty) {
    return new Response('Error: MY_R2 not empty', {status: 400});
  }

  try {
    for(const i of ['1', '2', '3']) {
          await myR2.put(`R2Obj_${i}`, `R2Obj_${i}_CONTENT`);
    }
  } catch {
    return new Response("Failed to populate MY_R2", { status: 500 });
  }

  return new Response("MY_R2 successfully populated (go back to '/' and refresh the page)");
}
