import Head from 'next/head'
import LayoutWithSidebar from "../../src/components/layouts";
import {GuidesPage} from "../../src/components/settings";


export default function Guide() {
    return (
        <>
            <Head>
                <title>Musicatolia - Settings</title>
            </Head>
            <LayoutWithSidebar page={<GuidesPage/>}/>
        </>
    )
}
