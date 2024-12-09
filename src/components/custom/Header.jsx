// import React, { useEffect, useState } from 'react';
// import { Button, Popover, Typography } from '@mui/material';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { use } from 'react';

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// function Header() {
//   const [user, setUser] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openDailog, setOpenDailog] = useState(false);

//   // const navigation = useNavigation();
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.error("Login Failed:", error),
//   });
//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(
//         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
//         {
//           headers: {
//             Authorization: `Bearer ${tokenInfo?.access_token}`,
//             Accept: "application/json",
//           },
//         }
//       )
//       .then((resp) => {
//         console.log("User Profile:", resp);

//         localStorage.setItem("user", JSON.stringify(resp.data));
//         setOpenDailog(false);
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.error("Error fetching user profile:", error);
//       });
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     setUser(storedUser);
//     console.log(storedUser);
//     console.log(storedUser?.picture);
//     console.log("users");
//   }, []);

//   return (
//     <div className='bg-100 flex flex-row h-20 py-2 px-6 justify-between content-center shadow-sm sticky'>
//       <div className='w-32 h-40'>
//         <img 
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xgoX_ZjjoMtfIWZ2JrRTVvijA37sNAbBxA&s" 
//           alt="trip" 
//         />
//       </div>
//       <div className='my-auto'>
//         {user ? (
//           <div className='flex items-center gap-4'>
//             <button className='bg-white border-2 text-black px-3 py-2 rounded-xl tracking-widest'>My Trips</button>
//             {/* <img 
//               src={user?.picture} 
//               className='h-12 w-12 rounded-full border-2 border-gray-300' 
//               alt="user" 
//             /> */}
//             <Button aria-describedby={id} variant="" onClick={handleClick}>
//             <img 
//               src={user?.picture} 
//               className='h-12 w-12 rounded-full border-2 border-gray-300' 
//               alt="user" 
//             />            </Button>
//             <Popover
//               id={id}
//               open={open}
//               anchorEl={anchorEl}
//               onClose={handleClose}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//             >
//               <Typography sx={{ p: 2 }}>
//                 {/* Logout */}
//                 <h2 onClick={()=>{
//                   googleLogout();
//                   localStorage.clear();
//                   // navigation('/');
//                   window.location.reload();
//                 }}>Logout</h2>
//               </Typography>
//             </Popover>
//           </div>
//         ) : (
//           <button onClick={()=>setOpenDailog(true)} className='bg-black text-white px-3 py-2 rounded-md tracking-widest'>Sign In</button>
//         )}
//       </div>
//       <Dialog
//         className="overflow-x-hidden"
//         open={openDailog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             {/* <h2 className='font-bold text-lg mt-4'>Sign Up With Google</h2> */}
//             <img
//               className="w-40"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xgoX_ZjjoMtfIWZ2JrRTVvijA37sNAbBxA&s"
//               alt="trip"
//             />
//             <h2 className="font-bold text-lg mt-7">Sign Up With Google</h2>
//             <p>Sign in to the App with Google authentication securely</p>

//             <button
//               onClick={() => login()}
//               className="w-full bg-black text-gray-200 py-2 rounded-md"
//             >
//               Sign In With Google
//             </button>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default Header;



import React, { useEffect, useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function Header() {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error("Login Failed:", error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log("User Profile:", resp);

        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenDialog(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    console.log(storedUser);
    console.log(storedUser?.picture);
    console.log("users");
  }, []);

  return (
    <div className='bg-100 w-[100vw] bg-white flex flex-row h-20 py-2 px-6 justify-between content-center shadow-md fixed '>
      <div className='w-32 h-40'>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xgoX_ZjjoMtfIWZ2JrRTVvijA37sNAbBxA&s" 
          alt="trip" 
        />
      </div>

     <div className='flex self-end'>
     <div className='my-auto'>
        {user ? (
          <div className='flex items-center gap-4'>
             <a href="/create-trip">
            <button className='bg-white border-2 text-black px-3 py-2 rounded-xl tracking-widest'>+ Create Trip</button>
            </a>
            <a href="/my-trips">
            <button className='bg-white border-2 text-black px-3 py-2 rounded-xl tracking-widest'>My Trips</button>
            </a>
            <Button aria-describedby={id} variant="" onClick={handleClick}>
              <img 
                src={user?.picture
                  || "https://images.unsplash.com/photo-1558424087-4abfbbc7714b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                } 
                className='h-12 w-12 rounded-full border-2 border-gray-300' 
                alt="Name" 
              />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <h2
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.href='/';
                  }}
                >
                  Logout
                </h2>
              </Typography>
            </Popover>
          </div>
        ) : (
          <button 
            onClick={() => setOpenDialog(true)} 
            className='bg-black text-white px-3 py-2 rounded-md tracking-widest'
          >
            Sign In
          </button>
        )}
      </div>
      <Dialog
        className="overflow-x-hidden"
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img
              className="w-40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xgoX_ZjjoMtfIWZ2JrRTVvijA37sNAbBxA&s"
              alt="trip"
            />
            <h2 className="font-bold text-lg mt-7">Sign Up With Google</h2>
            <p>Sign in to the App with Google authentication securely</p>
            <button
              onClick={() => login()}
              className="w-full bg-black text-gray-200 py-2 rounded-md"
            >
              Sign In With Google
            </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
     </div>
    </div>
  );
}

export default Header;
