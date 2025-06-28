import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "SpiderTV",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/kmjlnjntlcqy1bqhekb4.png",
  },
  {
    name: "Max OTT",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/armsg41juqluibx003hf.svg",
  },
  {
    name: "Q8 Music",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/tjwstowfbzzp8z8osn3e.svg",
  },
  {
    name: "Golden Tiger academy",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/knyl7hs3ny1vpz5qebbc.svg",
  },
  {
    name: "Automobile EGY",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/yah7ammgfnk5bp9chjzh.svg",
  },
  {
    name: "Acon Creative",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/hnyqiyetlingybknpblx.svg",
  },
  {
    name: "Stream Max",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/nyehtoxkyeuglyj6pprn.svg",
  },
  {
    name: "Tiger Gold",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/tbxjvymjvgeogjytyxow.svg",
  },
  {
    name: "Crystal",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/le5idxg7tvrg44ti5wj1.png",
  },
  {
    name: "QS Live",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/ygf61a5im66czrhmncf1.svg",
  },
  {
    name: "Business Care",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/beingmomen/clients/l07l6yrhhrywjnaocahr.webp",
  },
];

const ReviewCard = ({ img, name }) => {
  return (
    <figure className={cn("relative w-64 flex justify-center")}>
      <div>
        <img
          className="w-32 aspect-square object-contain"
          alt={name}
          src={img}
        />
      </div>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-900"></div>
    </div>
  );
}

export default MarqueeDemo;
