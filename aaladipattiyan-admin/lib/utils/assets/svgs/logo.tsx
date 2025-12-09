import Image from "next/image";

export function AppLogo() {
  return (
    <div className="flex items-center justify-center relative p-2">
     <Image src={"/logo-main.png"} width={200} height={200} alt="logo"/>
    </div>
  );
}
