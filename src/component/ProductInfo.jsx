// function Asssp() {
//   const usersInfo = [
//     {
//       username: "coder123",
//       location: "New York, USA",
//       email: "coder123@example.com",
//     },
//     {
//       username: "dev_guru",
//       location: "Toronto, Canada",
//       email: "dev_guru@example.com",
//     },
//     {
//       username: "js_ninja",
//       location: "London, UK",
//       email: "js_ninja@example.com",
//     },
//   ];

//   const Greet = "hello";
//   const date = new Date();

//   return (
//     <section>
//       {/* {usersInfo.map(({ username, email, location }) => ( */}
//         <ul key={Math.random()}>
//           <li>Username : {username}</li>
//           <li>Email : {email}</li>
//           <li>Location : {location}</li>
//         </ul>
//       ))}

{
  /* /*Greet  */
}
{
  /* <h1>{Greet}</h1> */
}
{
  /* <p>Date : {date.getDate()}</p> */
}
{
  /* </section> */
}
//  );
//}

/*
const App = () => {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/85052811"
      name="Rehan R & B"
      Age={16}
      isMarried={false}
      hoobies={["coding", "sleeping", "animes"]}
    />
  );
  // <i>
  //   {/* <UserList /> */ //}
//   {/* <ProductList /> */}
// </i>
//};

//props
/*
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.Age}</h2>
      <h3>Is married : {props.isMarried}</h3>
      <h4>Hoobies : {props.hoobies}</h4>
    </section>
  );
};*/

//props.children
/*const Product = (props) => {
  return <div>{props.children}</div>;
};*/

// props valid password or invalid

// const ValidPassword = () => <h1> Valid Password</h1>;
// const InvalidPassword = () => <h1> InValid Password</h1>;

// const Password = ({ Isvalid }) => {
// if (Isvalid) return <ValidPassword />;
//
// return <InvalidPassword />;

// return Isvalid ? <ValidPassword /> : <InvalidPassword />;
// };

// const App = () => {
// return (
// <div>
{
  /* <Password Isvalid={true} /> */
}
{
  /* </div> */
}
// );
// };

// map + children function && parent function + list
/*import React from "react";

const Cart = () => {
  const items = ["Wireless EarBuds", "Power bank", "New SSD", "Hoodie"];

  return (
    <div>
      <h1>Cart 🛒</h1> <h3>Products</h3>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      {items.map((item) => (
        <ul key={Math.random}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default App;
*/

//Greeting file
//App.jsx line
{
  /* <Greeting timeOfDay="morning" /> */
}

/*import React from "react";

const Greeting = (props) => {
  return props.timeOfDay === "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good afternoon!</h1>
  );
};

export default Greeting;
*/

//UserStatus.jsx
//App.jsx line
{
  /* <UserStatus loggedIn={true} isAdmin={true} name="Rehan" /> */
}
/*
import React from "react";

const UserStatus = (props) => {
  if (props.loggedIn && props.isAdmin) {
    return <h1>Welcome {props.name}</h1>;
  } else {
    return <h1>Welcome User</h1>;
  }
};

export default UserStatus;
*/

//Weather.jsx
/*
import React from "react";

const Weather = () => {
  let temp = 26;

  if (temp < 15) {
    return <h1>It's cold outside</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It's nice outside</h1>;
  } else if (temp > 25) {
    return <h1>It's hot outside</h1>;
  }
};

export default Weather;
*/

//onMouseMOve function
/*
const Move = () => {
  function MoveHandler() {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  }

  return (
    <p onMouseMove={MoveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos
      facere dolorem odio inventore consequuntur ipsa veritatis ex earum at?
    </p>
  );
};
*/
