import NotesPage from "./pages/NotesPage";
import NotesProvider from "./context/NotesContext";
require('dotenv').config();

function App() {
    return (
        <div id="app">
            <NotesProvider>
                <NotesPage />
            </NotesProvider>
        </div>
    );
}

export default App;