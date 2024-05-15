type Subscription = {
  title: string;
  description: string;
  price: number;
  benefits: string[];
};

const subscriptions: Subscription[] = [
  {
    title: "Petal Essentials",
    description:
      "Perfect for those who appreciate the subtle beauty of fresh flowers.",
    price: 29.99,
    benefits: ["Free delivery", "10% discount on additional purchases"],
  },
  {
    title: "Bottom Plus",
    description:
      "Ideal for flower lovers who want to enjoy fresh blooms more frequently.",
    price: 49.99,
    benefits: [
      "Free delivery",
      "10% discount on extra bouquets",
      "Early access to new collections",
    ],
  },
  {
    title: "Floral Luxe",
    description:
      "A premium plan for those who wish to indulge in the luxury of having fresh, luxurious bouquets every week.",
    price: 99.99,
    benefits: [
      "Complimentary vase with the first delivery",
      "Free delivery",
      "20% discount on additional purchases",
      "Exclusive access to limited-edition collections",
    ],
  },
];

const SubscriptionItem = ({
  title,
  description,
  price,
  benefits,
}: Subscription) => {
  return (
    <div className="flex justify-between bg-base-100 w-96 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
        <ul className="list-disc">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

const SubscriptionList = () => {
  return (
    <div className="max-w-5xl mx-auto flex gap-7 justify-center">
      {subscriptions.map((subscription) => (
        <SubscriptionItem key={subscription.title} {...subscription} />
      ))}
    </div>
  );
};

export const Subscription = () => {
  return (
    <section className="space-y-5">
      <header className="max-w-3xl text-center space-y-2 mx-auto">
        <h2 className="text-4xl font-bold">Endless Elegance, On Your Terms</h2>

        <p>
          Never miss an occasion or a chance to brighten your day. Choose the
          subscription that fits your lifestyle and let us bring a splash of
          beauty to your doorstep regularly. No hassle, just happiness.
        </p>
      </header>

      <SubscriptionList />
    </section>
  );
};
