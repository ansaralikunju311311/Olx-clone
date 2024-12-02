

// const LogiSignButton = () => {
//   return (
//     <div className='profile-signlogin' style={{ display: "flex", alignItems: "center" }}>

//     <div className='profile-login' style={{ display: "flex", alignItems: "center", color: "red"}}>
//            <div>
//                <button  style={{ color: "red"}}>Login</button>
//                 <button style={{ color: "red"}}>SignUP</button>
//            </div>
//       </div>
      
//     </div>
//   )
// }

// export default LogiSignButton




const LogiSignButton = () => {
    return (
      <div className='profile-signlogin' style={{ display: "flex", alignItems: "center" }}>
        <div className='profile-login' style={{ display: "flex", alignItems: "center", color: "red" }}>
          <button style={{ color: "red" }} onClick={() => window.location.href = '/login'}>Login</button>
          <button style={{ color: "red" }} onClick={() => window.location.href = '/signup'}>Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default LogiSignButton;