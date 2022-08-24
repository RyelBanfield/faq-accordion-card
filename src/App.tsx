/* eslint-disable import/no-absolute-path */
import Shadow from '/src/assets/bg-pattern-mobile.svg';
import MobileIllustration from '/src/assets/illustration-woman-online-mobile.svg';

import Accordion from './components/Accordion';

const App = () => (
  <div className="flex h-screen flex-col items-center justify-end bg-gradient-to-b from-soft-violet to-soft-blue">
    <div className="mb-[22%] h-[70%] w-[90%] rounded-3xl bg-white">
      <div className="relative mb-5 flex justify-center">
        <img
          src={MobileIllustration}
          alt="Illustration of woman online"
          className="absolute -top-[107px] w-[70%]"
        />
        <img src={Shadow} alt="Shadow" />
      </div>
      <h1 className="mb-10 text-center text-3xl font-bold">FAQ</h1>
      <Accordion
        title="How many team members can I invite?"
        body="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
      />
      <Accordion
        title="What is the maximum file upload size?"
        body="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <Accordion
        title="How do I reset my password?"
        body="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
      />
      <Accordion
        title="Can I cancel my subscription?"
        body="Yes! Send us a message and we’ll process your request no questions asked."
      />
      <Accordion
        title="Do you provide additional support?"
        body="Chat and email support is available 24/7. Phone lines are open during normal business hours."
      />
    </div>
  </div>
);

export default App;
