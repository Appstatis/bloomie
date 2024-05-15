const Header = () => {
  return (
    <header className="max-w-3xl text-center space-y-2 mx-auto">
      <h2 className="text-4xl font-bold">
        Crafted with Care, Delivered with Love
      </h2>
      <p>
        Each Bloomie bouquet is a masterpiece, carefully curated to bring you
        vibrant colors and exquisite aromas that breathe life into any room.
        Sourced from the finest growers, we promise freshness and sustainability
        in every bloom.
      </p>
    </header>
  );
};

// todo - optimize with <Image />
const Bouquet = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img className="w-72 rounded-xl" src={imageUrl} alt="" />
    </div>
  );
};

const BouquetList = () => {
  return (
    <div className="flex justify-center gap-8">
      <Bouquet imageUrl="https://www.nativepoppy.com/cdn/shop/products/classic-bouquet_1200x1200.jpg?v=1618167844" />
      <Bouquet imageUrl="https://jjsflowershop.com/cdn/shop/products/jjs-grandwrapbright-26-web.jpg?v=1665458471" />
      <Bouquet imageUrl="https://splendidarrangements.com/cdn/shop/products/dsc_7251-2_1_c90b6ecc-c23a-4154-8eef-28eff6c48771_5000x.jpg?v=1680290907" />
    </div>
  );
};

export const About = () => {
  return (
    <section className="space-y-5">
      <Header />
      <BouquetList />
    </section>
  );
};
