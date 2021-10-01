import { Route, Switch } from "react-router-dom"
import { DashboardMain } from "../components/Dashboard/DashboardMain"
import Homepage from "../components/Homepage"
import Campaigns from "../components/Campaigns"
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
            <Route exact path="/campaigns">
                <Campaigns/>
            </Route>
            <Route>Error 404</Route>
        </Switch>
    </div>
}