export async function POST() {
    return Response.json({
        django: 'Python distribution',
        flask: 'Python distribution',
        nextjs: 'NodeJs distribution',
        reactjs: 'NodeJs distribution',
        typescript: 'Javascript superset',
        adobeillustraitor: 'Adobe Software for making SVG Graphics',
        vscode: 'Jack of all trades Integrated Development Environment'
      })
}