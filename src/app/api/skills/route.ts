import { type NextRequest } from 'next/server';
import { ImageResponse } from 'next/og'
import { getQueryParams } from '@/lib/nav'
import { url } from 'inspector';

export async function POST(req: NextRequest) {
    return Response.json({
        django: 'Python web framework for perfectionists with deadlines',
        flask: 'Micro web framework written in Python',
        nextjs: 'React framework for polished web applications',
        mongodb: 'Manage document-oriented information, store or retrieve information',
        mysql: 'Widely used for relational database management',
        typescript: 'Javascript superset',
        adobeillustraitor: 'Adobe Software for making SVG Graphics',
        vscode: 'Jack of all trades Integrated Development Environment',
      })
}
