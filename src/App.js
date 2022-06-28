
import './App.css'; 
// import Greet from './components/Greet';
// import Button from './components/Button';
// import Welcome from './components/welcome';
// import Counter from './components/Counter';
import OnClick from './components/OnClick';
import ConditionalRendering from './components/Conditional_Rendering';
import ListItems from './components/ListItems';
import Advert from './components/advert/advert';
import Inline from './components/Inline';
import ButtonComponent from './components/ButtonComponent';
import ListMap from './components/listMap';
import Stylesheet from './components/Stylesheet';
import FormValidate from './components/formValidate';
import ModuleStyle from './components/moduleStyle';
import StyledButton from './components/StyledButton';
import FormInput from './components/FormInput-2';
// import Form from './components/formData';
import CheckBox from './components/CheckBox';
import RefInput from './components/RefInput';
import LifeCycleM from './components/LifeCycleM';
// import Axios from './components/AXIOS/Axios';
import Button from './components/HOC2/Button';
import Button2 from './components/HOC2/Button2';
import Button3 from './components/HOC2/Button3';
import Icons from './components/react-icons'
import Sass from './components/SASS/Sass';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import ButtonC from './components/HigherOrderComponent/Button2'


function App() {
  return ( 
    <div className="App">
     {/* <Counter /> */}
     {/* <OnClick /> */}
     {/* <ConditionalRendering  /> */}
     {/* <ListItems /> */}
     {/* <Advert /> */}
    {/* <ListMap /> */}
    {/* <Stylesheet colorName='primary'/> */}
    {/* <Inline /> */}
    {/* <FormValidate /> */}
    {/* <RefInput /> */}
    {/* <LifeCycleM /> */}
    {/* <StyledButton /> */}
    {/* <FormInput /> */}
    {/* <Form /> */}
    {/* <CheckBox /> */}
   {/* <Axios /> */}
   {/* <Button text='Button enhanced by HOC'/>
   <Button2 text='Ordinary Button with no HOC'/>
   <Button3 text='Button enhanced by HOC' /> */}
   {/* <Icons />
   <Sass /> */}
   <ClickCounter nam='John'/>
   <HoverCounter />
   <ButtonC />
    </div>
  );
}

export default App;
