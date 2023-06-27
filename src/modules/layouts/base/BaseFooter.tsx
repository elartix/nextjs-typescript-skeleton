import { PropsWithChildren } from 'react';
import Link from 'next/link';

const footerYear = new Date().getFullYear();
// eslint-disable-next-line no-unused-vars
export const BaseFooter = function BaseFooter ({ children }: PropsWithChildren<{}>) {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <p className="mt-2 text-center text-sm leading-6 text-slate-500">© { footerYear } Some Site Inc. All rights reserved.</p>
        <div className="mt-2 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <ul className="flex flex-wrap items-center justify-center divide-x divide-slate-500/20">
            <li>
              <Link className="ml-4 pe-4 hover:underline" href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link className="ml-4 pe-4 hover:underline" href="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link className="ml-4 pe-4 hover:underline" href="/changelog">Changelog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
