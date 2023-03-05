import HomeLayout from "../Component/HomeLayout";
import Card from "../Component/SubComponent/Card";

const FavoriteSection = () => {
  return (
    <HomeLayout>
      <section id="FavoriteSection" className="mx-5 my-3 mainBody">
        <div className="title">FavoriteSection</div>
        {/* <div className="d-flex" style={{ marginLeft: "30px" }}>
        {[1, 2, 3, 4, 5].map((ele) => {
          return <Card />;
        })}
      </div> */}
      </section>
    </HomeLayout>
  );
};

export default FavoriteSection;
