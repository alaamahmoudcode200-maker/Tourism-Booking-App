export default function CustomerServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* CUSTOMER SERVICE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-orange-600">Customer Service</h1>
        <p className="text-gray-500 mt-1">How Can We Help? We’re Available 24 Hours A Day.</p>
      </div>

      {/* CONTACT BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Call Us */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex items-start space-x-4 shadow-sm">
          <div className="text-orange-500 text-3xl">📞</div>
          <div>
            <h3 className="font-semibold text-orange-600">Call Us</h3>
            <p className="text-gray-600 mt-1">005684434464643</p>
          </div>
        </div>

        {/* Send a Message */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex items-start space-x-4 shadow-sm">
          <div className="text-orange-500 text-3xl">📧</div>
          <div>
            <h3 className="font-semibold text-orange-600">Send Us A Message</h3>
            <p className="text-gray-600 mt-1">Example@gmail.com</p>
          </div>
        </div>
      </div>

      {/* HELP CENTER SECTION */}
      <h2 className="text-xl font-bold text-orange-600 mb-5">Our Help Center</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* TEXT CONTENT */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-orange-600 text-lg">Tailor-made Customer Service</h3>
            <p className="text-gray-600 text-sm">
              Tell Us What’s Happening And We’ll Guide You Through What To Do Next.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-600 text-lg">Contact us anytime</h3>
            <p className="text-gray-600 text-sm">
              Send Us a Message Or Pick Up The Phone – Our Agents Are Always Available
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-600 text-lg">All the important things in one place</h3>
            <p className="text-gray-600 text-sm">
              Call Or Message The Property, And See All The Essential Information About Your Stay.
            </p>
          </div>
        </div>

        {/* IMAGE (replace with your asset) */}
        <div className="flex justify-center">
          <img
            src="/help-center-illustration.png"
            alt="Help"
            className="max-w-[350px] w-full"
          />
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-bold text-orange-600 mt-16 mb-4">Frequently Asked Questions</h2>

      <FAQ />
    </div>
  );
}

/* FAQ COMPONENT */
const faqData = [
  { q: "Can I Cancel My Booking?", a: "" },
  { q: "If I Need To Cancel My Booking, Will I Pay A Fee?", a: "" },
  { q: "Who's Going To Charge My Credit Card And When?", a: "" },
  { q: "Can I Make Changes To My Booking (I.E. Change Dates)?", a: "" },
  { 
    q: "I Can't Find My Confirmation Email. What Should I Do?", 
    a: "If you have a free cancellation booking, you won't pay a cancellation fee. If your booking is non-refundable, you may incur a cancellation fee."
  },
  { q: "Can I Make A Reservation Without A Credit Card?", a: "" },
  { q: "Why Was I Charged?", a: "" },
  { q: "How Do I Find Out If Properties Allow Pets?", a: "" },
];

function FAQ() {
  return (
    <div className="space-y-2">
      {faqData.map((item, i) => (
        <details
          key={i}
          className="border rounded-lg p-4 cursor-pointer text-sm"
        >
          <summary className="font-semibold text-orange-600 cursor-pointer flex justify-between items-center">
            {item.q}
          </summary>

          {item.a && (
            <p className="text-gray-600 mt-3 text-sm">{item.a}</p>
          )}
        </details>
      ))}
    </div>
  );
}
