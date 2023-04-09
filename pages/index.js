import Head from 'next/head'
import LayoutWithSidebar from "../src/components/layouts";
import HomePage from "../src/components/home";


export default function Home() {
    return (
        <>
            <Head>
                <title>Musicatolia - Home</title>
            </Head>
            <LayoutWithSidebar page={<HomePage/>}/>
        </>
    )
}
