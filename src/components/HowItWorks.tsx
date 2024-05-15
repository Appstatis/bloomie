const Steps = () => {
  return (
    <ul className="steps steps-vertical">
      <li className="step step-primary">Select Your Style</li>
      <li className="step step-primary">Set Your Schedule</li>
      <li className="step step-primary">Enjoy</li>
    </ul>
  );
};

export const HowItWorks = () => {
  return (
    <section className="justify-center flex items-center">
      <h2 className="max-w-sm text-4xl font-bold">
        Get a Bouquet In Three Simple Steps
      </h2>

      <Steps />
    </section>
  );
};
