/* eslint-disable import/no-absolute-path */
import Shadow from './assets/bg-pattern-desktop.svg';
import Box from './assets/illustration-box-desktop.svg';
import DesktopIllustration from './assets/illustration-woman-online-desktop.svg';
import FAQ from './components/FAQ';
import MobileImg from './components/MobileImg';

const App = () => (
  <div className="flex h-screen flex-col items-center justify-end bg-gradient-to-b from-soft-violet to-soft-blue sm:justify-center">
    <div className="relative mb-[22%] flex h-[530px] w-[330px] flex-col items-center rounded-3xl bg-white sm:mb-0 sm:h-[510px] sm:w-[920px] sm:justify-center">
      <MobileImg />
      <img src={Shadow} alt="" className="absolute" />
      <img src={DesktopIllustration} alt="" className="absolute" />
      <img src={Box} alt="" className="absolute" />
      <FAQ />
    </div>
  </div>
);

export default App;
