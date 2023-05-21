import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps={
    pageSize :8,
    country:"in",
    category:"general"//these are the default props passed into the urkl of the above api for the user friendly we define the props separately
  }
  static propTypes={
    pageSize:PropTypes.number,
    category:PropTypes.string,
    country:PropTypes.string,   //this is to specify that we are goig to strictly fix the input of form we can give to the these variab;e

  }

  
  
    constructor(){
      super();
      console.log("how are you");
      this.state={
        articles:[],
        loading:this.fail,
        page:1
      }
    }




    // till now we were fetching data from the sample data that we took but now we will try to fetch it from the  our sample now we will chose it directly from the api for that we will use its url directkle and wait (await function until it fetches data from the tha api)


    async componentDidMount(){
      
      try{   
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dcdebc6c8c241d3a17afaf26aa6a8f7&page=1&pageSize=20`  
          const res = await fetch(url);
          const data = await res.json();
          this.setState({
              articles:data.articles
          });
      }
      catch(e) {
          console.log("something is not working");
      }
  }

  handleprev=async()=>{
       
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dcdebc6c8c241d3a17afaf26aa6a8f7&page=${this.state.page-1}&pageSize=20`  
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            articles: data.articles
        });
        this.setState({
          page:this.state.page-1,
          articles: data.articles
        })
        
    }
    

    handlenext=async()=>{
      

      
      
      if(this.state.page+1> Math.ceil(this.state.totalresults/this.props.pageSize)){

      }
       
     else{ 
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dcdebc6c8c241d3a17afaf26aa6a8f7&page=${this.state.page+1}&pageSize=20`   
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            articles: data.articles
        });
        this.setState({
          page:this.state.page+1,
          articles: data.articles
        })
        
    }}
    
    

    
    

  

        
    

  render() {
    return (
      <div className='container my-3 '>
        <div className='row'>
       
        {this.state.articles.map((element)=>{return (
          
          <div className='col '  key={element.url} >
            
        <NewsItem      title={element.title?element.title.slice(0,49):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url}/>
        </div>
        
        )
})}
     
        
        </div >
        
<div className="d-flex justify-content-between">
<button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprev}>prev</button>
<button type="button" className="btn btn-dark" onClick={this.handlenext}>next</button>


</div>
      </div>



    )
  }
}

export default News
