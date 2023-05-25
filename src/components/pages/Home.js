import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])
    
	const fetchData = async () => {
		try {
			var url = 'https://api.spacexdata.com/v4/company';
			const response = await axios.get(url)
			setData(response.data)
		} catch (error) {
			toast.error(`Une erreur s'est produite : ${error.message}`)
		}
	}
    console.log(data);

    return (
        <div className="container">
            <p>Hello World</p>
        </div>
    );
}
 
export default Home;