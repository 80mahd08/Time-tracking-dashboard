import Org from "./component/Org";
import Work from "./../../images/icon-work.svg"
import Play from "./../../images/icon-play.svg"
import Study from "./../../images/icon-study.svg"
import Exercise from "./../../images/icon-exercise.svg"
import Social from "./../../images/icon-social.svg"
import SelfCare from "./../../images/icon-self-care.svg"

const OrgSection = () => {
  return (
    <section className="OrgSection">
      <Org
        p={{
          orgName: "Work",
          hrs1: 32,
          dateName: "Week",
          hr2: 36,
          svg: Work
        }}
      />
      <Org
        p={{
          orgName: "Play",
          hrs1: 10,
          dateName: "Week",
          hr2: 8,
          svg: Play
        }}
      />
      <Org
        p={{
          orgName: "Study",
          hrs1: 4,
          dateName: "Week",
          hr2: 7,
          svg: Study
        }}
      />
      <Org
        p={{
          orgName: "Exercise",
          hrs1: 4,
          dateName: "Week",
          hr2: 5,
          svg: Exercise
        }}
      />
      <Org
        p={{
          orgName: "Social",
          hrs1: 5,
          dateName: "Week",
          hr2: 10,
          svg: Social
        }}
      />
      <Org
        p={{
          orgName: "Self Care",
          hrs1: 32,
          dateName: "Week",
          hr2: 36,
          svg: SelfCare
        }}
      />
    </section>
  );
};

export default OrgSection;
