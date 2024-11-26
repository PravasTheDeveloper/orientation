import Image from "next/image";

export default function HomePagePenel() {

  return (
    <>
      <header className="text-gray-600 bg-gradient-custom body-font border-b">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl h-[40px]">
              <Image src={`/mainlogo.png`} width={560} height={150} alt="main_logo" className="w-auto h-full" />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
            <a className="mr-5 hover:text-blue-300 cursor-pointer duration-200">Guests</a>
            <a className="mr-5 hover:text-blue-300 cursor-pointer duration-200">Batchs</a>
            <a className="mr-5 hover:text-blue-300 cursor-pointer duration-200">Band</a>
          </nav>
        </div>
      </header>

      <div className="w-full h-auto">
        <Image src={`/banner.png`} width={8000} height={2918} alt="main_logo" className="w-auto h-full" />
      </div>
    </>
  )
}
