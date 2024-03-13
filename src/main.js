import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homedarknew from "../src/pages/homeDarknew";


function App() {
  return (
  	<div>
	  <BrowserRouter>
	    <Routes>
		    
		    <Route path = "/" element={< Homedarknew/>}/>
		  
		</Routes>
	  </BrowserRouter>
    </div>
  );
}

export default App;