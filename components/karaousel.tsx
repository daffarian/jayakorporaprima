import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { productAndService } from '@/lib/data-object';
import { Separator } from '@/components/ui/separator';

export default function karaousel(){
  return(
        <div className="flex justify-center mt-5 lg:mt-0 lg:py-10 md:max-w-[25rem] lg:max-w-[48rem]">
          <Carousel
            className="w-full flex items-center"
            plugins={[
              Autoplay({
                delay: 4000,
                loop: true
              })
            ]}
          >
            <CarouselContent className="p-4">
              {productAndService.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="lg:basis-1/3 sm:1/2 pl-4"
                >
                  <div
                    className={`p-1 border-primary border-[1px] px-5 rounded-sm shadow-md lg:aspect-square ${item.color}`}
                  >
                    <div className={``}>
                      <div className="flex flex-col items-center justify-center p-2">
                        <h3 className="text-neutral-800 text-center text-lg font-bold">
                          {item.title}
                        </h3>
                        <Separator className="my-3 bg-zinc-600" />
                        <p className="text-neutral-800">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </div>
  )
}