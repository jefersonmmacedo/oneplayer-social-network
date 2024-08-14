import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { AccountCreateConfirmed } from '../pages/AccountCreateConfirmed/AccountCreateConfirmed';
import { MyAccount } from '../pages/MyAccount/MyAccount';
import { RecoverPassword } from '../pages/RecoverPassword/RecoverPassword';
import { RecoverPasswordEmail } from '../pages/RecoverPasswordEmail/RecoverPasswordEmail';
import { RecoverPasswordNew } from '../pages/RecoverPasswordNew/RecoverPassword';
import { NotFound } from '../pages/NotFound/NotFound';
import { Profile } from '../pages/Profile/Profile';
import { Profiles } from '../pages/Profiles/Profiles';
import { Reels } from '../pages/Reels/Reels';
import { Explorer } from '../pages/Explorer/Explorer';
import { Trendings } from '../pages/Trendings/Trendings';
import { ComingSoon } from '../pages/ComingSoon/ComingSoon';
import { Group } from '../pages/Group/Group';
import { Groups } from '../pages/Groups/Groups';
import { Lives } from '../pages/Lives/Lives';
import { Moments } from '../pages/Moments/Moments';
import { Saves } from '../pages/Saves/Saves';
import { Notifications } from '../pages/Notifications/Notifications';
import { MessagesChat } from '../pages/MessagesChat/MessagesChat';

function Router () {
        const Local = localStorage.getItem("lenseyewear");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null  ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="*" element={<NotFound />}/>
            <Route path="/#" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/chat" element={<MessagesChat />}/>
            <Route path="/perfis" element={<Profiles />}/>
            <Route path="/virals" element={<Reels />}/>
            <Route path="/lives" element={<Lives />}/>
            <Route path="/moments" element={<Moments />}/>
            <Route path="/conquistas" element={<Moments />}/>
            <Route path="/explorar" element={<Explorer />}/>
            <Route path="/trending" element={<Trendings />}/>
            <Route path="/salvos" element={<Saves />}/>
            <Route path="/notificacoes" element={<Notifications />}/>
            <Route path="/entrar" element={<SignIn />}/>
            <Route path="/feed" element={<ComingSoon />}/>
            <Route path="/grupos" element={<Groups />}/>
            <Route path="/grupo" element={<Group />}/>
            <Route path="/cadastrar" element={<SignUp />}/>
            <Route path="/perfil" element={<Profile />}/>
            <Route path="/conta-criada" element={<AccountCreateConfirmed />}/>
            <Route path="/recuperar-senha" element={<RecoverPassword />}/>
            <Route path="/recuperar-senha/codigo" element={<RecoverPasswordEmail />}/>
            <Route path="/recuperar-senha/nova-senha" element={<RecoverPasswordNew />}/>
            {/* <Route path="/minha-conta/:data" element={<MyAccount />}/> */}
            <Route path="/minha-conta/:data"
                    element={ <PrivateRoute> <MyAccount /></PrivateRoute>} />
            </Routes>
           
    )
}

export {Router}