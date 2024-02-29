import { useForm, SubmitHandler } from "react-hook-form";
import { Inter } from "next/font/google";
import React from "react";
import axios from "axios";

interface IFormInput {
  BuyerAddress: string;
  FromData: number;
  TargetAmount: number;
  tokenA: string;
  tokenB: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/form-data`,
        data
      );
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2"
          onSubmit={handleSubmit(onSubmit)}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Buyer Address:
              </label>
              <input
                {...register("BuyerAddress", {
                  required: "Buyer Address is required",
                  minLength: {
                    value: 42,
                    message: "Minimum length is 42 characters",
                  },
                })}
                type="text"
                id="first_name"
                className={`${
                  errors.BuyerAddress ? "border-red-500" : "border-gray-300"
                }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter your Buyer Address"
                required
              />
              {errors.BuyerAddress && (
                <p className="text-red-500 text-xs italic">
                  {errors.BuyerAddress.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                From Data:
              </label>
              <input
                {...register("FromData", {
                  required: "From Data is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "From Data must be a valid number",
                  },
                })}
                type="text"
                id="FromData:"
                className={`${
                  errors.FromData ? "border-red-500" : "border-gray-300"
                }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter your Buyer Address"
                required
              />
              {errors.FromData && (
                <p className="text-red-500 text-xs italic">
                  {errors.FromData.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Target Amount:
              </label>
              <input
                {...register("TargetAmount", {
                  required: "Target Amount is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Target Amount must be a valid number",
                  },
                })}
                type="text"
                id="first_name"
                className={`${
                  errors.TargetAmount ? "border-red-500" : "border-gray-300"
                }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter your Buyer Address"
                required
              />
              {errors.TargetAmount && (
                <p className="text-red-500 text-xs italic">
                  {errors.TargetAmount.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                tokenA:
              </label>
              <input
                {...register("tokenA", {
                  required: "tokenA is required",
                  minLength: {
                    value: 2,
                    message: "Minimum length is 2 characters",
                  },
                })}
                type="text"
                id="first_name"
                className={`${
                  errors.tokenA ? "border-red-500" : "border-gray-300"
                }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter yourtokenA"
                required
              />
              {errors.tokenA && (
                <p className="text-red-500 text-xs italic">
                  {errors.tokenA.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                tokenB:
              </label>
              <input
                {...register("tokenB", {
                  required: "tokenB is required",
                  minLength: {
                    value: 2,
                    message: "Minimum length is 2 characters",
                  },
                })}
                type="text"
                className={`${
                  errors.tokenB ? "border-red-500" : "border-gray-300"
                }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Enter your tokenB"
                required
              />
              {errors.tokenB && (
                <p className="text-red-500 text-xs italic">
                  {errors.tokenB.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2 -ms-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="bitcoin"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
              ></path>
            </svg>
            Pay with Bitcoin
          </button>
        </form>
      </div>
    </>
  );
}
