import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";
import RootLayout from "@/component/RootLayout/RootLayout";

const Login = () => {
  return (
    <div style={{
      backgroundImage: "url('../assets/image/banner/login.webp')"
    }} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <button onClick={() => signIn("google")} className='btn w-full text-5xl'>< FcGoogle /></button>

            </div>
            <div className="form-control">
              <button onClick={() => signIn("github", {
                callbackUrl: "http://localhost:3000/"
              })} className='w-full btn text-5xl'><BsGithub /></button>

            </div>
            <h1 className="text-center text-3xl py-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login.getLayout = function getLayout(page) {
  return <RootLayout  >{page}
  </RootLayout>
}