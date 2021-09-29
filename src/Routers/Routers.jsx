import { Route, Switch } from "react-router-dom"
import { DashboardMain } from "../components/Dashboard/DashboardMain"
import Homepage from "../components/Homepage"
export default function Routers() {
    return <div>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>

            {/* to dashboard */}
            <Route exact path="/dashboard">
                <DashboardMain />
            </Route>
            <Route>Error 404</Route>
        </Switch>
    </div>
}