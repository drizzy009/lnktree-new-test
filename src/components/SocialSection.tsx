import { Icon, slack } from '../assets';

const SocialSection = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-8 px-8">
        <div className="flex flex-row items-center p-0">
          <div className="flex flex-row justify-center gap-6 p-0">
            <img src={slack} alt="slack_icon" />
            <img src={Icon} alt="github_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
