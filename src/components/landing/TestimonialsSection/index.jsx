import MarqueeDemo from "./Marquee";

function TestimonialsSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center lg:text-start">
          <p className="text-2xl text-white font-bold">
            إبداعنا يُقاس برضا من تعاملوا معنا.
          </p>
          <h3 className="text-6xl font-bold text-sky-400 mt-6">
            آراء العملاء والشركاء
          </h3>
        </div>
        <div className="mt-10">
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
