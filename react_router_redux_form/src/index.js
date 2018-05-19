// import
import React, { Component } from "react";
import ReactDOM from "react-dom";

// youtube search
import YTSearch from "youtube-api-search";
// lodash for throttling
import _ from "lodash";

// custom components
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// api key
const API_KEY = "AIzaSyCGtIV4hFOR2jXiuJoCWtRk-PmjA_jFnSE";

// create new copmonenet to produce html
class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // initial serach
    this.videoSearch("surfboards");
  }

  // implementing video search
  videoSearch(term) {
    // make search for surf boards
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // setting state (cause rerender)
      // this.setState({ videos: videos })
      this.setState({
        //equivalent in ES6 (names have to match)
        videos,
        selectedVideo: videos[0]
      })
    });
  }

  // rendering
  // passing data from the parent state to the child state (passing props)
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

// put component in dom
ReactDOM.render(<App />, document.querySelector(".container"));
