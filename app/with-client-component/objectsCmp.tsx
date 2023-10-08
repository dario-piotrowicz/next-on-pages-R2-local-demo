'use client';

export const runtime = 'edge';

export default async function ClientCmp({ r2Objects }: { r2Objects: R2Object[] }) {
  return (
    <div>
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
  )
}
