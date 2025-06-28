import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Hazem",
    email: "zozzyhazem@gmail.com",
    body: "التميز والإبداع في العمل\nالسرعه في التنفيذ بجانب الأفكار المبتكره\nالأمانة والدقه في المواعيد",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_80,w_32,h_32/beingmomen/testimonials/gcldkwazsu06yzszz1nu.jpg",
  },
  {
    name: "Omar",
    email: "omr.belgasem@gmail.com",
    body: "completed the project with excellence. Their attention to detail and innovative solutions exceeded expectations. Great job!",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_80,w_32,h_32/beingmomen/testimonials/si5dt6nfvybde5esm0cw.jpg",
  },
  {
    name: "محمد امبارك",
    email: "mohamed.m.embark@gmail.com",
    body: "ما شاء الله علي خدمة المهندس عبد المؤمن واحترافيته فالشغل ليه مني كل الاحترام والتقدير ",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_80,w_32,h_32/beingmomen/testimonials/cpbr8u6pprmksllmdco3.png",
  },
  {
    name: "م. ايمن يسري",
    email: "aymansamaan120@gmail.com",
    body: "م.عبد المؤمن شخص محترم شغله احترافي سريع دقة وأمانة فى تنفيذ المشاريع شريك نجاح فى كل مشاريعنا بالتوفيق دائما. ",
    img: "https://res.cloudinary.com/dyqfclwdk/image/upload/f_auto,q_80,w_32,h_32/beingmomen/testimonials/yieatxzdoq96gwmerove.WEBP",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, email, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 text-white",
        // light styles
        "border-gray-950/[.1] bg-gray-800 hover:bg-gray-700",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{email}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-900"></div>
    </div>
  );
}

export default MarqueeDemo;
