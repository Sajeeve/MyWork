import React,{Component} from 'react';
import '../contentbarComponent/Contentbar.css';
import './Form.css';


class Create_metrics extends Component{
    render(){
        return(
            <div className='contentThings'>
          <h1 className='title'>Create Metrics</h1>
         <center> <form onSubmit={this.handleSubmit} noValidate>
            <div className="Name">
              <input
                placeholder="Name"
                type="text"
                name="Name"
                noValidate
                onChange={this.handleChange} 
                required
              />
            </div>
            
            <div className="indexNo">
            <select id="index" name="index" required>
                <option value="" disabled selected hidden>Select your index no.</option>
                <option value="3431">3431</option>
                <option value="4567">4567</option>
                <option value="7865">7865</option>
            </select>
              
            </div>
            <div className="formula">
              <textarea
                placeholder="Formula"
                name="formula"
                required
              />
              
            </div>
            <div className="save">
              <button type="submit">Save</button>
            </div>
          </form>  
          </center>  
            </div>
        );
    }
}
export default Create_metrics;
