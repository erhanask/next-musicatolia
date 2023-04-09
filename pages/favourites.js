import Head from 'next/head'
import LayoutWithSidebar from "../src/components/layouts";
import FavouritesPage from "../src/components/favourites";


export default function Favourites() {
    return (
        <>
            <Head>
                <title>Musicatolia - My Favourites</title>
            </Head>
            <LayoutWithSidebar page={<FavouritesPage/>}/>
        </>
    )
}
