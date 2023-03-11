import ProfileDate from './component/ProfileDate'
import ProfileNameAndPhoto from './component/ProfileNameAndPhoto'

const ProfileSection = () => {
    return (
        <section className="profileSection">
            <ProfileNameAndPhoto />
            <ProfileDate />
        </section>
    );
}

export default ProfileSection;
