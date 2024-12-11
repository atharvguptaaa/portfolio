import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'Projects', href: '#', current: false, to:"projects",offset:-95 },
  { name: 'Github', href: 'https://github.com/atharvguptaaa', current: false },
  { name: 'About Me', href: '#', current: false,to:'aboutMe',offset:-70 },
  { name: 'Contact', href: '#', current: false, to:"contact",offset:-95},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div>
 <Disclosure as="nav" className="bg-black border-b-2 border-green-600">
  <div className="mx-auto px-2 sm:px-6 lg:px-8 flex h-12 sm:h-20 items-center justify-between">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
        </DisclosureButton>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-2 sm:block">
          <div className="flex space-x-6 sm:space-x-8">
            {navigation.map((item) =>
              item.to ? (
                <Link
                  to={item.to}
                  offset={item.offset}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-green-950 hover:text-green-400',
                    'px-2 py-1 sm:px-3 sm:py-2 text-lg sm:text-xl font-medium cursor-pointer'
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-green-950 hover:text-green-400',
                    'px-2 py-1 sm:px-3 sm:py-2 text-lg sm:text-xl font-medium'
                  )}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>

  <DisclosurePanel className="sm:hidden">
    <div className="space-y-1 px-4 pb-3 pt-2">
      {navigation.map((item) =>
        item.to ? (
          <Link
            key={item.name}
            to={item.to}
            offset={item.offset}
            smooth={true}
            duration={500}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-green-950 hover:text-green-400',
              'block px-3 py-2 text-lg font-medium cursor-pointer'
            )}
          >
            {item.name}
          </Link>
        ) : (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-green-950 hover:text-green-400',
              'block px-3 py-2 text-lg font-medium'
            )}
          >
            {item.name}
          </a>
        )
      )}
    </div>
  </DisclosurePanel>
</Disclosure>;

    </div>
   
  )
}
