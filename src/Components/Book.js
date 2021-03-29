import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
class Book extends Component {
    constructor(props){
        super(props)
      
    }
    render() {
        return (
            <div className=" my-4 col-4">
              <Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r}
div
    style={{ width: '300px', height: '300px' }} 
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
      
     <img src={this.props.src} style={{width:"100%",height:"auto",maxWidth:"100%"}}/>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
     <h1 className="text-center">{this.props.title}</h1>
     <p>{this.props.desc}</p>
     {/* <a class="cta-btn cta-btn--shell cta-btn--preview"
   data-iframe-src="https://archive.org/stream/janeaustenbookcl0000fowl_h4p7?wrapper=true"
   data-iframe-link="https://archive.org/details/janeaustenbookcl0000fowl_h4p7"
   data-ol-link-track="CTAClick|Preview" href="#bookPreview">Preview</a> */}
   <iframe  width="225px" height="150px" src="https://archive.org/details/janeaustenbookcl0000fowl_h4p7?wrapper=false" frameborder="0"></iframe>
    </BackSide>
  </Flippy>   
            </div>
        );
    }
}

export default Book;