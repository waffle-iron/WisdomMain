import React from 'react';
import {connect} from 'react-redux';
import Subnav from '../components/Subnav';
import TextCards from '../components/TextCards';
import ImageReel from '../components/ImageReel';
import careersheaddata from '../data/careers/careersheaddata';
import careerslistdata from '../data/careers/careerslistdata';
import jobsdata from '../data/careers/jobsdata';

class About extends React.Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.state = { activeIndex: 0 }
  }

  changeActive(active) {
    this.setState({ activeIndex: active })
  }
  
  render() {
    const navData = this.props.language === "zh"? careerslistdata.chinese: careerslistdata.english;
    return (
      <div>
        <Subnav 
          language={this.props.language}
          intro={careersheaddata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
        />
        <div className="container">
          {
            this.state.activeIndex===0?
            <TextCards language={this.props.language} data={jobsdata}/>:
            <ImageReel />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);