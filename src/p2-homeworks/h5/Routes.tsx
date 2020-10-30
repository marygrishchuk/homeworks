import React from "react";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import { Route, Switch, Redirect } from "react-router-dom";
import EmptyPage from "./pages/EmptyPage";
import PreJuniorPlus from "./pages/PreJuniorPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    PRE_JUNIOR_PLUS: "/pre-junior-plus",
    EMPTY_PAGE: "/empty-page",
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

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
