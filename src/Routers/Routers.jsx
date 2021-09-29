import {Route,Switch} from "react-router-dom"
import Homepage from "../components/Homepage"
export default function Routers(){
    return <div>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route>Error 404</Route>
            </Switch>
    </div>
}