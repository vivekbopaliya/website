const Checkbox = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 22.16V24C43.9975 28.3128 42.601 32.5093 40.0187 35.9636C37.4363 39.4179 33.8066 41.9449 29.6707 43.1678C25.5349 44.3906 21.1145 44.2438 17.0689 42.7491C13.0234 41.2545 9.56931 38.4922 7.22192 34.8741C4.87453 31.256 3.75958 26.9761 4.04335 22.6726C4.32712 18.3691 5.99441 14.2726 8.79656 10.9941C11.5987 7.71561 15.3856 5.43074 19.5924 4.48026C23.7992 3.52979 28.2005 3.96465 32.14 5.71997M44 7.99997L24 28.02L18 22.02"
      stroke="#F5F5F5"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TextInfoSection() {
  const data = [
    "Integrates with your Accounting Software & Bank",
    "Invoice Reminders & Payment Links are sent over multiple channels which includes white labeled whatsapp",
    "Automates your invoice reconciliation process end to end",
    "Dynamic Discounting and Late Fees Application",
    "Detailed Analytics on your Accounts Receivables",
  ];

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 w-full sm:w-5/12 text-start px-0 sm:px-0">
      {data.map((item, index) => (
        <div key={index} className="flex text-start align-middle items-center gap-4">
          <div>
            <Checkbox />
          </div>
          <p className="font-medium text-sm sm:text-lg tracking-normal">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}