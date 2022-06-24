import React, { Component } from 'react'

export default class CheckBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        file:'',
        skills: {
            html: false,
            css: false,
            javascript: false,
          },
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name,value, type, files} = e.target;
       console.log(files)
        if(type === 'checkbox'){
          this.setState({
              skills:{
                ...this.state.skills, [name]:value
              }
          }, ()=> console.log(this.state.skills))
        }
        if(type === 'file'){
          this.setState({
            file: files
          })
        }
        this.setState({
           [name]:value
        }, ()=> console.log(this.state))
    }
    
  render() {
    return (
      <div>
        <form>
          <input type='text' name='name'  onChange={this.handleChange}/>
        <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>

          {/* single file */}
          <input type="file"  onChange={this.handleChange} />
          {/* multiple files */}
          <input type="file"  onChange={this.handleChange} multiple/>
        </form>
      </div>
    )
  }
}
