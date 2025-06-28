import Marquee from "./Marquee";

function ClientsSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold">
            شراكات تحقق طموحاتنا المشتركة.
          </p>
          <h3 className="text-6xl font-bold text-sky-400 mt-6">
            شراكاتنا وعملاءنا
          </h3>
        </div>
        <div className="mt-10">
          <Marquee />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
