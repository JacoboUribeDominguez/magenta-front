import React from 'react'
import ClientCard from './card/ClientCard';
import ClientProvider from '../../../stageManagement/context/clients/client/ClientProvider';
import ClientHeader from './ClientHeader/ClientHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import If from '../../common/If/If';
import Then from '../../common/If/Then';
import Else from '../../common/If/Else';
import { ProgressSpinner } from 'primereact/progressspinner';

const Client = () => {

    const [loading, setLoading] = React.useState(true);

    const location = useLocation();
    const navigate = useNavigate();
    const client = location.state;

    React.useEffect(() => {
        if (!client) {
            navigate('/client')
        }
        setLoading(false);
    }, [])

    return (
        <If predicate={!loading}>
            <Then>
                <div className="p-10">
                    <ClientHeader />
                    <ClientProvider>
                        <ClientCard />
                    </ClientProvider>
                </div>
            </Then>
            <Else>
                <div className="w-full h-screen flex justify-center items-center">
                    <ProgressSpinner style={{ width: '100px', height: '100px' }} strokeWidth="4" fill="var(--surface-ground)" animationDuration="1s" />
                </div>
            </Else>
        </If>
    )
}

export default Client