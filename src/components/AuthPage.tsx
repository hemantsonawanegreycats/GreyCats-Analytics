import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Screenshot from "../assets/images/Screenshot.png";

export default function AuthPage() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    navigate(isLogin ? "/signup" : "/login");
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden py-4">
      {/* ✅ Left Section — Auth Form */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 px-6 md:px-16 py-10">
        {/* Logo */}
        <div className="absolute top-0 left-0 p-6">
          <div className="flex items-center space-x-2 text-foreground">
            <span className="text-xl font-semibold">⌘</span>
            <span className="font-medium">GreyCats</span>
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {isLogin ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isLogin
                ? "Enter your email below to log in"
                : "Enter your details below to create your account"}
            </p>
          </div>

          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="px-4 py-6 mt-2 rounded-[0.4rem]"
              />
            </div>

            {/* Signup only — Name + Password */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="px-4 py-6 mt-2 rounded-[0.4rem]"
                />
              </div>
            )}

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="px-4 py-6 mt-2 rounded-[0.4rem]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="ghost"
              className="w-full px-4 py-6 rounded-[0.4rem] font-medium
                         !text-white bg-gradient-to-bl from-black via-zinc-900 to-zinc-400
                         transition-[background,filter] duration-700 ease-in-out
                         hover:bg-black hover:from-black hover:via-black hover:to-black
                         hover:!text-white active:!text-white
                         hover:brightness-110 active:brightness-95
                         focus-visible:ring-0 focus-visible:ring-offset-0
                         border-0 shadow-none
                         before:content-none after:content-none
                         data-[state=pressed]:bg-black data-[state=pressed]:!text-white"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isLogin ? "Sign in with Email" : "Sign up with Email"}
            </Button>
          </form>

          {/* Separator */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google */}
          <Button
            variant="outline"
            className="w-full px-4 py-6 rounded-[0.4rem] flex items-center justify-center gap-2"
          >
            <FaGoogle className="h-4 w-4" />
            Google
          </Button>

          {/* Terms or Toggle */}
          <p className="px-4 text-center text-xs text-muted-foreground">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="underline underline-offset-2 text-foreground hover:text-primary"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="underline underline-offset-2 text-foreground hover:text-primary"
                >
                  Log in
                </button>
              </>
            )}
          </p>

          {/* Policies */}
         
            <p className="px-4 text-center text-xs text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link to="#" className="underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
         
        </div>
      </div>

      {/* ✅ Right Section — Image + Quote */}
      <div className="relative flex flex-col justify-between w-full md:w-1/2 p-10 rounded-l-2xl text-muted-foreground bg-gradient-to-bl from-black via-zinc-900 to-zinc-700">
        <img
          ref={imgRef}
          src={Screenshot}
          alt="Preview Screenshot"
          className="absolute top-1/2 right-[-15rem] w-full -translate-y-1/2 bg-white shadow-2xl rounded-2xl p-4 z-0"
        />

        <blockquote className="relative mt-auto text-sm md:text-base italic text-accent z-10">
          “This library has saved me countless hours of work and helped me
          deliver stunning designs to my clients faster than ever before.”
          <br />
          <span className="mt-2 block not-italic text-muted-foreground font-medium">
            – Sofia Davis
          </span>
        </blockquote>
      </div>
    </div>
  );
}
