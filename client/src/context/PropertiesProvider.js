import React, {useEffect, useState} from "react";

const PropertiesContext = React.createContext();

function PropertiesProvider({children, user}) {
    const [properties, setProperties] = useState([]);



    useEffect(() => {
        fetch("/properties")
          .then((res) => res.json())
          .then((properties) => setProperties(properties));
      }, [user]);

      return(
        <PropertiesContext.Provider value={{properties, setProperties}}>
            {children}
        </PropertiesContext.Provider>
      )
}

export {PropertiesContext, PropertiesProvider};