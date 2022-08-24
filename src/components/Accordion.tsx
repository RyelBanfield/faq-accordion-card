/* eslint-disable import/no-absolute-path */

import { Disclosure } from '@headlessui/react';

import Arrow from '/src/assets/icon-arrow-down.svg';

type Props = {
  title: string;
  body: string;
};

const Accordion = ({ title, body }: Props) => (
  <div className="mx-6 border-b text-xs text-dark-grayish-blue">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full flex-row justify-between pb-5">
            <span
              className={
                open ? 'font-bold text-very-dark-desaturated-blue' : ''
              }
            >
              {title}
            </span>
            <img src={Arrow} alt="Arrow" className={open ? 'rotate-180' : ''} />
          </Disclosure.Button>
          <Disclosure.Panel className="pb-5">{body}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
);

export default Accordion;
