"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeIcon,
  InboxArrowDownIcon,
  MapPinIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

// Navigatie items voor sidebar
const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Projectfasen", href: "/projectfasen", icon: MapPinIcon },
  { name: "Materialen", href: "/materialen", icon: InboxArrowDownIcon },
  {
    name: "Communicatie",
    href: "/ontdek",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  { name: "Over...", href: "/over", icon: PencilIcon },
];

// Navigatie items voor gebruiker dropdown
const userNavigation = [
  { name: "Profiel", href: "/profiel" },
  { name: "Mijn favorieten", href: "/favorieten" },
];

// Functie om CSS classes samen te voegen
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidenav({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open/close state
  const pathname = usePathname(); // Huidige route pad

  // Check of het navigatie-item actief is
  const isCurrent = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Mobile Sidebar (Dialog) */}
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              {/* Close button aan de zijkant */}
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Sluit sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>

            {/* Sidebar content */}
            <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-[#663B8F] to-[#9366BE] px-6 pb-4">
              {/* Logo bovenaan */}
              <div className="flex items-center justify-center pt-10 border-b border-[#663B8F] pb-4">
                <Link
                  href="/home"
                  aria-label="Ga naar home"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Image
                    alt="Atalenta"
                    src="/logo.svg"
                    width={37}
                    height={37}
                    className="h-auto w-48 cursor-pointer"
                  />
                </Link>
              </div>

              {/* Navigatie items */}
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className={classNames(
                              isCurrent(item.href)
                                ? "bg-[#9D75C3] text-white"
                                : "text-white hover:bg-[#9D75C3]/30",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-6 shrink-0 text-white"
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Afmelden knop */}
                  <li className="mt-auto">
                    <Link
                      href="/login"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-white hover:bg-[#D6B7F5]/30 active:bg-[#9D75C3] border-t border-[#663B8F]/50 pt-4"
                    >
                      <ArrowRightStartOnRectangleIcon
                        aria-hidden="true"
                        onClick={() => setSidebarOpen(false)}
                        className="size-6 shrink-0 text-white group-hover:text-white"
                      />
                      Afmelden
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-[#663B8F] to-[#9366BE] px-6 pb-4">
          {/* Logo bovenaan */}
          <div className="flex items-center justify-center pt-10 border-b-1 border-[#663B8F] pb-4">
            <Link href="/home" aria-label="Ga naar home">
              <Image
                alt="Atalenta"
                src="/logo.svg"
                width={37}
                height={37}
                className="h-auto w-48 cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigatie items */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          isCurrent(item.href)
                            ? "bg-[#9D75C3] text-white"
                            : "text-white hover:bg-[#9D75C3]/30",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-white"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Afmelden knop */}
              <li className="mt-auto">
                <Link
                  href="/login"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-white hover:bg-[#D6B7F5]/30 active:bg-[#9D75C3] border-t border-[#663B8F]/50 pt-4"
                >
                  <ArrowLeftStartOnRectangleIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-white group-hover:text-white"
                  />
                  Afmelden
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <div className="lg:pl-72 h-screen flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 bg-[#E3DFEE]">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="h-6 w-px bg-gray-900/10 lg:hidden"
          />

          {/* Zoekbalk */}
          <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
            <form action="#" method="GET" className="relative w-full max-w-sm">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-gray-400"
              />

              <Input
                id="search"
                name="search"
                type="text"
                placeholder="Zoeken..."
                whiteBackground={true}
              />
            </form>

            {/* Rechterkant: notificaties + profiel */}
            <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
              {/* Notificaties */}
              <button
                type="button"
                className="-m-2.5 p-2.5 text-atalenta-paars group"
              >
                <span className="sr-only">Bekijk notificaties</span>
                <BellIcon
                  aria-hidden="true"
                  className="w-6 h-6 stroke-current fill-none group-hover:fill-atalenta-paars transition-colors"
                />
              </button>

              {/* Separator */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              />

              {/* Profiel dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="relative flex items-center">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open gebruikersmenu</span>
                  <Image
                    alt=""
                    src="/profielfoto.jpeg"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 object-cover"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span className="ml-4 text-sm/6 font-semibold text-gray-900">
                      Danique van der Zanden
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-2 size-5 text-gray-400"
                    />
                  </span>
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </>
  );
}
