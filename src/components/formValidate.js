import React, { Component } from 'react'

 class FormValidate extends Component {
    constructor(props) {
      super(props)
      this.state = {
         firstName:'',
         touched:{firstName:false}
      }
      this.handleChange = this.handleChange.bind(this)
    //   this.validate = this.validate.bind(this)

    }

    handleBlur(e){
        const {name} = e.target;
        this.setState({
            touched:{...this.state.touched,[name]:true}
        })
    }

    validate = ()=>{
        const errors = {
            errorFirstName:'',
        }
        if((this.state.touched.firstName && this.state.firstName.length < 3) || 
          (this.state.touched.firstName && this.state.firstName.length > 12))
        {
            errors.errorFirstName = 'Name should be between 3 and 12'
        }
        return errors
    }

    handleChange(e){
        const {name, value} = e.target;
        console.log(name,value)
        this.setState({
            [name]:value
        })
    }
  render() {
    const {errorFirstName} = this.validate();
    return (
      <div>
        <form noValidate>
            {errorFirstName && <p>error: {errorFirstName}</p>}
            <input 
            type="text" 
            name='firstName' 
            value={this.state.firstName} 
            placeholder='first name' 
            onChange={this.handleChange} 
            onBlur={this.handleBlur.bind(this)}/>
        </form>
      </div>
    )
  }
}

export default FormValidate