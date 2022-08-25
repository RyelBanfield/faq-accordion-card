import FAQ from './components/FAQ';
import MobileImg from './components/MobileImg';

const App = () => (
  <div className="flex h-screen flex-col items-center justify-end bg-gradient-to-b from-soft-violet to-soft-blue sm:justify-center">
    <div className="relative mb-[22%] flex h-[530px] w-[330px] flex-col items-center rounded-3xl bg-white sm:mb-0 sm:h-[510px] sm:w-[920px] sm:justify-center">
      <MobileImg />
      <FAQ />
    </div>
  </div>
);

export default App;
