import Image from "next/image";
import logo from "../../public/img/logo-vertical.png";
import background from "../../public/img/login-background.jpg";
import { FormLogin } from "@/components";

export default function Login() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="w-2/5 bg-scanify-white rounded-s-2xl flex flex-col justify-start items-center pt-20">
        <Image src={logo} alt="Logo Scanify" className="scale-75" />
        <h1 className="text-xl font-medium">
          A Monitoring App for Scanify App
        </h1>
        <FormLogin />
      </section>
    </>
  );
}
