import Head from 'next/head'
import LayoutWithSidebar from "../../src/components/layouts";
import {GuidesPage} from "../../src/components/settings";


export default function Guide() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <LayoutWithSidebar page={<GuidesPage/>}/>
        </>
    )
}