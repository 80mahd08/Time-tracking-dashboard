import ProfileSection from "./component/ProfileSection/ProfileSection";
import OrgSection from "./component/OrgSection/OrgSection";

function App() {
  return (
    <div className="container">
      <div className="grid-container">
        <ProfileSection />
        <OrgSection />
      </div>
    </div>
  );
}

export default App;
