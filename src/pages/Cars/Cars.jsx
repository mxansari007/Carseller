
import Carscard from "../../Components/Carscard/Carscard"
import Searchbar from "../../Components/Searchbar/Searchbar";
import Data from '../../json/data.json';
import './Cars.scss';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect,useState } from "react";
import { Pagination } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';
import { useNavigate,useParams } from "react-router-dom";

export default function Cars (){



    const searchValue = useSelector(state => state.search.searchValue);
    const Navigator = useNavigate();
    const [data,setData] = useState([]);
    const {pageId} = useParams();
    useEffect(()=>{
        if(pageId === undefined){
            Navigator('page/1');
            
        }

    },[])

    useEffect(()=>{
        setData(Data.slice((pageId-1)*6,pageId*6));
    },[pageId])

    useEffect(()=>{
        if(searchValue!=''){
            setData(Data.filter(d => d.title.startsWith(searchValue)));
        }else{
            setData(Data.slice((pageId-1)*6,pageId*6));
        }
    },[searchValue])

    const handlePagination = (e,p)=>{
        Navigator(`/page/${p}`);
    }

    return(<>
        <div className="cars-container">
            <Searchbar />
            <div className="cars-content-section">
                {data.map(d=><Carscard data={d} />)}
            </div>
            <div className="pagination">
                <Pagination 
                    onChange={handlePagination}
                    count={10}  
                    shape="rounded" 
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                        />)}
                    />
            </div>
        </div>
    </>)
}
