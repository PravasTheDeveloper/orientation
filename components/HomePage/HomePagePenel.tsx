import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

      <h1 className="text-center mt-16 mb-16 text-3xl text-black font-bold">
        Spacial Guests
      </h1>

      <div className="w-full h-auto flex flex-col items-center md:items-stretch md:flex-row justify-center mt-5">
        <Card className="w-[350px]">
          <CardContent className="w-full aspect-square">
            <Image src={`/Shahriar_Manzoor.jpg`} width={8000} height={2918} alt="main_logo" className="w-auto h-full" />
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-lg font-semibold">
              MR. SHAHRIAR MANZOOR
            </p>
            <p className="text-sm">
              World Final ACM
            </p>
            <p className="text-sm">
              ICPC Judging Director
            </p>
          </CardFooter>
        </Card>

        <Card className="w-[350px] md:mx-14 my-10 md:my-0">
          <CardContent className="w-full aspect-square">
            <Image src={`/dr_kaykobad.png`} width={8000} height={2918} alt="main_logo" className="w-auto h-full" />
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-lg font-semibold">
              DR. MOHAMMAD KAYKOBAD
            </p>
            <p className="text-sm">
              Professor, BUET
            </p>
            <p className="text-sm">
              ICPC Judging Director
            </p>
          </CardFooter>
        </Card>

        <Card className="w-[350px]">
          <CardContent className="w-full aspect-square">
            <Image src={`/Farzana-Mam.jpg`} width={8000} height={2918} alt="main_logo" className="w-auto h-full" />
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-lg font-semibold">
              PROF. DR. FARJANA ALAM
            </p>
            <p className="capitalize text-sm">
              Associate Dean
            </p>
            <p className="capitalize text-sm text-center">
              Faculty of business administration & Director
            </p>
            <p className="capitalize text-sm">
              Faculty Development & Evaluation.
            </p>
          </CardFooter>
        </Card>
      </div>


      <h1 className="text-center mt-16 mb-16 text-3xl text-black font-bold">
        Batchs
      </h1>

      <div className="w-full h-auto flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[1200px] bg-red-400"
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>


      <h1 className="text-center mt-16 mb-16 text-3xl text-black font-bold">
        Band
      </h1>

      <div className="w-full h-auto">
              <Image src={`/bandimage.png`} width={1920} height={700} alt="main_logo" className="w-auto h-full" />
            </div>
    </>
  )
}
