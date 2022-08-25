import Accordion from './Accordion';

const FAQ = () => (
  <div className="flex w-full flex-col justify-between px-6 sm:ml-auto sm:mr-14 sm:w-[44%]">
    <h1 className="mb-8 text-center text-3xl font-bold sm:text-left">FAQ</h1>
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
);

export default FAQ;
