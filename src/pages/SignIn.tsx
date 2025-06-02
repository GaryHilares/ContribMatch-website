import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";

const SignIn = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <section className="flex flex-row">
                <div className="flex flex-col">
                    <h1 className="font-bold text-7xl p-8">
                        Sign in to ContribMatch
                    </h1>
                    <h2 className="text-5xl mx-5">
                        If you don't have an account you can
                    </h2>
                    <Link 
                        to="/register"
                        className="text-5xl text-bold text-[#70b3fe] cursor-pointer mx-5"
                    >
                        Register Here!
                    </Link>
                    <label className="text-3xl mt-4 mx-5">
                        Email
                    </label>
                    <input type="text" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <label className="text-3xl mx-5">
                        Password
                    </label>
                    <input type="password" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                </div>
            </section>
        </div>
    );
};

export default SignIn;