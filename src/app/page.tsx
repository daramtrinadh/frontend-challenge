"use client";
import React from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";


const SignupFormDemo=() =>{
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] =React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] =React.useState("");
  const [confirmPassword, setConfirmPassword] =React.useState("");
  const [successMessage,setSuccessMessage]=React.useState(false)
  const [errorMessage,setErrorMessage]=React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password!==confirmPassword){
      setErrorMessage(true);
      return;
    }

    console.log("Form submitted");
    setErrorMessage(false)
    setSuccessMessage(true)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
      
  };
  return (
    <div className="max-w-md w-full m-5 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to CultureLinkr
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Culturlink 
      </p>
      
      {successMessage && (
        <div className="my-4 p-4 text-green-700 bg-green-100 rounded-md">
           Successfully Completed SignUp
        </div>
      )}
      {errorMessage && (
        <div className="my-4 p-4 text-red-700 bg-red-100 rounded-md">
          Please Recheck The Passwords You Entered
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" 
                   placeholder="Jon" 
                   type="text" value={firstName} 
                   onChange={(e)=>setFirstName(e.target.value)} 
                   required
              />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" 
                   placeholder="Doe" 
                   type="text" value={lastName} 
                   onChange={(e)=>setLastName(e.target.value)} 
                   required
              />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" 
                 placeholder="culturlink@support.com" 
                 type="email" value={email} 
                 onChange={(e)=>setEmail(e.target.value)} 
                 required
            />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" 
                 placeholder="••••••••" 
                 type="password" value={password} 
                 onChange={(e)=>setPassword(e.target.value)} 
                 required
            />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="culturlinkpassword">Re enter password</Label>
          <Input
            id="culturlinkpassword"
            placeholder="••••••••"
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default SignupFormDemo