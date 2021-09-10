import "./Feed.css";
import data from "../data/sampleData";
const data1 = [1, 2];

function Feed() {
  return (
    <div className="feed">
      <h1>Home</h1>
      {console.log}
      {data.map((buzz) => {
        return (
          <div className="buzz" key={buzz.id}>
            <h3>{buzz.title}</h3>
            <img src={buzz.img} alt={buzz.title} />
            <p>{buzz.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
