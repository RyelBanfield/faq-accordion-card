/* eslint-disable import/no-absolute-path */
import Shadow from '/src/assets/bg-pattern-mobile.svg';
import MobileIllustration from '/src/assets/illustration-woman-online-mobile.svg';

const MobileImg = () => (
  <>
    {' '}
    <img
      src={MobileIllustration}
      alt="Illustration of woman online"
      className="absolute -top-[115px] w-64 sm:hidden"
    />
    <img src={Shadow} alt="Shadow" className="mb-6 sm:hidden" />
  </>
);

export default MobileImg;
