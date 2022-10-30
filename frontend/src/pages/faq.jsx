import Layout from '../components/Layout';

// FAQ Page Component
export default function Faq() {
  return (
    <Layout>
      <div className='w-[80%] mx-auto  pb-8'>
        <h1 className='font-bold text-xl text-gray-800'>
          <mark className='bg-yellow-300'>Frequently Asked Questions</mark>
        </h1>

        <div className='mt-4 space-y-6'>
          {/* Question 1 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              How do I purchase a product?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <li>
                When you place an order with Pharmworld, our Pharmacy technician
                will receive it, generate an invoice with a bitcoin payment
                link, and send it to the email address you provided when you
                signed up.
              </li>

              <li>
                When you click on the invoice link, you will be taken to a page
                with a QR code that you can scan with your bitcoin wallet to pay
                for the orders you placed.
              </li>

              <li>
                When the payment is complete, we will be notified. Following
                that, we will deliver your order to the address you provided.
              </li>

              <li>
                <mark className='bg-yellow-200'>
                  We only accept bitcoin as payment.
                </mark>
              </li>
            </ul>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              How long does it take for my order to ship and arrive?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <li>
                Orders will be shipped the following business day after payment
                is received. Orders can also be shipped within 2-3 hours of
                receiving payment, depending on when payment is received.
              </li>

              <li>
                Shipping should take 2-3 days depending on where in the US you
                are located
              </li>
            </ul>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              What if my order does not arrive on time?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <span>
                Our orders are always delivered on time. We will track your
                order and provide updates as needed. If an order does not arrive
                at its destination, we will send another order only if the
                tracking indicates that it has not been delivered. If the
                tracking number indicates that the order has been delivered, we
                are not responsible for it.
              </span>
            </ul>
          </div>

          {/* Question 4 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              Are products listed fake or pressed?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <mark className='bg-yellow-200'>
                ALL PRODUCTS ARE 100% LEGIT & AUTHENTIC . NO PRODUCTS ARE
                PRESSED OR CONTAIN ANY INGREDIENTS OTHER THEN WHAT IS LISTED IN
                THE DESCRIPTIONS . PHARMWORLD CLIENTS HEALTH IS OUR NUMBER 1
                PRIORITY NOT MONEY!!!!!. ALL MEDICINES COME FROM LEGIT PHARMACYS
                AND MANUFACTURERS. ALL PRODUCTS WILL BE LIMITED AND THAT'S
                BECAUSE WE ONLY SELL LEGIT AUTHENTIC PRODUCTS. WHEN PRODUCTS ARE
                PRESSED OR FAKE THE SELLER WILL USUALLY HAVE UNLIMITED AMOUNTS
                AVAILABLE WHICH IS THE COMPLETE OPPOSITE OF PHARMWORLD. WE ARE
                FIRST COME FIRST SERVE. AFTER PRODUCTS ARE SOLD OUT CUSTOMERS
                MUST WAIT UNTIL THE NEXT MONTH WHEN WE RECEIVE OUR NEW LEGIT
                SCRIPTS. WE ARE HERE TO BUILD RELATIONSHIPS AND TRUST WITH OUR
                CLIENTS.
              </mark>
            </ul>
          </div>

          {/* Question 5 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              Do I pay for shipping ?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <span>
                Shipping is completely free. It's our way of showing customers
                how much we appreciate their business.
              </span>
            </ul>
          </div>

          {/* Question 6 */}
          <div>
            <h2 className='font-bold text-md text-gray-800'>
              If I order a certain quantity will I get a discount or wholesale
              price?
            </h2>

            <ul className='mt-2 font-normal text-gray-700 list-disc ml-8 space-y-3'>
              <span>
                The prices remain the same regardless of the quantity ordered.
                We are not wholesalers. We do occasionally offer special
                discounts to returning customers.
              </span>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
