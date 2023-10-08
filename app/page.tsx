import Link from 'next/link';

export const runtime = 'edge';

export default async function Home() {

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
        </div> : <div>
          <h2>The MY_R2 bucket contains the following objects:</h2>
          <ul>
            <li className='home-li bold'>
              <span>key</span>
              <span>size</span>
              <span>uploaded</span>
            </li>
            {
              r2Objects.map(obj => <li key={obj.key} className='home-li'>
                <span>
                {obj.key}
                </span>
                <span>
                  {obj.size}
                </span>
                <span>
                {obj.uploaded.toLocaleDateString()}
                </span>
              </li>)
            }
          </ul>
        </div>
      }
      {
        !empty && <Link className='with-client-component' href='/with-client-component'>With client component</Link>
      }
    </main>
  )
}
