import { useState } from 'react';

import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function handleModalIsVisible() {
        setModalIsVisible(!modalIsVisible);
    }

    return (
        <>
            <MainHeader onCreatePost={handleModalIsVisible} />
            <main>
                <PostsList
                    isPosting={modalIsVisible}
                    onModalIsVisible={handleModalIsVisible}
                />
            </main>
        </>
    );
}

export default App;
