// outsource dependencies
import cn from 'classnames';
import Link from 'next/link';
import { PropsWithChildren, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';


import { useNavSticky } from '@/@core/hooks/use-nav-sticky';


export const BaseNavbar = function BaseNavbar ({ children }: PropsWithChildren<{}>) {
  const { isSticky } = useNavSticky();

  return (
    <header>
      <Disclosure as="nav" className={cn('navbar bg-white', {
        'is-sticky fixed-top': isSticky
      })}>
        { ({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  { /* Mobile menu button */ }
                  <Disclosure.Button
                    className="navbar-toggler inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    { open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    ) }
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href="/" className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                      alt="Your Company"
                    />
                  </Link>
                  <ul className="navbar-nav hidden sm:ml-6 sm:flex sm:space-x-8">
                    { /* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */ }

                    <li className="nav-item inline-flex items-stretch">
                      <a
                      href="#"
                      className="inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 transition-colors ease-linear duration-150"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item inline-flex items-stretch">
                      <a
                        href="#"
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors ease-linear duration-150"
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item inline-flex items-stretch">
                      <a
                        href="#"
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors ease-linear duration-150"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item inline-flex items-stretch">
                      <a
                        href="#"
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors ease-linear duration-150"
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-transparent p-1 text-gray-400 hover:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ease-linear duration-150"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  { /* Profile dropdown */ }
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ease-linear duration-150">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      // enter="transition ease-out duration-200"
                      // enterFrom="transform opacity-0 scale-95"
                      // enterTo="transform opacity-100 scale-100"
                      // leave="transition ease-in duration-75"
                      // leaveFrom="transform opacity-100 scale-100"
                      // leaveTo="transform opacity-0 scale-95"
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        as="ul"
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                        <Menu.Item as="li">
                          <div className="px-4 py-3" role="none">
                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                              John Doe
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                              john.doe@user.com
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item as="li">
                          { ({ active }) => (
                            <Link
                              href="#"
                              className={cn('transition-colors ease-linear duration-150', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          ) }
                        </Menu.Item>
                        <Menu.Item as="li">
                          { ({ active }) => (
                            <Link
                              href="#"
                              className={cn('transition-colors ease-linear duration-150', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </Link>
                          ) }
                        </Menu.Item>
                        <Menu.Item as="li">
                          { ({ active }) => (
                            <Link
                              href="#"
                              className={cn('transition-colors ease-linear duration-150', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </Link>
                          ) }
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="transform opacity-0 scale-98 translate-y-6"
              enterTo="transform opacity-100 scale-100 translate-y-0"
              leave="transition-all ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              // enter="transition ease-out duration-100"
              // enterFrom="transform opacity-0 scale-95"
              // enterTo="transform opacity-100 scale-100"
              // leave="transition ease-in duration-75"
              // leaveFrom="transform opacity-100 scale-100"
              // leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-4">
                  { /* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */ }
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-blue-500 bg-blue-50 py-2 pl-3 pr-4 text-base font-medium text-blue-700 transition-colors ease-linear duration-150"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-colors ease-linear duration-150"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-colors ease-linear duration-150"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-colors ease-linear duration-150"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        ) }
      </Disclosure>
    </header>
  );
};
