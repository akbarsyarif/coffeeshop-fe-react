import { React, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link, useNavigate } from "react-router-dom";
// import { axiosLogin } from "../https/auth";
// import { useUserContext } from "../contexts/userContext";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../redux/slices/user";

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const { loginThunk } = userAction;
    dispatch(loginThunk(body));
    // console.log(user.isFulfilled);
    if (user.isFulfilled) return navigate("/product");

    // const result = await axiosLogin(body);
    // console.log(result);
    // changeUser({
    //   isUserAvailable: true,
    //   userInfo: result.data.userInfo,
    // });
    // localStorage.setItem("token", result.data.token);
    // } catch (error) {
    //   console.log(error);
    //   if (error.response.data.msg === "email and password cannot empty") return setErrorMessage("Email Dan Password Harus Diisi");
    //   if (error.response.status === 404) return setErrorMessage("Email Belum Terdaftar");
    //   if (error.response.status === 400) return setErrorMessage("Email Atau Password Salah");
    //   if (error.response.status === 401) return setErrorMessage("Verify Email Anda Terlebih Dahulu");
    // }
  };

  return (
    <>
      <main className="flex">
        <section className="left hidden lg:block mr-[30px] xl:mr-[70px] bg-[url(./assets/images/login-page-bg.webp)] bg-cover w-[460px]">
          {/* <!-- <img className="" src="./assets/images/register-bg.webp" alt="register-page-bg" /> --> */}
        </section>
        <section className="right bg-[url(./assets/images/login-page-bg.webp)] bg-no-repeat bg-cover md:bg-[center_top_32%] lg:bg-none px-[15px] lg:px-[0px] pt-[30px] lg:pt-[19vh] pb-[14.5vh] xl:pb-[16vh] w-[100%] lg:w-[50%]">
          <section className="coffee-logo flex gap-[15px] items-center mb-[4vh]">
            <img src={getImageUrl("Vector", "svg")} alt="coffee-shop-logo" />
            <Link to="/">
              <h1 className="font-sacramento text-[#8e6447] text-[20px] cursor-pointer">Coffee Shop</h1>
            </Link>
          </section>
          <section className="register-form flex flex-col gap-[25px]">
            <h2 className="text-[#8e6447] text-[22px] font-semibold">Login</h2>
            <p className="text-white lg:text-[#4f5665]">Fill out the form correctly</p>
            <form onSubmit={submitHandler} className="flex flex-col gap-[25px]">
              <label className="text-white lg:text-color-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] bg-[url(./assets/images/mail-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
                type="text"
                id="email"
                placeholder="Enter Your Email"
              />
              <label className="text-white lg:text-color-2 font-semibold" htmlFor="password">
                Password
              </label>
              <span className="eye-slash relative before:absolute before:bg-[url(./assets/images/EyeSlash.svg)] before:bg-no-repeat before:w-[16px] before:h-[16px] before:top-[6px] before:-right-[-20px] before:z-[1]">
                <input
                  className="mt-[-12px] py-[14px] px-[13px] text-xs tracking-[.75px] rounded-[10px] border border-[#dedede] w-[100%] bg-[url(./assets/images/password-logo.svg)] bg-no-repeat bg-[center_left_13px] pl-[40px]"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </span>
              <div className="text-end">
                <Link to="/forgot-password">
                  <span className="login-link text-color-1 hover:text-color-1-hover">Lupa Password?</span>
                </Link>
              </div>
              {user.isRejected && user.error && <p className="error-message text-center font-bold text-[#ff0000] xl:mt-[-49px] ">{user.error.message}</p>}
              {/* <p className={"error-message text-center font-bold text-[#ff0000] xl:mt-[-49px] " + (errorMessage === "" ? "hidden" : "")}>{errorMessage}</p> */}
              <button type="submit" className={`login h-[50px] text-color-2 font-semibold bg-color-1 hover:bg-color-1-hover ${user.isPending ? "cursor-progress" : "cursor-pointer"}  rounded-[10px]`}>
                Login
              </button>
            </form>

            <p className="have-account text-center text-white lg:text-black">
              Not Have An Account?
              <Link to="/register">
                <span className="login-link text-color-1 hover:text-color-1-hover">Register</span>
              </Link>
            </p>
            <p className="border-1 relative text-white lg:text-[#aaa] text-xs tracking-[.06px] text-center before:absolute before:w-[40%] before:h-[8px] before:left-[0px] before:border-b before:border-[#dedede] after:absolute after:w-[40%] after:h-[8px] after:right-[0px] after:border-b after:border-[#dedede]">
              Or
            </p>
            <section className="other-login flex flex-col lg:flex-row gap-[14px]">
              <button
                type="button"
                className="facebook h-[64px] w-[100%] lg:w-[31vw] bg-white pl-[3%] text-[#4f5665] text-lg font-medium tracking-[.09px] rounded-[15px] shadow-md shadow-black/25 cursor-pointer hover:bg-[#e8e8e8] bg-[url(./assets/images/facebook-logo.svg)] bg-no-repeat bg-[center_left_26%]"
              >
                Facebook
              </button>
              <button
                type="button"
                className="google h-[64px] w-[100%] lg:w-[31vw] bg-white pl-[3%] text-[#4f5665] text-lg font-medium tracking-[.09px] rounded-[15px] shadow-md shadow-black/25 cursor-pointer hover:bg-[#e8e8e8] bg-[url(./assets/images/google-logo.svg)] bg-no-repeat bg-[center_left_26%]"
              >
                Google
              </button>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Login;
