import { LockClosedIcon, FingerPrintIcon, UserGroupIcon, CurrencyEuroIcon, ClockIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Manage parent-ward relationship',
    description:
      'Keep the parents in the loop easily with our integrated and fine-grained notification system.',
    icon: UserGroupIcon,
  },
  {
    name: 'Receive and track payments',
    description:
      'You set the fee, and we handle the book keeping.',
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Smart Attendance',
    description:
      "Track student's attendance and notify parents when their ward is absent or late to school. Present this data in end of term results",
    icon: LockClosedIcon,
  },
  {
    name: 'Computer Based Test',
    description:
      'Create and administer tests to students. Present results after the test, set the maximum attempts and time limit for the test.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div id='features' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Scale faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your school
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
		  Don&apos;t learn from experience, learn from the best.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
