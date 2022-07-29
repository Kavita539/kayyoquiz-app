import "./profile.css";
import { useEffect, useState } from "react";
import { Footer, Loading, Navbar } from "../../components";
import { getUserInfo} from "../../utils";
import { useAuth } from "../../hooks";

const Profile = () => {
const [userData, setUserData] = useState({ firstName: "N", lastName: "A", email: "NA" });
const [isLoading, setIsLoading] = useState(false);
const {
logout,
authState: { uid },
} = useAuth();

useEffect(() => {
(async () => {
try {
setIsLoading(true);
const userProfile = await getUserInfo(uid);
if (userProfile) {
setUserData({
firstName: userProfile?.firstName,
lastName: userProfile?.lastName,
email: userProfile?.email,
});
}
setIsLoading(false);
} catch (err) {
console.log(err);
}
})();
}, [uid]);


return (
<div className="profile-wrapper">
    <Navbar />
    <main className="profile-container flex-column">
        <h2 className="text-center">Logout Page</h2>

        {isLoading ? (
        <Loading />
        ) : (
        <div className="profile">
            <div className="profile-info flex-total-center flex-column">
                <div className="avatar avatar-lg cursor-pointer flex-total-center">
                <img className="responsive-img round-img profile-img" src="https://avatars.dicebear.com/api/avataaars/qwerasxqergdsacssfghvsd.svg" alt="avatar-lg" />
                </div>
                <div className="profile-cta">
                    <button className="btn btn-primary block-btn" onClick={()=> logout()}>
                        Log out
                    </button>
                </div>
            </div>
        </div> 
        )}
    </main>

    <Footer />
</div>
);
};

export { Profile };