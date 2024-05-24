import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const faqs = [
  {
    question: 'What types of nail services do you offer?',
    answer: 'We offer a wide range of nail services, including manicures, pedicures, gel polish, acrylic nails, and nail art. Our skilled technicians can create any look you desire, from classic French tips to intricate designs.'
  },
  {
    question: 'How often should I get my nails done?',
    answer: 'The frequency of nail appointments depends on your personal preference and the type of nail service you choose. Generally, we recommend getting a manicure every 2-3 weeks and a pedicure every 4-6 weeks to maintain healthy, well-groomed nails.'
  },
  {
    question: 'What are the latest nail trends?',
    answer: 'Some of the hottest nail trends right now include bold, vibrant colors, minimalist designs, 3D nail art, and unique nail shapes like almond, coffin, and stiletto. We stay up-to-date on the latest trends and can help you achieve the perfect look.'
  },
  {
    question: 'How do I care for my nails at home?',
    answer: 'To keep your nails healthy and strong at home, we recommend using a gentle nail file, moisturizing your cuticles, and applying a nail strengthener or growth serum. Avoid using acetone-based nail polish removers, and be gentle when removing polish to prevent damage.'
  },
  {
    question: 'Do you offer any special services or packages?',
    answer: 'Yes, we offer a variety of special services and packages, including spa manicures and pedicures, gel polish removal, and nail art packages. We also have monthly memberships and discounts for regular clients. Feel free to ask our staff about our current offerings.'
  }
]

export default function Faqs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Get answers to your most common questions about nail care, trends, and our services.
          </p>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-400 ">
                      <span>{faq.question}</span>
                      <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`} />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-300 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-300 ease-in"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="rounded-b-md bg-gray-100 px-4 py-3 text-gray-500  dark:text-gray-400">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
