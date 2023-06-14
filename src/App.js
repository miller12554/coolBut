import "./styles.css";
import { Route, Switch, Redirect } from "react-router-dom";
import RestaurantItem from "./RestaurantItem";
import RestaurantResult from "./RestaurantResult";

export default function App() {
  const obj = [
    { restName: "testName", address: "addressTest" },
    { restName: "testName2", address: "addressTest2" }
  ];
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/restaurant_list" />
        </Route>
        <Route exact path="/restaurant_list">
          <RestaurantItem rlist={obj} />
        </Route>
        <Route path="/restaurant_result" component={RestaurantResult} />
      </Switch>
    </div>
  );
}
