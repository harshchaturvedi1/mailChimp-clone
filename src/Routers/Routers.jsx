import { Route, Switch } from "react-router-dom"
import { BlocksTab } from "../components/BlocksTab/BlocksTab"
import { CreatingAnEmail } from "../components/CreatingAnEmail/CreatingAnEmail"
import { DashboardMain } from "../components/Dashboard/DashboardMain"
import Homepage from "../components/Homepage"
import SignupPage from "../components/SignupPage/Signup"
import Template from "../components/Template/Template"

export default function Routers() {
    return <div>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/signup">
                <SignupPage />
            </Route>
            {/* to dashboard */}
            <Route exact path="/dashboard">
                <DashboardMain />
            </Route>
            <Route path="/dashboard/template">
                <Template />
            </Route>
            <Route exact path="/createEmail">
                <CreatingAnEmail />
            </Route>
            <Route exact path="/blocktab">
                <BlocksTab />
            </Route>
            <Route>Error 404</Route>
        </Switch>
    </div>
}