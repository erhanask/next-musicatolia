import Head from 'next/head'
import LayoutWithSidebar from "../src/components/layouts";
import GuidePage from "../src/components/guide";


export default function Guide() {
    return (
        <>
            <Head>
                <title>Musicatolia - Guides</title>
            </Head>
            <LayoutWithSidebar page={<GuidePage/>}/>
        </>
    )
}
