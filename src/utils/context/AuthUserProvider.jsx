import { useState } from "react";
import { AuthUserContext } from "./index";

export const AuthUserProvider = ({ children }) => {

  const [user, changeUser] = useState(null)

  const setUser = (data) => {
      changeUser(data)
  }

  return (
      <AuthUserContext.Provider value={{ user, setUser }}>
          {children}
      </AuthUserContext.Provider>
  )
}