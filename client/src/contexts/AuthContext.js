import React, { createContext, Component } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  userData: null,
  userRole: null,
  setIsLoggedIn: () => {},
  setUserData: () => {},
  setUserRole: () => {},
});

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    // Initialize state from localStorage
    const token = localStorage.getItem('token');
    let userRole = localStorage.getItem('userRole'); // Assuming you store the role as a separate item

    // Optional: Decode the token to extract user role if stored in the token
    // If your JWT token contains the role, and you prefer storing just the token
    // You could decode it here to extract the role instead of storing it separately
    // if(token) {
    //   const decoded = jwt_decode(token);
    //   userRole = decoded.role; // Adjust based on your token's payload structure
    // }

    this.state = {
      isLoggedIn: !!token, // Convert token presence to boolean for isLoggedIn
      userData: null, // Adjust if you need to initialize this with more details
      userRole: userRole,
    };
  }

  setIsLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  };

  setUserData = (userData) => {
    this.setState({ userData });
    if (userData && userData.role) {
      this.setState({ userRole: userData.role });
      localStorage.setItem('userRole', userData.role); // Persist role in localStorage
    }
  };

  setUserRole = (userRole) => {
    this.setState({ userRole });
    localStorage.setItem('userRole', userRole); // Persist role change in localStorage
  };

  render() {
    const { isLoggedIn, userData, userRole } = this.state;
    return (
      <AuthContext.Provider 
        value={{
          isLoggedIn, 
          userData,
          userRole,
          setIsLoggedIn: this.setIsLoggedIn, 
          setUserData: this.setUserData,
          setUserRole: this.setUserRole,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
export const AuthConsumer = AuthContext.Consumer;
