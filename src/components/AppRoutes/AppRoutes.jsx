import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import TaskList from "../../pages/TaskList";
import NewTask from "../../pages/NewTask";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks-list" element={<TaskList />} />
          <Route path="/new-task" element={<NewTask />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
