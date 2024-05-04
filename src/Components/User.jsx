import Jeremy from "../assets/images/image-jeremy.png";
import "../styles/User.css";
const User = ({ selectTime, setSelectTime }) => {
  const setTime = (e) => {
    const selectedTime = e.target.innerText.toLowerCase();
    setSelectTime(selectedTime);
  };
  return (
    <>
      <section className="container__User">
        <div className="container__User_data">
          <img src={Jeremy} alt="img-avatar" />
          <div className="container__User_data_movile">
            <p className="rubik300"> Report for</p>
            <h1 className="rubik300">Jeremy Robson</h1>
          </div>
        </div>
        <div className="container__User_list">
          <ol className="list rubik300">
            <li onClick={setTime}>Daily</li>
            <li onClick={setTime}>Weekly</li>
            <li onClick={setTime}>Monthly</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default User;
