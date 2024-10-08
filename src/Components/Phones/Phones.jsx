import axios from "axios";
import { object } from "prop-types";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {
       const [phones, SetPhones] = useState([])
       const [loading, SetLoading] = useState(true)
       useEffect(() => {
              // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
              // .then(res => res.json())
              // .then(data => SetPhones(data.data))

              axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
                     .then(data => {
                            const phoneData = data.data.data;
                            const phonesWithFakeData = phoneData.map(phone => {
                                   const obj = {
                                          name: phone.phone_name,
                                          price: parseInt(phone.slug.split('-')[1])
                                   }
                                   return obj;
                            })
                            console.log(phonesWithFakeData)
                            SetPhones(phonesWithFakeData)
                            SetLoading(false)
                     })

       }, [])
       return (
              <div>
                     {loading && <CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            outerCircleColor="#4fa94d"
                            innerCircleColor="#4fa94d"
                            barColor="#4fa94d"
                            ariaLabel="circles-with-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                     />}
                     <h2>Phones: {phones.length}</h2>
                     <BarChart width={600} height={400} data={phones}>
                            <Bar dataKey="price" fill="#8884d8" />
                            <XAxis dataKey="name"></XAxis>
                            <YAxis ></YAxis>
                            <Tooltip></Tooltip>
                     </BarChart>
              </div>
       );
};

export default Phones;