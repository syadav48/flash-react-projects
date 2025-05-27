
 function useBoolean(initialValue = false) {
    let value = initialValue
    const setValue = (newValue) => {
        value = newValue
    }
  const setTrue = () => {    
    setValue(true)
  }
  const setFalse = () => {
    setValue(false)
  }
  
  return {value , setTrue, setFalse}
}
export default useBoolean