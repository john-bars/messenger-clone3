import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-gray-100 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={"/images/logo.png"}
          alt="Messenger logo"
          height={48}
          width={48}
          className="w-auto mx-auto"
        />
        <h2 className="text-center mt-6 text-2xl fornt-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
