import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot} from 'react-dom/client'
import Page from './Page.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
// import EmployeeList from './EmployeeList.jsx'
 


ReactDOM.render(
    <Router>
        <React.StrictMode>    
            <Page/>
        </React.StrictMode> 
    </Router>,
    document.getElementById('content')
)

// const root = createRoot(document.getElementById('content'))

// root.render(
//     <Router>
//         <React.StrictMode>
//             <Page/>
//         </React.StrictMode>
//     </Router>
// )