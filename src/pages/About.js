import React from 'react';
import {connect} from 'react-redux';

// import ParagraphsIntro from '../components/ParagraphsIntro';
import ParagraphsNew from '../components/ParagraphsNew';
import Subnav from '../components/Subnav';

import aboutheaddata from '../data/about/aboutheaddata';
import aboutdatabasic from '../data/about/aboutdatabasic';

import background14 from '../images/subnav/background14.jpg';

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
    const navData = this.props.language === "zh"? aboutdatabasic.chinese: aboutdatabasic.english;
    return (
      <div>
        <Subnav 
          language={this.props.language}
          intro={aboutheaddata}
          aboutData={navData}
          currentActive={this.state.activeIndex}
          childActive={this.changeActive}
          background={styles.subnav}
        />
        <ParagraphsNew language={this.props.language} data={navData} index={this.state.activeIndex}/>
      </div>
    )
  }
}

const styles = {
  subnav: {
    paddingBottom: 30, 
    background: 'url(' + background14 + ')'
  }
}

function mapStateToProps(state) {
  console.log(state.language)
  return {
      language: state.language
  };
}

export default connect(mapStateToProps)(About);