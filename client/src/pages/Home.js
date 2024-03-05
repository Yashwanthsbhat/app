import React  from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

import { Col, Row } from 'antd'
import Spinner from '../components/Spinner';

function Home() {
 
    const {loading} = useSelector(state=>state.alertsReducer)
   
     return (
        <DefaultLayout>

          <h1>Flow Chart</h1>
          <img src="https://lh4.googleusercontent.com/xcouBd9-RehszcTp1nkPuXlHc87vW6Lz98GeU37jeBDoY1cTg0TMfZfKIwQ0C2vKnrMJFVDC8H7cdpEyPb7bNUHcBT99eAcQWffXlBpg7btBXTtBxRwvK6qwbfPx7g0ec8yAs512 "width="800" height="600"/>

        </DefaultLayout>
    )
}

export default Home
