import React ,{useState, useEffect}from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardMoviesComponents from '../../Components/CardMovies';
import PaginationComponent from '../../Components/Pagination';
import axios from 'axios';

const HomeContainer = ()=>{
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0)
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


  
  const GetDataTrending = async ()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
      setContent(data.results);
      setPaginationno(data.total_pages);
      console.log('data', data);
  }
  
  useEffect(()=>{
    console.log('Trending Component did mount');
    GetDataTrending();  
}, [])
const handleClick = (number)=>{
  setPageno(number);
}
useEffect(()=>{
  console.log('Trending Component didupdate mount');
  GetDataTrending();
  //eslint-disable-next-line
    }, [pageno])
  return(
    <main className='homePage'>
      <Container>
         <Row>
         <section className='col-12'>
            <h1 className='txtCenter'>Top Trending</h1>
            <h3 className='txtCenter'>TVSeries and Movies</h3>
          </section>
          {
                        content && content.length > 0 ? content.map((item, index)=>{
                            return (<CardMoviesComponents key={index} data={item} />)
                        }) : 'Loading ....'
                        
                    }
                     {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
         </Row>
      </Container>   
    </main>
  )
}
export default HomeContainer;


