import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageListWithId } from 'src/data/ListData';

const Content = () => {

    const routePage = PageListWithId.map((item) => <Route key={item.id} path={item.path} element={<item.id />}></Route>);

    return (
        <>
            <Router>
                <Routes>
                    {routePage}
                </Routes>
            </Router>
        </>
    )
}

export default Content;