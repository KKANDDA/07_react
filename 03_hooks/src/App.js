import {useState}from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { InputContainer } from "./01_useEffect/04-01_test";
import { Timer } from "./01_useEffect/04-02_test";
import { ProfileInput } from "./01_useEffect/04-03_test";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl, { Input } from "./02_useReducer/02_reducer-form-controll";
import { CountCheck, InputText } from "./02_useReducer/02-01_test";
import { HardCalculator } from "./03_useMemo/01_hard-calculator";
import { ComplexCalculator } from "./03_useMemo/02_complex-calculator";
import { UseMemoComponent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
import { Question } from "./03_useMemo/04-01_test";
import { ProductList } from "./03_useMemo/04-02_test";
import { CallBackProblem } from "./04_useCallback/01_problem";
import { FunctionMemorization } from "./04_useCallback/02_function-memorization";
import { CallbackComponent } from "./04_useCallback/03_components";
import { CounterRef } from "./05_useRef/01_problem";
import { UseRefCounter } from "./05_useRef/02_useRef";
import { LoginComponent } from "./05_useRef/03_inputRef";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";



function App() {

  const [message, setMessage] = useState("안녕하세요")
  return (
  <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    {/* <InputContainer/> */}
    {/* <Timer/> */}
    {/* <ProfileInput/> */}
    {/* <UseReducerBasic/> */}
    {/* <ReducerFormControl/> */}
    {/* <CountCheck/> */}
    {/* <InputText/> */}
    {/* <HardCalculator/> */}
    {/* <ComplexCalculator/> */}
    {/* <UseMemoComponent/> */}
    {/* <LocationComponent/> */}
    {/* <Question/> */}
    {/* <ProductList/> */}
    {/* <CallBackProblem/> */}
    {/* <FunctionMemorization/> */}
    {/* <CallbackComponent/> */}
    {/* <CounterRef/> */}
    {/* <UseRefCounter/> */}
    {/* <LoginComponent/> */}
    {/* <Page/> */}
    <ContextContainer/>
  </>
  );
}

export default App;
