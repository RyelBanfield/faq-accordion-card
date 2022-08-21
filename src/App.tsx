/* eslint-disable import/no-absolute-path */
import Shadow from '/src/assets/bg-pattern-mobile.svg';
import MobileIllustration from '/src/assets/illustration-woman-online-mobile.svg';

const App = () => (
  <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-soft-violet to-soft-blue text-xs">
    <div className="h-[540px] w-[330px] rounded-3xl bg-white">
      <div className="relative flex justify-center">
        <img
          src={MobileIllustration}
          alt="Illustration of woman online"
          className="absolute -top-[105px] w-[230px]"
        />
        <img src={Shadow} alt="Shadow" />
      </div>
    </div>
  </div>
);

export default App;
