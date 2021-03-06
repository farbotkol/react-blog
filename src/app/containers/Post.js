import React, { Component } from 'react'
import PostList from '../components/postList'
import { connect } from 'react-redux'
import { togglePost, fetchBlogPosts } from '../actions'
import { fetchSlugPost } from '../actions/slug'
import PropTypes from 'prop-types'
import Footer from '../components/footer'
import Logo from '../components/logo'
import '../scss/index.scss'

class Post extends Component {

  componentDidMount(){
    this.props.fetchData(window.location.href + 'api/posts')
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Logo height={80} width={80} styleName="App-logo"/>
          <h1 className="App-title">Cosmic JS</h1>
        </header>
          <PostList
            posts={this.props.data}
            />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchBlogPosts(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
