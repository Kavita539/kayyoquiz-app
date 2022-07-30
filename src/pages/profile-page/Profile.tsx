import "./profile.css";
import { Footer, Navbar } from "../../components";

const Profile = () => {



return (
<div className="profile-wrapper">
    <Navbar />
    <main className="profile-container flex-column">
        <h2 className="text-center">Logout Page</h2>

    </main>

    <Footer />
</div>
);
};

export { Profile };