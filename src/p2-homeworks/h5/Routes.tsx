import React from "react";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import { Route, Switch, Redirect } from "react-router-dom";
import EmptyPage from "./pages/EmptyPage";
import PreJuniorPlus from "./pages/PreJuniorPlus";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    PRE_JUNIOR_PLUS: "/pre-junior-plus",
    EMPTY_PAGE: "/empty-page",
    HOMEWORK_6: "/homework-6",
    HOMEWORK_7: "/homework-7",
    HOMEWORK_8: "/homework-8",
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.PRE_JUNIOR_PLUS} render={() => <PreJuniorPlus/>}/>
            <Route path={PATH.EMPTY_PAGE} render={() => <EmptyPage/>}/>
            <Route path={PATH.HOMEWORK_6} render={() => <HW6/>}/>
            <Route path={PATH.HOMEWORK_7} render={() => <HW7/>}/>
            <Route path={PATH.HOMEWORK_8} render={() => <HW8/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;