/* eslint-disable import/no-absolute-path */

import { Disclosure, Transition } from '@headlessui/react';

import Arrow from '/src/assets/icon-arrow-down.svg';

type Props = {
  title: string;
  body: string;
};

const Accordion = ({ title, body }: Props) => (
  <div className="mb-4 border-b border-light-grayish-blue text-xs text-dark-grayish-blue">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="mb-4 flex w-full flex-row justify-between">
            <span
              className={
                open
                  ? 'font-bold text-very-dark-desaturated-blue hover:text-soft-red'
                  : 'hover:text-soft-red'
              }
            >
              {title}
            </span>
            <img src={Arrow} alt="Arrow" className={open ? 'rotate-180' : ''} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="mb-4 pr-5">{body}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  </div>
);

export default Accordion;
