import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import octocat from "../assets/octocat.png";

const SignIn = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <section className="flex flex-row">
                <div className="flex flex-col w-1/2">
                    <h1 className="font-bold text-7xl p-8">
                        Sign in to ContribMatch
                    </h1>
                    <h2 className="text-3xl mx-5">
                        If you don't have an account you can
                    </h2>
                    <Link 
                        to="/register"
                        className="text-3xl text-bold text-[#3B90CD] cursor-pointer mx-5"
                    >
                        Register Here!
                    </Link>
                    <label className="text-3xl mt-4 mx-5">
                        Email
                    </label>
                    <input type="text" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <div className="flex justify-between">
                        <label className="text-3xl mx-5">
                            Password
                        </label>
                        <button className="text-sm cursor-pointer pt-3 mx-4">
                            Forgot Password?
                        </button>
                    </div>
                    <input type="password" className="rounded-xl bg-[#cccccc] m-4 p-2 h-10"/>
                    <button className="self-end rounded border border-black text-base cursor-pointer bg-[#cccccc] p-2 m-4 w-1/5">
                        Sign In
                    </button>
                </div>
                <div className="relative flex w-1/2 h-screen">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 bg-[#E5BFBF]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img src = {octocat} alt = "Octocat"></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;