import imgJeremy from '../../../images/image-jeremy.png'

const ProfileNameAndPhoto = () => {
  return (
    <div className='ProfileNameAndPhoto'>
      <img src={imgJeremy} alt="" />
      <span>Report for</span>
      <h1>Jeremy <br></br> Robson</h1>
    </div>
  );
};

export default ProfileNameAndPhoto;
