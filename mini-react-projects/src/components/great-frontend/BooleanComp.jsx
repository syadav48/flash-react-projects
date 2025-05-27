import useBoolean from "../../greatFrontend/custom-hook/useBoolean";

export default function Component() {
  const { value, setTrue, setFalse } = useBoolean();
    const toggle = () => {
        console.log(value, "vvvvaaalluuee");
        
        if(!value){
            setTrue(true)
        } else{
            setFalse(false)
        }
    }
  console.log(value, setTrue, setFalse, "settrue");
  
  return (
    <div style={{marginTop: '5rem'}}>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
