import Head from 'next/head'
import LayoutWithSidebar from "../../src/components/layouts";
import {SettingPage} from "../../src/components/settings";


export default function Settings() {
    return (
        <>
            <Head>
                <title>Musicatolia - Settings</title>
            </Head>
            <LayoutWithSidebar page={<SettingPage/>}/>
        </>
    )
}
