import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './page/AllQuotes'
import QuoteDetail from './page/QuoteDetail'
import NewQuote from './page/NewQuote'
import NotFound from './page/NotFound'
function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route exact path="/quotes">
                        <AllQuotes />
                    </Route>
                    <Route path="/quotes/:quoteId">
                        <QuoteDetail />
                    </Route>
                    <Route path="/new-quote">
                        <NewQuote />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>
        </div>
    )
}

export default App
