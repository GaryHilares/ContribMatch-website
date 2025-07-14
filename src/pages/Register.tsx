import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import octocat from "../assets/octocat.png";

const Register = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <section className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <h1 className="font-bold text-7xl p-8">
                        Sign up
                    </h1>
                    <h2 className="text-3xl mx-5">
                        If you have an account you can
                    </h2>
                    <Link 
                        to="/signin"
                        className="text-3xl text-bold text-[#3B90CD] cursor-pointer mx-5"
                    >
                        Sign In here!
                    </Link>
                    <label className="text-3xl mt-4 mx-5">
                        Full Name
                    </label>
                    <input type="text" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <label className="text-3xl mx-5">
                        Password
                    </label>
                    <input type="password" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <label className="text-3xl mx-5">
                        Confirm Password
                    </label>
                    <input type="password" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <button className="self-end rounded border border-black text-base cursor-pointer bg-[#cccccc] p-2 m-4 w-1/5">
                        Sign In
                    </button>
                </div>
                <div className="relative flex w-1/2 h-screen">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 bg-[#C3E5FE]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img src = {octocat} alt = "Octocat"></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;