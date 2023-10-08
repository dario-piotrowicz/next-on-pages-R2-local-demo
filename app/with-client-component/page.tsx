import Link from 'next/link';
import ClientCmp from './objectsCmp';

export const runtime = 'edge';

export default async function PageWithClientCmp() {

  const myR2 = process.env.MY_R2;

  const r2Objects = (await myR2.list()).objects;

  const empty = r2Objects.length === 0;

  return (
    <main>
      <h1>next-on-pages R2 local demo</h1>
      {
        empty ? <div>
          <p>
          The MY_R2 bucket is empty
          </p>
          <a href='/api/populate'>
            Populate it
          </a>
        </div> : 
        <ClientCmp r2Objects={r2Objects} />
      }
      {
        !empty && <Link className='with-client-component' href='/'>With only server components</Link>
      }
    </main>
  )
}
