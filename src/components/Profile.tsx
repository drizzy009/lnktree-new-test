import { arrow, profile__img, share } from '../assets';

const Profile = () => {
  return (
    <div className="pt-16">
      <div  className='flex flex-col items-center p-0 isolate'>
        <img src={profile__img} alt="Zuri" className="w-[88px] h-[88px] flex flex-col justify-center items-center p-0" />
        <h3 className="pt-6 text-lg font-bold text-center text-gray-900 font-inter">Annette Black</h3>
        <img className='sm:block hidden absolute w-[20px] h-[20px] right-[208px] top-[20px] cursor-pointer' src={arrow} alt="" />
        <img className='sm:hidden block absolute w-[20px] h-[20px] right-[28px] top-[30px] cursor-pointer' src={share} alt="" />
      </div>
    </div>
  );
};

export default Profile;
