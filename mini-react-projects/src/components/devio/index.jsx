import DevCounter from "./Counter"
import FetchingData from "./fetchingData"
import ToDoList from "./TodoList"
import ToggleSwitch from "./ToggleSwitch"

const DevIo = () => {
    return (
        <div className="dev-io" id="dev-io">
            <DevCounter />
            <ToggleSwitch />
            <ToDoList />
            <FetchingData />
        </div>
    )
}
export default DevIo