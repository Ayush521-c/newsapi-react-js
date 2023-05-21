
import React, { Component } from 'react'

export class NewsItem extends Component {
  articles= [
    {
        "source": {
            "id": null,
            "name": "Investopedia"
        },
        "author": "Sabrina Karl",
        "title": "What a Fed Rate Hike Could Mean for Your Deposit Accounts - Investopedia",
        "description": "The Federal Reserve is poised to deliver what's expected to be another small rate increase Wednesday. Here's what that could mean for your savings and your debts.",
        "url": "https://www.investopedia.com/what-a-fed-rate-hike-could-mean-for-you-7486374",
        "urlToImage": "https://www.investopedia.com/thmb/Xt6O4Sv4X6rEu_as7Oq-KM4DEJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023.04.28Fedhike-Womanreadingnewspaper-d5e9e359eb034e8baab0586041d27437.jpg",
        "publishedAt": "2023-04-30T16:21:21Z",
        "content": "Next week, the Federal Reserve will decide whether to continue its aggressive campaign to tame inflation by further hiking interest rates, or to pause the increases. The Feds decision, which will be … [+8032 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Athletic"
        },
        "author": "Bruce Feldman",
        "title": "Bruce Feldman on the 2023 NFL Draft: 14 takeaways after seven rounds - The Athletic",
        "description": "What makes Anthony Richardson worth the No. 4 pick, how the Eagles, Jets and Seahawks will fly higher and more.",
        "url": "https://theathletic.com/4472983/2023/04/30/bruce-feldman-nfl-draft-2/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/04/30041129/GettyImages-1252252894-scaled-e1682842341949-1024x681.jpg",
        "publishedAt": "2023-04-30T15:46:55Z",
        "content": "Editors note: Bruce Feldman builds a rapport with many eventual NFL Draft prospects, and their coaches, over a period of years prior to each NFL Draft. Based on his close observations, deep knowledge… [+16188 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "Mammalian Tree of Life Redefined: Genomic Time Machine Traces Back 100 Million Years of Evolution - SciTechDaily",
        "description": "The research uses the genomes of 241 species and can be used to support animal and human health outcomes. Research led by a team of scientists from the Texas A&M School of Veterinary Medicine and Biomedical Sciences puts to bed the heated scientific debate re…",
        "url": "https://scitechdaily.com/?p=273013",
        "urlToImage": "https://scitechdaily.com/images/New-Research-Redefines-Mammalian-Tree-of-Life-scaled.jpg",
        "publishedAt": "2023-04-30T15:29:16Z",
        "content": "ByTexas A&amp;M UniversityApril 30, 2023\r\nResearchers from Texas A&amp;M University have used the largest mammalian genomic dataset to track the evolutionary history of mammals, concluding that mamma… [+11339 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "Knicks-Heat set to renew NBA playoff rivalry that featured brawls and suspensions in the 1990s - CBS Sports",
        "description": "The Heat and Knicks meet in the Eastern Conference semifinals starting on Sunday",
        "url": "https://www.cbssports.com/nba/news/knicks-heat-set-to-renew-nba-playoff-rivalry-that-featured-brawls-and-suspensions-in-the-1990s/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/28/a028de6e-340f-4c84-ae4a-13791912aeee/thumbnail/1200x675/0784a0c652e449b2c0e186977fa70eb6/untitled-design-2023-04-28t181421-871.png",
        "publishedAt": "2023-04-30T15:29:00Z",
        "content": "There are probably more significant rivalries in NBA history, ones that decided championships like the great battles between the Lakers and Celtics back in the day. There are rivalries that, for geog… [+9674 chars]"
    }]
  
  
  
  
  
  
  
      render() {
        
        
      
        let{title,description ,imgurl,newsurl}=this.props;
      
        return (
          <div>
            
            <div className="card" style={{width:"20rem" ,color:"whitesmoke"}}>
            
             
      <img className="card-img-top" src={!imgurl?" https://www.investopedia.com/thmb/Xt6O4Sv4X6rEu_as7Oq-KM4DEJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023.04.28Fedhike-Womanreadingnewspaper-d5e9e359eb034e8baab0586041d27437.jpg":imgurl}

    alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} rel="noopener noreferrer"   target ="_blank" className="btn btn-primary">see more</a>
      </div>
    </div>
            
            </div>
            
        )
        
      }
      
    
    }


export default NewsItem
