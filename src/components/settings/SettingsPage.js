import {useAuthContext} from "../../context/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect} from "react";


const SettingsPage = () => {

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        // if (user == null) router.push("/")
    }, [user])


    return user == null ? 'settings page visible for logged in users.' : 'yihuuu';
}

export default SettingsPage;